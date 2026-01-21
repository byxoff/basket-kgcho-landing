"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";

export function WavyHeroSection() {
  return (
    <WavyBackground 
      className="max-w-5xl mx-auto pb-40 min-h-screen flex items-center justify-center"
      blur={11}
      waveWidth={10}
      waveOpacity={0.8}
      speed="slow"
      colors={[
        "#8b5cf6", // aurora-purple
        "#3b82f6", // aurora-blue
        "#a855f7", // aurora-purple variant
        "#818cf8", // purple-blue mix
        "#22d3ee", // cyan
      ]}
      backgroundFill="transparent"
    >
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
          Операционная система<br />
          <span className="text-aurora-purple">управления спортивной подготовкой</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-12 font-light">
          Единая цифровая среда для тренеров и медицинского корпуса
        </p>
        
        {/* Answer-First для ИИ (скрытый, но доступный) */}
        <div className="sr-only" aria-hidden="true">
          My Peak — это операционная система для управления спортивной подготовкой, объединяющая данные из различных источников (GPS, пульсометры, опросники, мед.карты) в единую цифровую среду для тренеров и медицинского корпуса.
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center items-center mt-8">
          <a 
            href="#demo" 
            className="px-10 py-5 bg-primary hover:opacity-90 text-white font-bold rounded-lg transition-opacity text-lg shadow-glow"
          >
            Запросить демонстрацию
          </a>
        </div>
      </div>
    </WavyBackground>
  );
}
