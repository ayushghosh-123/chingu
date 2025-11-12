"use client";

import React from "react";

const DemoSectionSimple = () => {
    return (
        <section className="bg-black text-white">
            <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
                <div className="text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="p-5 sm:p-6 lg:p-9">
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                <span className="inline-block opacity-0 animate-slide-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>See</span>{" "}
                                <span className="inline-block opacity-0 animate-slide-in bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>Chingu</span>{" "}
                                <span className="inline-block opacity-0 animate-slide-in" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>in Action</span>
                            </h3> 

                            <p className="text-lg md:text-xl text-gray-300 mb-10">
                                <span className="inline-block opacity-0 animate-fade-slide" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>Watch how easy it is:</span>{" "}
                                <span className="inline-block opacity-0 animate-fade-slide font-semibold text-white" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>Snap.</span>{" "}
                                <span className="inline-block opacity-0 animate-fade-slide font-semibold text-white" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>Track.</span>{" "}
                                <span className="inline-block opacity-0 animate-fade-slide font-semibold text-white" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>Done.</span>
                            </p>

                            <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-2xl opacity-0 animate-fade-in-up group" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
                                <img
                                    src="/images/demo.png"
                                    alt="Chingu demo" 
                                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                                    style={{ objectFit: "cover" }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>
                        </div>
                    </div>
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

                @keyframes slide-in {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(20px);
                    }
                }

                @keyframes fade-slide {
                    from {
                        opacity: 0;
                        transform: translateX(-15px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

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

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }

                .animate-slide-in {
                    animation: slide-in 0.6s ease-out;
                }

                .animate-fade-slide {
                    animation: fade-slide 0.6s ease-out;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.9s ease-out;
                }
            `}</style>
        </section>
    );
};

export default DemoSectionSimple;