"use client";

import { useEffect, useRef, useState } from "react";
import portfolioData from "@/data/portfolio.json";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })
  );

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={locationRef} className="mb-8 text-sm text-gray-400 font-mono">
          {portfolioData.personal.location} — <span className="ml-2">{currentTime}</span>
        </div>

        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
        >
          <span className="block">Hey! I'm</span>
          <span className="block text-gradient mt-2">
            {portfolioData.personal.name}
          </span>
        </h1>

        <h2
          ref={subtitleRef}
          className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-gray-300 mb-6"
        >
          {portfolioData.personal.title}
        </h2>

        <p
          ref={descriptionRef}
          className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {portfolioData.personal.tagline}
        </p>

        {/* <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/50 hover:-translate-y-1 magnetic-btn"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass-effect text-gray-300 hover:text-primary-400 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 border border-dark-800 hover:border-primary-500/50 magnetic-btn"
          >
            Get in Touch
          </a>
        </div> */}

        {/* Scroll Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
