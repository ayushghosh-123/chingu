"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import React from "react";

const PriceSection = () => {
  return (
    <section className="relative bg-black text-white py-24 px-6">
      {/* Subtle gold glow background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,rgba(234,179,8,0.3),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.2),transparent_50%)]" />

      <div className="relative container mx-auto text-center">
        <Card className="max-w-2xl mx-auto bg-black/60 backdrop-blur-md border border-yellow-900/50 shadow-[0_0_30px_rgba(250,204,21,0.1)] rounded-2xl">
          <CardContent className="p-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              Chingu is Free. Forever.
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Track your expenses effortlessly with your AI-powered finance companion.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black rounded-full px-8 py-6 text-lg font-semibold shadow-[0_0_25px_rgba(250,204,21,0.4)] hover:shadow-[0_0_35px_rgba(250,204,21,0.6)] transition-all duration-300"
            >
              Get Started Free
              <Heart className="ml-2 h-5 w-5 text-black" />
            </Button>

            <p className="text-sm text-gray-400 mt-6">
              Premium insights and features coming soon — join the waitlist!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PriceSection;
