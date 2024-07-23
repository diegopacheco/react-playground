import React, { useState, useRef, CSSProperties } from 'react';

interface DrawingCanvasProps {
    style?: CSSProperties;
}

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({ style }) => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState('black');
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const startDrawing = (event: React.MouseEvent) => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (context) {
            const { offsetX, offsetY } = event.nativeEvent;
            context.beginPath();
            context.moveTo(offsetX, offsetY);
            setIsDrawing(true);
            context.strokeStyle = color;
        }
    };

    const draw = (event: React.MouseEvent) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (context) {
            const { offsetX, offsetY } = event.nativeEvent;
            context.lineTo(offsetX, offsetY);
            context.stroke();
        }
    };

    const stopDrawing = () => {
        const context = (canvasRef.current as HTMLCanvasElement | null)?.getContext('2d');
        if (context) {
            context.closePath();
        }
        setIsDrawing(false);
    };

    const handleClearCanvas = () => {
        if (canvasRef.current) {
            const canvas = canvasRef.current as HTMLCanvasElement;
            const context = canvas.getContext('2d');
            if (context) {
                context.clearRect(0, 0, canvas.width, canvas.height);
            }
        }
    };

    const changeColor = (newColor: string) => {
        setColor(newColor);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 0 }}>
            <div style={{ marginBottom: '5px' }}>
                <button style={{ margin: '10px', padding: '15px', backgroundColor: 'blue', }}
                    onClick={() => changeColor('blue')}></button>
                <button style={{ margin: '10px', padding: '15px', backgroundColor: 'white' }}
                    onClick={() => changeColor('white')}></button>
                <button style={{ margin: '10px', padding: '15px', backgroundColor: 'black' }}
                    onClick={() => changeColor('black')}></button>
                <button style={{ margin: '10px', padding: '15px',backgroundColor: 'green' }}
                    onClick={() => changeColor('green')}></button>
                <button style={{ margin: '10px', padding: '15px',backgroundColor: 'red' }}
                    onClick={() => changeColor('red')}></button>
                <button style={{ margin: '10px', padding: '15px',backgroundColor: 'yellow' }}
                    onClick={() => changeColor('yellow')}></button>
                <button style={{ margin: '10px', padding: '15px',  background: 'url(/eraser.jpeg) no-repeat center', backgroundSize: 'cover' }}
                    onClick={handleClearCanvas}>______________</button>
            </div>
            <canvas
                style={style}
                ref={canvasRef}
                width={800}
                height={600}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseOut={stopDrawing}
            />
        </div>
    );
};

export default DrawingCanvas;