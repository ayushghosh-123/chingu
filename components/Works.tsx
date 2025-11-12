"use client";

import React from "react";

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
      "Easily upload a picture of a bill/receipt or securely link your email. Chingu automatically scans for new financial documents 📩.",
  },
  {
    step: "2",
    title: "AI Magic: Auto-Categorization",
    description:
      "Our AI instantly processes the data, detecting the transaction amount, date, and spending category (e.g., Groceries, Rent, Subscriptions). No manual entry required! 💡",
  },
  {
    step: "3",
    title: "Track, Remind & Save",
    description:
      "View your spending with visualized charts, receive timely reminders for upcoming bills, and get personalized insights to help you save money and reach your goals 📈.",
  },
];

const ChinguSteps = () => {
  return (
    <section className="container mx-auto px-4 py-16 bg-black text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          How Chingu Works 💡
        </h2>
        <p className="text-xl text-gray-300 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          Three simple steps to financial clarity
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {STEPS.map((s, i, arr) => (
          <article
            key={s.step}
            className="flex relative pb-12 opacity-0 animate-fade-in-left group"
            style={{ animationDelay: `${0.1 + i * 0.2}s`, animationFillMode: "forwards" }}
            aria-labelledby={`step-title-${i}`}
            aria-describedby={`step-desc-${i}`}
          >
            {/* connector */}
            {i < arr.length - 1 && (
              <div className="absolute top-4 left-5 w-1 h-full bg-yellow-600/30 rounded animate-grow" style={{ animationDelay: `${0.5 + i * 0.2}s`, animationFillMode: "forwards" }} aria-hidden />
            )}

            {/* number circle */}
            <div className="z-10 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 shadow-lg flex items-center justify-center text-black font-extrabold text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
              {s.step}
            </div>

            {/* content */}
            <div className="ml-8 pt-1 group-hover:translate-x-2 transition-transform duration-300">
              <h3 id={`step-title-${i}`} className="text-2xl font-bold text-yellow-400 mb-2 group-hover:text-orange-400 transition-colors">
                {s.title}
              </h3>
              <p id={`step-desc-${i}`} className="text-gray-300 max-w-prose leading-relaxed">
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
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes grow {
          from {
            height: 0;
          }
          to {
            height: 100%;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }

        .animate-grow {
          height: 0;
          animation: grow 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ChinguSteps;