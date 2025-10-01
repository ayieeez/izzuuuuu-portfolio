'use client';
import React, { useRef, useEffect, useState } from 'react';

interface SimpleDotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SimpleDotGrid: React.FC<SimpleDotGridProps> = ({
  dotSize = 3,
  gap = 25,
  baseColor = '#8b5cf6',
  className = '',
  style
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const { width, height } = wrapper.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    // Draw grid of dots
    const spacing = dotSize + gap;
    const cols = Math.floor(width / spacing);
    const rows = Math.floor(height / spacing);
    
    const startX = (width - (cols - 1) * spacing) / 2;
    const startY = (height - (rows - 1) * spacing) / 2;

    ctx.fillStyle = baseColor;
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = startX + col * spacing;
        const y = startY + row * spacing;
        
        ctx.beginPath();
        ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }, [isMounted, dotSize, gap, baseColor]);

  if (!isMounted) {
    return (
      <div className={`w-full h-full bg-purple-50/20 ${className}`} style={style}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-purple-500 text-sm">Loading dots...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full h-full ${className}`} style={style}>
      <div ref={wrapperRef} className="w-full h-full relative">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute top-2 left-2 text-xs bg-purple-500/20 text-purple-700 px-2 py-1 rounded">
          Simple DotGrid Active
        </div>
      </div>
    </div>
  );
};

export default SimpleDotGrid;