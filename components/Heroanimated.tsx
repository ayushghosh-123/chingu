"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSimple = () => {
  return (
    <section className="relative h-screen bg-black text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero.png')",
            backgroundPosition: "right center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl space-y-6">
          {/* Animated Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="inline-block animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Meet{" "}
            </span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              Chingu
            </span>
            <span className="inline-block animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              {" "}— your AI
            </span>
            <br />
            <span className="inline-block animate-fade-in-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
              finance buddy
            </span>
          </h1>

          {/* Animated Description */}
          <p className="text-lg md:text-xl text-gray-300 animate-fade-in-up opacity-0" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
            Track expenses, scan bills, and stay smart with your personal AI-powered finance partner.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold rounded-full px-8 py-6 hover:scale-105 transition-transform"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border border-yellow-400 text-yellow-400 rounded-full px-8 py-6 hover:bg-yellow-400 hover:text-black transition-all"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSimple;