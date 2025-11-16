"use client";

import React from "react";
import TextType from "./TextType";
import RevolvingEarth from "./Revolvingearth";

const DemoSectionSimple = () => {
    return (
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900 dark:via-purple-900 dark:to-indigo-800">
            
            {/* Soft background circles */}
            <div className="absolute -top-20 -left-20 h-56 w-56 bg-purple-400/30 dark:bg-purple-700/20 rounded-full blur-3xl" />
            <div className="absolute top-40 right-0 h-72 w-72 bg-pink-300/30 dark:bg-pink-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-40 w-40 bg-purple-500/20 dark:bg-purple-700/20 rounded-full blur-3xl" />

            <div className="container mx-auto max-w-6xl relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

                {/* TEXT AREA */}
                <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">

                    <TextType
                        text={["See Chingu", "In Action"]}
                        typingSpeed={70}
                        pauseDuration={1200}
                        showCursor={true}
                        cursorCharacter="|"
                        className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-purple-900 dark:text-white leading-tight"
                    />

                    <p className="mt-4 text-lg sm:text-xl text-purple-900/80 dark:text-purple-200">
                        Watch how easy it is — snap, track, and stay organized effortlessly.
                    </p>

                    <p className="mt-2 text-lg font-semibold text-purple-900 dark:text-white">
                        You're always one tap away from progress.
                    </p>
                </div>

                {/* EARTH ANIMATION */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="scale-90 sm:scale-100 md:scale-110 transition-all duration-300">
                        <RevolvingEarth />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DemoSectionSimple;

