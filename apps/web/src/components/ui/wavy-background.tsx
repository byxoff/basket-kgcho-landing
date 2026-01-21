"use client";
import { cn } from "../../lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const noiseRef = useRef<ReturnType<typeof createNoise3D> | null>(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    if (!noiseRef.current) {
      noiseRef.current = createNoise3D();
    }
    canvas = canvasRef.current;
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      w = canvas.width = rect.width;
      h = canvas.height = rect.height;
    };
    
    resizeCanvas();
    nt = 0;
    
    window.addEventListener("resize", resizeCanvas);
    render();
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];
  const drawWave = (n: number) => {
    if (!noiseRef.current || !ctx) return;
    const noise = noiseRef.current;
    nt += getSpeed();
    
    // Очищаем canvas
    ctx.clearRect(0, 0, w, h);
    
    // Если нужен фон
    if (backgroundFill && backgroundFill !== "transparent") {
      ctx.fillStyle = backgroundFill;
      ctx.fillRect(0, 0, w, h);
    }
    
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      ctx.globalAlpha = waveOpacity || 0.5;
      
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
    }
  };

  const animationIdRef = useRef<number | null>(null);
  
  const render = () => {
    if (!ctx || !canvas) return;
    drawWave(5);
    animationIdRef.current = requestAnimationFrame(render);
  };

  useEffect(() => {
    const cleanup = init();
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (cleanup) cleanup();
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0 w-full h-full"
        ref={canvasRef}
        id="canvas"
        style={{
          filter: `blur(${blur}px)`,
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
