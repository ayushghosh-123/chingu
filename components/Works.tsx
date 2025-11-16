"use client";

import React from "react";
import ScrollFloat from './ScrollFloat';

type Step = {
  step: string;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    step: "1",
    title: "Upload & Scan",
    description:
      "Easily upload a picture of a bill/receipt or securely link your email. Chingu automatically scans for new financial documents.",
  },
  {
    step: "2",
    title: "AI Magic: Auto-Categorization",
    description:
      "Our AI instantly processes the data, detecting the transaction amount, date, and spending category (e.g., Groceries, Rent, Subscriptions). No manual entry required!",
  },
  {
    step: "3",
    title: "Track, Remind & Save",
    description:
      "View your spending with visualized charts, receive timely reminders for upcoming bills, and get personalized insights to help you save money and reach your goals.",
  },
];

const ChinguSteps = () => {
  return (
    <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="text-center mb-16">
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
          How Chingu Works
        </ScrollFloat>
        <p className="text-xl text-gray-600 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          Three simple steps to financial clarity
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {STEPS.map((s, i, arr) => (
          <article
            key={s.step}
            className="flex relative pb-12 opacity-0 animate-cascade group"
            style={{
              animationDelay: `${0.6 + i * 0.5}s`,
              animationFillMode: "forwards"
            }}
            aria-labelledby={`step-title-${i}`}
            aria-describedby={`step-desc-${i}`}
          >
            {/* connector */}
            {i < arr.length - 1 && (
              <div
                className="absolute top-16 left-5 w-1 bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 rounded animate-grow-down"
                style={{
                  animationDelay: `${1.0 + i * 0.5}s`,
                  animationFillMode: "forwards",
                  height: "calc(100% - 3rem)"
                }}
                aria-hidden
              />
            )}

            {/* number circle */}
            <div className="z-10 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-xl flex items-center justify-center text-white font-extrabold text-xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              {s.step}
            </div>

            {/* content */}
            <div className="ml-8 pt-1 group-hover:translate-x-2 transition-transform duration-300">
              <h3 id={`step-title-${i}`} className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                {s.title}
              </h3>
              <p id={`step-desc-${i}`} className="text-gray-600 max-w-prose leading-relaxed">
                {s.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cascade {
          0% {
            opacity: 0;
            transform: translateX(-50px) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes grow-down {
          from {
            height: 0;
            opacity: 0;
          }
          to {
            height: calc(100% - 3rem);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
          animation-fill-mode: forwards;
        }

        .animate-cascade {
          animation: cascade 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-grow-down {
          height: 0;
          opacity: 0;
          animation: grow-down 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ChinguSteps;