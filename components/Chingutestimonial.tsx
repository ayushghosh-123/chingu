"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image"; // keep if you want to use avatars later

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah Chen", role: "Freelance Designer", quote: "I don't hate budgeting anymore — Chingu makes it cute and simple! The UX is miles better than the competition.", rating: 5 },
  { name: "Mike Rodriguez", role: "Software Developer", quote: "Best app for freelancers to track daily expenses with zero effort. The snap feature is a game-changer for receipts.", rating: 5 },
  { name: "Emma Thompson", role: "College Student", quote: "It helps me save for concerts and books easily. Great for students on a budget!", rating: 4 },
  { name: "David Lee", role: "Small Business Owner", quote: "Good app overall but the email bill detection could be more accurate. Still using it daily though.", rating: 4 },
  { name: "Jessica Kim", role: "Data Analyst", quote: "The visual reports are incredible. I can see exactly where my money goes without complex spreadsheets.", rating: 5 },
  { name: "Ethan Patel", role: "Travel Blogger", quote: "Decent for tracking expenses but sometimes the OCR misreads receipts. Customer support is responsive though.", rating: 3 },
  { name: "Priya Sharma", role: "Marketing Manager", quote: "Love the concept but wish it had more customization options for categories. The AI is pretty smart though!", rating: 4 },
  { name: "Rachel Martinez", role: "Fitness Coach", quote: "Interface is beautiful but loading times can be slow during peak hours. Hope they fix this soon!", rating: 3 },
  { name: "Alex Johnson", role: "Restaurant Owner", quote: "Helps me separate business and personal expenses easily. Would love to see multi-user support in future updates.", rating: 4 },
  { name: "Sophia Williams", role: "Graphic Designer", quote: "Absolutely love it! The AI suggestions actually helped me cut my monthly spending by 20%. Highly recommend!", rating: 5 },
  { name: "James Brown", role: "Freelance Writer", quote: "It's okay, does the job. The reminders are helpful but the app sometimes crashes when uploading multiple receipts.", rating: 3 },
  { name: "Nina Patel", role: "Content Creator", quote: "Perfect for tracking sponsorship payments and expenses. The monthly reports make tax season so much easier!", rating: 5 },
];

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

function getColorFromName(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  const colors = ["#6366f1", "#f59e0b", "#10b981", "#ef4444", "#06b6d4", "#a855f7"];
  return colors[Math.abs(h) % colors.length];
}

const Card = ({ t }: { t: Testimonial }) => (
  <div className="w-[85vw] max-w-sm sm:w-72 md:w-80 lg:w-96 flex-shrink-0">
    <div className="bg-white/5 rounded-xl p-6 md:p-8 border border-white/10 h-full hover:bg-white/8 transition-all">
      <div className="flex items-center mb-4">
        <div className="flex gap-1 text-yellow-400" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill={i < t.rating ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth={i < t.rating ? 0 : 1.5}
              aria-hidden
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.786.57-1.841-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      <p className="text-white/90 italic mb-6 text-base min-h-[5rem]">"{t.quote}"</p>

      <div className="flex items-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-semibold mr-4 flex-shrink-0"
          style={{ backgroundColor: getColorFromName(t.name) }}
        >
          {initials(t.name)}
        </div>

        <div>
          <p className="font-semibold text-white">{t.name}</p>
          <p className="text-sm text-white/60">{t.role}</p>
        </div>
      </div>
    </div>
  </div>
);

export default function ChinguTestimonialsSimple() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      // find first snap item to measure its width (all snap items share same width)
      const firstSnap = el.querySelector(".snap-item") as HTMLElement | null;
      const cardWidth = firstSnap?.clientWidth ?? 320;
      // gap between items: gap-8 => 2rem => 32px (adjust if your layout uses another gap)
      const gap = 32;
      const stride = cardWidth + gap;
      // clamp
      const idx = Math.round(el.scrollLeft / stride);
      setActive(Math.max(0, Math.min(TESTIMONIALS.length - 1, idx)));
    };

    // update initially (in case container is pre-scrolled)
    onScroll();

    el.addEventListener("scroll", onScroll, { passive: true });
    // also handle resize (card widths can change)
    const onResize = () => onScroll();
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const jumpTo = (idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const firstSnap = el.querySelector(".snap-item") as HTMLElement | null;
    const cardWidth = firstSnap?.clientWidth ?? 320;
    const gap = 32;
    const stride = cardWidth + gap;
    el.scrollTo({ left: stride * idx, behavior: "smooth" });
    setActive(idx);
  };

  return (
    <section className="px-0 py-16 bg-black text-white relative">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2
          className="text-3xl lg:text-4xl font-bold mb-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          Loved by mindful spenders
        </h2>
        <p
          className="text-gray-400 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          Real feedback from real users
        </p>
      </div>

      <div className="relative">
        <div
          ref={trackRef}
          className="flex overflow-x-auto gap-8 pb-6 px-4 sm:px-12 lg:px-20 snap-x snap-mandatory no-scrollbar"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* no-scrollbar global style is defined below */}
          {TESTIMONIALS.map((t, i) => (
            // Make this immediate child the snap item AND the animated element
            <div
              key={i}
              className="snap-item snap-center opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${0.25 + i * 0.08}s`,
                animationFillMode: "forwards",
              }}
            >
              <Card t={t} />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-3">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => jumpTo(idx)}
              className={`rounded-full transition-all ${idx === active ? "bg-yellow-400 w-4 h-4" : "bg-white/30 w-3 h-3 hover:bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        /* scrollbar hiding */
        :global(.no-scrollbar::-webkit-scrollbar) {
          display: none;
        }
        :global(.no-scrollbar) {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* fade-in */
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          opacity: 0;
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.8s cubic-bezier(.2,.9,.2,1) forwards;
        }

        /* respects reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in,
          .animate-fade-in-up {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }

        /* ensure snap items size doesn't shrink unexpectedly */
        .snap-item {
          display: inline-flex;
        }
      `}</style>
    </section>
  );
}
