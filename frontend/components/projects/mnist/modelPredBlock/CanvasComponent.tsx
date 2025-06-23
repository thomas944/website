"use client"

import React, { useState } from 'react'
import { useCanvasDrawing, Prediction } from '../helpers/useCanvasDrawing'

const CanvasComponent = () => {
    const [showOverlay, setShowOverlay] = useState(true);
    const [predictions, setPredictions] = useState<Prediction[]>([]);

    const { canvasRef, hasDrawn, clearCanvas, undoLastStroke, getCanvasImageData, getCanvasBlob } = useCanvasDrawing({
        onCanvasChange: (hasContent) => {
            setShowOverlay(!hasContent);
        },
        onPredictionsReset: () => {
            setPredictions([]);
        }
    });


    const handlePredict = () => {
        if (!hasDrawn) {
            alert('Please draw a digit first!')
            return
        }

        const imageData = getCanvasImageData()

        getCanvasBlob((blob: Blob | null) => {
            console.log('Canvas blob', blob)
        })

        console.log('Starting prediction...', imageData);
        const newPredictions = [
            { digit: Math.floor(Math.random() * 10), confidence: 0.7 + Math.random() * 0.3 },
            { digit: Math.floor(Math.random() * 10), confidence: 0.6 + Math.random() * 0.35 },
            { digit: Math.floor(Math.random() * 10), confidence: 0.5 + Math.random() * 0.4 }
        ];

        setPredictions(newPredictions);

    }

    return (
        <div>
            <div style={{ position: 'relative' }}>
                <canvas
                    ref={canvasRef}
                    width={280}
                    height={280}
                    style={{
                        display: 'block',
                        cursor: 'crosshair',
                        background: '#1a1a1a'
                    }}
                />
                <div
                    className={`canvas-overlay ${!showOverlay ? 'hidden' : ''}`}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#666',
                        fontSize: '1.1rem',
                        pointerEvents: 'none',
                        opacity: showOverlay ? 1 : 0,
                        transition: 'opacity 0.3s ease'
                    }}
                >
                    Draw a digit (0-9) here
                </div>
            </div>

            <div className="controls">
                <button onClick={handlePredict}>🧠 Predict</button>
                <button onClick={() => clearCanvas()}>🗑️ Clear</button>
                <button onClick={() => undoLastStroke()}>↶ Undo</button>
            </div>

            {predictions.length > 0 && (
                <div>
                    <h3>Predictions:</h3>
                    {predictions.map((pred, index) => (
                        <div key={index}>
                            Model {index + 1}: {pred.digit} ({(pred.confidence * 100).toFixed(1)}%)
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CanvasComponent