"use client";

import React from "react";
import SplitText from "./SplitText";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { features } from "process";
import { Item } from "@radix-ui/react-select";

type Feature = {
  key: number
  title: string;
  description: string;
  
};

export const FEATURES: Feature[] = [
  {
    key: 1,
    title: "Smart Receipt Scanner",
    description:
      "Snap and auto-track expenses with OCR & AI. It scans bills in a flash, then lists your expenses automatically.",
    
  },
  {
    key: 2,
    title: "Email Bill Detection",
    description:
      "Chingu scans your inbox for bills and updates expenses automatically — with reminders before due dates.",
   
  },
  {
    key: 3,
    title: "Monthly Reports",
    description:
      "Get clean, shareable visuals of your spending habits so you can make smarter choices.",
  },
  {
    key: 4,
    title: "Reminders & Nudges",
    description:
      "Never miss a bill — Chingu keeps you ahead with simple, friendly reminders.",
    
  },
  {
    key: 5,
    title: "AI Suggestions",
    description: "Personalized insights to help you save smarter and faster.",
    
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-white/2 py-24">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <SplitText
            text="What can Chingu do for you "
            className="text-5xl font-bold text-center text-black mb-6"
            delay={100}
            duration={0.6}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />

          <p
            className="text-xl text-gray-600 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Your personal finance assistant with{" "}
            <span className="text-white/110 font-semibold">superpowers</span>
          </p>
        </div>

        {/* RESPONSIVE CARDS (NO GRID) */}
        <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
            <HoverEffect items={FEATURES}/>
        </div>
      </div>

      {/* Small Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;

