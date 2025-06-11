import { useState, useRef, useEffect } from 'react'
import './App.css'

const SHAPES = {
  RECT: 'rect',
  CIRCLE: 'circle'
};

interface Shape {
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  id: number;
  color: string;
}

function App() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [currentShape, setCurrentShape] = useState<Shape | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState(SHAPES.RECT);
  const canvasRef = useRef<HTMLDivElement>(null);

  const getRandomColor = () => {
    const colors = ['#e6194B', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#42d4f4', '#f032e6'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!canvasRef.current) return;
    
    e.preventDefault();
    
    const rect = canvasRef.current.getBoundingClientRect();
    const startX = e.clientX - rect.left;
    const startY = e.clientY - rect.top;

    const newShape: Shape = {
      type: tool,
      x: startX,
      y: startY,
      width: 0,
      height: 0,
      id: Date.now(),
      color: getRandomColor()
    };
    
    setCurrentShape(newShape);
    setIsDrawing(true);
    
    console.log("Mouse down", { x: startX, y: startY, tool });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing || !currentShape || !canvasRef.current) return;
    
    e.preventDefault();
    
    const rect = canvasRef.current.getBoundingClientRect();
    const endX = e.clientX - rect.left;
    const endY = e.clientY - rect.top;

    setCurrentShape((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        width: endX - prev.x,
        height: endY - prev.y
      };
    });
    
    console.log("Mouse move", { endX, endY });
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isDrawing && currentShape) {
      if (Math.abs(currentShape.width) > 2 && Math.abs(currentShape.height) > 2) {
        setShapes(prevShapes => [...prevShapes, currentShape]);
        console.log("Added shape", currentShape);
      }
      setCurrentShape(null);
      setIsDrawing(false);
    }
  };

  const handleMouseLeave = () => {
    if (isDrawing && currentShape) {
      if (Math.abs(currentShape.width) > 2 && Math.abs(currentShape.height) > 2) {
        setShapes(prevShapes => [...prevShapes, currentShape]);
      }
      setCurrentShape(null);
      setIsDrawing(false);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDrawing && currentShape) {
        if (Math.abs(currentShape.width) > 2 && Math.abs(currentShape.height) > 2) {
          setShapes(prevShapes => [...prevShapes, currentShape]);
        }
        setCurrentShape(null);
        setIsDrawing(false);
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDrawing, currentShape]);

  useEffect(() => {
    const sampleShape: Shape = {
      type: SHAPES.RECT,
      x: 100,
      y: 100,
      width: 200,
      height: 150,
      id: 1,
      color: '#ff0000'
    };
    
    setShapes([sampleShape]);
    console.log("Added sample shape for testing");
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Figma-like Drawing Tool</h1>
      
      <div className="mb-4 flex gap-2">
        <button 
          onClick={() => setTool(SHAPES.RECT)}
          className={`px-4 py-2 ${tool === SHAPES.RECT ? 'bg-blue-700' : 'bg-blue-500'} text-white rounded text-lg`}
        >
          Rectangle
        </button>
        <button 
          onClick={() => setTool(SHAPES.CIRCLE)}
          className={`px-4 py-2 ${tool === SHAPES.CIRCLE ? 'bg-green-700' : 'bg-green-500'} text-white rounded text-lg`}
        >
          Circle
        </button>
        <button 
          onClick={() => setShapes([])} 
          className="px-4 py-2 bg-red-500 text-white rounded text-lg"
        >
          Clear
        </button>
      </div>
      
      <div
        ref={canvasRef}
        className="border-4 border-gray-800 w-full h-[500px] relative bg-gray-100 cursor-crosshair"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute top-0 left-0 p-2 bg-white bg-opacity-70 z-10">
          {isDrawing ? "Drawing..." : "Ready to draw!"}
        </div>
        
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className="absolute border-2 border-black opacity-80"
            style={{
              left: Math.min(shape.x, shape.x + shape.width),
              top: Math.min(shape.y, shape.y + shape.height),
              width: Math.abs(shape.width),
              height: Math.abs(shape.height),
              borderRadius: shape.type === SHAPES.CIRCLE ? '50%' : '0',
              backgroundColor: shape.color || '#90cdf4'
            }}
          />
        ))}
        
        {currentShape && (
          <div
            className="absolute border-2 border-blue-500 opacity-80"
            style={{
              left: Math.min(currentShape.x, currentShape.x + currentShape.width),
              top: Math.min(currentShape.y, currentShape.y + currentShape.height),
              width: Math.abs(currentShape.width),
              height: Math.abs(currentShape.height),
              borderRadius: currentShape.type === SHAPES.CIRCLE ? '50%' : '0',
              backgroundColor: currentShape.color || '#90cdf4'
            }}
          />
        )}
      </div>
      
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-bold text-lg">How to use:</h3>
        <ol className="list-decimal pl-6 mt-2">
          <li>Select Rectangle or Circle tool</li>
          <li>Click and hold in the drawing area</li>
          <li>Drag to create your shape</li>
          <li>Release to finish drawing</li>
        </ol>
        <div className="mt-3 p-2 bg-blue-100 rounded">
          <p className="font-semibold">Total shapes: {shapes.length}</p>
          <p className="text-sm mt-1">Current tool: {tool === SHAPES.RECT ? "Rectangle" : "Circle"}</p>
        </div>
      </div>
    </div>
  );
}

export default App