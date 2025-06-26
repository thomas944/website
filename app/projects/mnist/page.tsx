"use client";

import MnistPage from '@/components/projects/mnist/MnistPage';
import React, { useRef, useEffect } from 'react';

const Page = () => {
    return (
        <MnistPage />
    )
}
//     const canvasRef = useRef<HTMLCanvasElement | null>(null);
//     const pos = useRef({ x: 0, y: 0 });

//     const setPosition = (e: MouseEvent) => {
//         const rect = canvasRef.current?.getBoundingClientRect();
//         if (rect) {
//             pos.current.x = e.clientX - rect.left;
//             pos.current.y = e.clientY - rect.top;
//         }
//     };

//     const draw = (e: MouseEvent) => {
//         if (e.buttons !== 1) return; // Only draw on left click
//         const canvas = canvasRef.current;
//         if (!canvas) return;
//         const ctx = canvas.getContext("2d");
//         if (!ctx) return;

//         const rect = canvas.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;

//         ctx.beginPath();
//         ctx.lineWidth = 5;
//         ctx.lineCap = "round";
//         ctx.strokeStyle = "#c0392b";

//         ctx.moveTo(pos.current.x, pos.current.y);
//         pos.current = { x, y };
//         ctx.lineTo(pos.current.x, pos.current.y);

//         ctx.stroke();
//     };

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;

//         document.addEventListener("mousemove", draw);
//         document.addEventListener("mousedown", setPosition);
//         document.addEventListener("mouseenter", setPosition);

//         return () => {
//             document.removeEventListener("mousemove", draw);
//             document.removeEventListener("mousedown", setPosition);
//             document.removeEventListener("mouseenter", setPosition);
//         };
//     }, []);

//     return (
//         <div>
//             <canvas
//                 ref={canvasRef}
//                 width={400}
//                 height={400}
//                 style={{
//                     border: '1px solid black',
//                     display: 'block',
//                 }}
//             />
//         </div>
//     );
// };

export default Page;
