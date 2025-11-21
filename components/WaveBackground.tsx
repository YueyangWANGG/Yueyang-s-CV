import React, { useEffect, useRef } from 'react';

const WaveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    const waves = [
      { y: height * 0.7, length: 0.01, amplitude: 50, frequency: 0.01, color: 'rgba(56, 189, 248, 0.1)' }, // Cyan transparent
      { y: height * 0.75, length: 0.007, amplitude: 70, frequency: 0.008, color: 'rgba(139, 92, 246, 0.1)' }, // Violet transparent
      { y: height * 0.8, length: 0.015, amplitude: 30, frequency: 0.02, color: 'rgba(56, 189, 248, 0.05)' }
    ];

    let increment = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);
      increment += 0.02;

      waves.forEach((wave, i) => {
        ctx.beginPath();
        ctx.moveTo(0, wave.y);
        
        for (let i = 0; i < width; i++) {
            ctx.lineTo(i, wave.y + Math.sin(i * wave.length + increment + (i * 10)) * wave.amplitude * Math.sin(increment));
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.fillStyle = wave.color;
        ctx.fill();
        ctx.closePath();
      });
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default WaveBackground;