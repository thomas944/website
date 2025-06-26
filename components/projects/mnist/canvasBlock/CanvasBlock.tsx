import React, { useState } from 'react'
import { useCanvasDrawing, Prediction } from '../helpers/useCanvasDrawing'
import { ModelData } from '../MnistPage';
import styles from './CanvasBlock.module.css'

interface CanvasBlockProps {
    setData: React.Dispatch<React.SetStateAction<ModelData[]>>;
}

const CanvasBlock = ({ setData }: CanvasBlockProps) => {
    const [showOverlay, setShowOverlay] = useState(true);
    const [predictions, setPredictions] = useState<Prediction[]>([]);

    const {
        canvasRef,
        hasDrawn,
        clearCanvas,
        undoLastStroke,
        getCanvasImageData,
        getCanvasBlob
    } = useCanvasDrawing({
        onCanvasChange: (hasContent) => {
            setShowOverlay(!hasContent);
        },
        onPredictionsReset: () => {
            setPredictions([]);
        }
    });

    const handlePredict = async () => {
        if (!hasDrawn) {
            alert('Please draw a digit first!')
            return
        }

        const base64Image = getCanvasImageData()

        const res = await fetch("https://huggingface.co/pham944/mnist-multimodel-api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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",
            },
            body: JSON.stringify({ image: base64Image })
        });

        if (!res.ok) {
            const error = await res.json()
            throw new Error(error.error || "Unknown error from HF API");

        }

        const data = await res.json();
        setData(data)
        console.log(data);
    }

    return (
        <div className={styles.container}>
            <div>
                <span className={styles.titleText}>Draw</span>
            </div>
            <div className={styles.canvasContainer}>
                <canvas
                    ref={canvasRef}
                    width={280}
                    height={280}
                    className={styles.canvas}
                />
            </div>
            <div className={styles.buttonWrapper}>
                <div className={styles.buttonContainer}>
                    <button onClick={() => undoLastStroke()}
                        className={styles.undoButton}>
                        <span>Undo</span>
                    </button>
                    <button onClick={() => clearCanvas()}
                        className={styles.clearButton}>
                        Clear
                    </button>
                    <button onClick={handlePredict}
                        className={styles.predictButton}>
                        Predict
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CanvasBlock