"use client";

import React from "react";
import { Camera, Mail, BarChart3, Bell, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Feature = {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  gradient: string;
};

const FEATURES: Feature[] = [
  {
    icon: Camera,
    title: "Smart Receipt Scanner",
    description: "Snap and auto-track expenses with OCR & AI. It scans bills in a flash. Then those expenses are list automatically.",
    gradient: "linear-gradient(90deg,#facc15,#d97706)",
  },
  {
    icon: Mail,
    title: "Email Bill Detection",
    description: "Chingu checks your inbox for bills and updates your expenses. then reminder for you before due date and also list you upcoming bills.",
    gradient: "linear-gradient(90deg,#f59e0b,#f97316)",
  },
  {
    icon: BarChart3,
    title: "Monthly Reports",
    description: "Get clean, shareable visuals of your spending habits. you can see where your money goes each month and make smarter choices.",
    gradient: "linear-gradient(90deg,#f59e0b,#f97316)",
  },
  {
    icon: Bell,
    title: "Reminders & Nudges",
    description: "Never miss a bill — Chingu reminds you gently. It nudges you to stay on top of your finances without the stress.",
    gradient: "linear-gradient(90deg,#f59e0b,#f97316)",
  },
  {
    icon: Brain,
    title: "AI Suggestions",
    description: "Save better with smart, personalized insights.",
    gradient: "linear-gradient(90deg,#f59e0b,#f97316)",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            What can{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Chingu
            </span>{" "}
            do for you?
          </h2>
          <p className="text-xl text-gray-400 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Your personal finance assistant with <span className="text-white/90">superpowers</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="opacity-0 animate-fade-in-up"
                style={{ 
                  animationDelay: `${0.5 + index * 0.2}s`, 
                  animationFillMode: "forwards" 
                }}
              >
                <Card className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer h-full">
                  <CardContent className="p-8 text-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                      style={{
                        background: feature.gradient,
                      }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 4;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;