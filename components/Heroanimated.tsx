"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { createNoise3D } from "simplex-noise";

export default function HeroSimple() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationRef = useRef<number | null>(null);
  const ntRef = useRef<number>(0);
  const noiseRef = useRef(createNoise3D());
  const [isSafari, setIsSafari] = useState(false);

  const waveColors = ["#a78bfa", "#c084fc", "#e879f9"];
  const waveWidth = 36;
  const speed = 0.0025;
  const waveOpacity = 0.65;

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const rect = canvas.getBoundingClientRect();
    const pixelWidth = Math.round(rect.width * dpr);
    const pixelHeight = Math.round(rect.height * dpr);

    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;

      const ctx = canvas.getContext("2d");
      ctxRef.current = ctx;

      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  };

  const drawWave = (n: number) => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;

    if (!ctx || !canvas) return;

    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    ntRef.current += speed;
    const baseY = h * 0.8;

    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth - i * 8;
      ctx.lineCap = "round";
      ctx.strokeStyle = waveColors[i % waveColors.length];

      const step = 4;
      for (let x = 0; x <= w; x += step) {
        const y =
          noiseRef.current(x / (420 + i * 60), 0.35 * i, ntRef.current) *
          (60 + i * 12);

        if (x === 0) ctx.moveTo(x, baseY + y);
        else ctx.lineTo(x, baseY + y);
      }

      ctx.globalAlpha = waveOpacity - i * 0.12;
      ctx.stroke();
      ctx.closePath();
    }
  };

  const render = () => {
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;

    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);

    drawWave(3);
    animationRef.current = requestAnimationFrame(render);
  };

  useEffect(() => {
    resizeCanvas();
    animationRef.current = requestAnimationFrame(render);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-white">

      {/* Animated Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute bottom-0 w-full h-[28vh] sm:h-[34vh] md:h-[40vh] lg:h-[44vh] z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">

        {/* Hero Text */}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
            Improve Your Money Management
            <div className="text-2xl sm:text-3xl md:text-4xl mt-2">
              with <span className="text-purple-600">Chingu</span>
            </div>
          </h1>

          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Simplify your finance tracking with a friendly AI assistant. Scan
            bills, monitor expenses, and stay on top of your money.
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Button className="bg-purple-600 text-white rounded-full px-6 sm:px-8 py-3">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="rounded-full px-5 sm:px-6 py-3">
              Learn More
            </Button>
          </div>
        </div>

        {/* Image & Cards */}
        <div className="relative mt-14 md:mt-20">

          {/* Floating Left Cards */}
          <div className="absolute left-2 sm:left-4 -top-10 space-y-4">
            <div className="border border-gray-200 rounded-2xl p-3 w-32 sm:w-40 bg-white">
              <div className="text-xs text-gray-500">13 Days</div>
              <div className="mt-2 font-semibold text-lg">109 hrs</div>
              <div className="mt-3 h-5 bg-gray-100 rounded-full" />
            </div>

            <div className="border border-gray-200 rounded-2xl p-3 w-32 sm:w-40 bg-white">
              <div className="text-xs text-gray-500">Main Stocks</div>
              <div className="mt-2 font-semibold">$16,073.49</div>
              <div className="mt-2 text-sm text-green-600">+3.2%</div>
            </div>
          </div>

          {/* Center Cluster */}
          <div
            className="
            mx-auto w-full max-w-6xl flex justify-center items-end
            gap-3 sm:gap-6 md:gap-10 lg:gap-16
          ">
            
            {/* LEFT IMAGE */}
            <figure
              className="
                w-[110px] sm:w-[160px] md:w-[210px]
                transform transition-transform duration-500 ease-out
                hover:scale-[2.05]
              "
            >
              <Image src="/images/hero_2.png" alt="left" width={360} height={360} className="w-full" />
            </figure>

            {/* CENTER IMAGE */}
            <figure
              className="
                w-[150px] sm:w-[260px] md:w-[340px] lg:w-[420px]
                transform transition-transform duration-500 ease-out
                hover:scale-[1.57]
              "
            >
              <Image src="/images/hero.png" alt="center" width={560} height={680} className="w-full" />
            </figure>

            {/* RIGHT IMAGE */}
            <figure
              className="
                w-[110px] sm:w-[160px] md:w-[210px]
                transform transition-transform duration-500 ease-out sm:translate-y-2/12
                hover:scale-[2.05]
              "
            >
              <Image src="/images/hero_3.png" alt="right" width={360} height={480} className="w-full" />
            </figure>

          </div>

          {/* Floating Right Widget */}
          <div className="absolute right-2 sm:right-6 -top-6">
            <div className="border border-gray-200 rounded-2xl p-3 w-36 sm:w-44 bg-white">
              <div className="text-xs text-gray-500">Weekly</div>
              <div className="mt-2 font-semibold text-lg">$23,194.80</div>
              <div className="mt-3 h-5 bg-gray-100 rounded-full" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
