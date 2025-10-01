'use client';
import React, { useRef, useEffect, useCallback, useMemo, useState } from 'react';

interface Dot {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  vx: number;
  vy: number;
}

interface AnimatedDotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedDotGrid: React.FC<AnimatedDotGridProps> = ({
  dotSize = 3,
  gap = 25,
  baseColor = '#8b5cf6',
  activeColor = '#a855f7',
  proximity = 100,
  className = '',
  style
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const hexToRgb = useCallback((hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  }, []);

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor, hexToRgb]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor, hexToRgb]);

  const initializeDots = useCallback(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const { width, height } = wrapper.getBoundingClientRect();
    const spacing = dotSize + gap;
    const cols = Math.floor(width / spacing);
    const rows = Math.floor(height / spacing);
    
    const startX = (width - (cols - 1) * spacing) / 2;
    const startY = (height - (rows - 1) * spacing) / 2;

    const dots: Dot[] = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = startX + col * spacing;
        const y = startY + row * spacing;
        dots.push({
          x,
          y,
          originalX: x,
          originalY: y,
          vx: 0,
          vy: 0
        });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  const updateCanvas = useCallback(() => {
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
    return { ctx, width, height };
  }, []);

  const animate = useCallback(() => {
    const result = updateCanvas();
    if (!result) return;
    
    const { ctx, width, height } = result;
    const { x: mouseX, y: mouseY } = mouseRef.current;

    ctx.clearRect(0, 0, width, height);

    dotsRef.current.forEach(dot => {
      // Calculate distance to mouse
      const dx = dot.x - mouseX;
      const dy = dot.y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Apply mouse repulsion effect
      if (distance < proximity && distance > 0) {
        const force = (proximity - distance) / proximity;
        const pushX = (dx / distance) * force * 2;
        const pushY = (dy / distance) * force * 2;
        
        dot.vx += pushX;
        dot.vy += pushY;
      }

      // Apply spring force back to original position
      const springX = (dot.originalX - dot.x) * 0.02;
      const springY = (dot.originalY - dot.y) * 0.02;
      
      dot.vx += springX;
      dot.vy += springY;

      // Apply damping
      dot.vx *= 0.95;
      dot.vy *= 0.95;

      // Update position
      dot.x += dot.vx;
      dot.y += dot.vy;

      // Calculate color based on distance from mouse
      let color = baseColor;
      if (distance < proximity) {
        const intensity = 1 - (distance / proximity);
        const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * intensity);
        const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * intensity);
        const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * intensity);
        color = `rgb(${r}, ${g}, ${b})`;
      }

      // Draw dot
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dotSize / 2, 0, Math.PI * 2);
      ctx.fill();
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [updateCanvas, proximity, dotSize, baseColor, baseRgb, activeRgb]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Create explosion effect
    dotsRef.current.forEach(dot => {
      const dx = dot.x - clickX;
      const dy = dot.y - clickY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < proximity * 1.5) {
        const force = (proximity * 1.5 - distance) / (proximity * 1.5);
        const pushX = (dx / distance) * force * 8;
        const pushY = (dy / distance) * force * 8;
        
        dot.vx += pushX;
        dot.vy += pushY;
      }
    });
  }, [proximity]);

  useEffect(() => {
    if (!isMounted) return;

    initializeDots();
    updateCanvas();
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // Handle resize
    const handleResize = () => {
      initializeDots();
      updateCanvas();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMounted, initializeDots, updateCanvas, animate, handleMouseMove, handleClick]);

  if (!isMounted) {
    return (
      <div className={`w-full h-full ${className}`} style={style}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-purple-500 text-sm">Loading animated dots...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full h-full ${className}`} style={style}>
      <div ref={wrapperRef} className="w-full h-full relative">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full cursor-none"
        />
        <div className="absolute top-2 left-2 text-xs bg-purple-500/20 text-purple-700 px-2 py-1 rounded">
          Animated DotGrid: {dotsRef.current.length} dots
        </div>
      </div>
    </div>
  );
};

export default AnimatedDotGrid;