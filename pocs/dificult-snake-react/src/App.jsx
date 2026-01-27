import { useState, useEffect, useRef } from 'react';
import './App.css';

const INITIAL_BOARD_SIZE = 15;
const CELL_SIZE = 25;
const INITIAL_SPEED = 150;
const METEOR_SPAWN_INTERVAL = 8000;
const BOARD_EXPAND_INTERVAL = 30000;

function App() {
  const [boardSize, setBoardSize] = useState(INITIAL_BOARD_SIZE);
  const [snake, setSnake] = useState([{ x: 7, y: 7 }]);
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [food, setFood] = useState({ x: 10, y: 10 });
  const [meteors, setMeteors] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const directionRef = useRef(direction);
  const timerIntervalRef = useRef(null);
  const gameLoopRef = useRef(null);
  const meteorIntervalRef = useRef(null);
  const boardExpandIntervalRef = useRef(null);

  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  const generateRandomPosition = (size) => {
    return {
      x: Math.floor(Math.random() * size),
      y: Math.floor(Math.random() * size)
    };
  };

  const isPositionValid = (pos, snakeBody, meteorList) => {
    const onSnake = snakeBody.some(segment => segment.x === pos.x && segment.y === pos.y);
    const onMeteor = meteorList.some(meteor => meteor.x === pos.x && meteor.y === pos.y);
    return !onSnake && !onMeteor;
  };

  const spawnMeteor = () => {
    let newMeteor;
    let attempts = 0;
    do {
      newMeteor = generateRandomPosition(boardSize);
      attempts++;
    } while (!isPositionValid(newMeteor, snake, meteors) && attempts < 100);

    if (attempts < 100) {
      setMeteors(prev => [...prev, newMeteor]);
    }
  };

  const expandBoard = () => {
    setBoardSize(prev => prev + 5);
  };

  const resetGame = () => {
    setBoardSize(INITIAL_BOARD_SIZE);
    setSnake([{ x: 7, y: 7 }]);
    setDirection({ x: 1, y: 0 });
    directionRef.current = { x: 1, y: 0 };
    setFood(generateRandomPosition(INITIAL_BOARD_SIZE));
    setMeteors([]);
    setGameOver(false);
    setScore(0);
    setTimer(0);
    setGameStarted(true);
  };

  const startGame = () => {
    resetGame();
  };

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    timerIntervalRef.current = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    meteorIntervalRef.current = setInterval(() => {
      spawnMeteor();
    }, METEOR_SPAWN_INTERVAL);

    boardExpandIntervalRef.current = setInterval(() => {
      expandBoard();
    }, BOARD_EXPAND_INTERVAL);

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (meteorIntervalRef.current) clearInterval(meteorIntervalRef.current);
      if (boardExpandIntervalRef.current) clearInterval(boardExpandIntervalRef.current);
    };
  }, [gameStarted, gameOver]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const moveSnake = () => {
      setSnake(prevSnake => {
        const head = prevSnake[0];
        const newHead = {
          x: head.x + directionRef.current.x,
          y: head.y + directionRef.current.y
        };

        if (newHead.x < 0 || newHead.x >= boardSize ||
            newHead.y < 0 || newHead.y >= boardSize) {
          setGameOver(true);
          return prevSnake;
        }

        if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        if (meteors.some(meteor => meteor.x === newHead.x && meteor.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(prev => prev + 10);
          let newFood;
          do {
            newFood = generateRandomPosition(boardSize);
          } while (!isPositionValid(newFood, newSnake, meteors));
          setFood(newFood);
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    gameLoopRef.current = setInterval(moveSnake, INITIAL_SPEED);

    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [gameStarted, gameOver, food, boardSize, meteors]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameOver) return;

      const key = e.key;
      const currentDir = directionRef.current;

      if (key === 'ArrowUp' && currentDir.y === 0) {
        setDirection({ x: 0, y: -1 });
      } else if (key === 'ArrowDown' && currentDir.y === 0) {
        setDirection({ x: 0, y: 1 });
      } else if (key === 'ArrowLeft' && currentDir.x === 0) {
        setDirection({ x: -1, y: 0 });
      } else if (key === 'ArrowRight' && currentDir.x === 0) {
        setDirection({ x: 1, y: 0 });
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameOver]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="game-container">
      <h1>Snake Game</h1>

      <div className="game-stats">
        <div className="stat">Score: {score}</div>
        <div className="stat">Time: {formatTime(timer)}</div>
        <div className="stat">Board: {boardSize}x{boardSize}</div>
      </div>

      {!gameStarted && (
        <div className="start-screen">
          <button onClick={startGame} className="start-button">Start Game</button>
          <div className="instructions">
            <p>Use arrow keys to control the snake</p>
            <p>Eat food to grow and score points</p>
            <p>Avoid walls, yourself, and meteors!</p>
            <p>Board expands every 30 seconds</p>
          </div>
        </div>
      )}

      {gameStarted && (
        <div
          className="board"
          style={{
            width: boardSize * CELL_SIZE,
            height: boardSize * CELL_SIZE,
            gridTemplateColumns: `repeat(${boardSize}, ${CELL_SIZE}px)`,
            gridTemplateRows: `repeat(${boardSize}, ${CELL_SIZE}px)`
          }}
        >
          {Array.from({ length: boardSize * boardSize }).map((_, idx) => {
            const x = idx % boardSize;
            const y = Math.floor(idx / boardSize);

            const isSnakeHead = snake[0].x === x && snake[0].y === y;
            const isSnakeBody = snake.slice(1).some(segment => segment.x === x && segment.y === y);
            const isFood = food.x === x && food.y === y;
            const isMeteor = meteors.some(meteor => meteor.x === x && meteor.y === y);

            let cellClass = 'cell';
            if (isSnakeHead) cellClass += ' snake-head';
            else if (isSnakeBody) cellClass += ' snake-body';
            else if (isFood) cellClass += ' food';
            else if (isMeteor) cellClass += ' meteor';

            return <div key={idx} className={cellClass}></div>;
          })}
        </div>
      )}

      {gameOver && (
        <div className="game-over">
          <h2>Game Over!</h2>
          <p>Final Score: {score}</p>
          <p>Time Survived: {formatTime(timer)}</p>
          <button onClick={resetGame} className="restart-button">Play Again</button>
        </div>
      )}
    </div>
  );
}

export default App;
