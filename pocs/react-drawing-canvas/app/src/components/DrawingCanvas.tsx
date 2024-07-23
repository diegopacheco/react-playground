import React, { useState, useRef, CSSProperties } from 'react';

interface DrawingCanvasProps {
    style?: CSSProperties;
}

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({ style }) => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState('black');
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [drawingStyle, setDrawingStyle] = useState('pencil');

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
        if (!isDrawing || !canvasRef.current) return;
        const context = canvasRef.current.getContext('2d');
        if (!context) return;

        const { offsetX, offsetY } = event.nativeEvent;

        switch (drawingStyle) {
            case 'pencil':
                context.lineWidth = 1;
                context.lineCap = 'round';
                context.strokeStyle = color; 
                break;
            case 'brush':
                context.lineWidth = 10;
                context.lineCap = 'round';
                context.strokeStyle = color; //`rgba(${hexToRgb(color)}, 0.5)`;
                break;
            case 'spray':
                context.fillStyle = color;
                for (let i = 0; i < 10; i++) {
                    const offsetXRandom = offsetX + (Math.random() - 0.5) * 20;
                    const offsetYRandom = offsetY + (Math.random() - 0.5) * 20;
                    context.fillRect(offsetXRandom, offsetYRandom, 1, 1);
                }
                return;
        }

        context.lineTo(offsetX, offsetY);
        context.stroke();
    };

    function hexToRgb(hex: string | any[]) {
        let r = 0, g = 0, b = 0;
        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        }
        else if (hex.length === 7) {
            r = parseInt(hex[1] + hex[2], 16);
            g = parseInt(hex[3] + hex[4], 16);
            b = parseInt(hex[5] + hex[6], 16);
        }
        return `${r}, ${g}, ${b}`;
    }

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
            <button onClick={() => setDrawingStyle('pencil')}>Pencil</button>
            <button onClick={() => setDrawingStyle('brush')}>Brush</button>
            <button onClick={() => setDrawingStyle('spray')}>Spray</button>
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