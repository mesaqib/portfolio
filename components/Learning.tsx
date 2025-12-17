"use client";

import { useEffect, useRef } from "react";
import portfolioData from "@/data/portfolio.json";
export default function Learning() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // No GSAP animations for Learning section.
    return () => {};
  }, []);

  const learningItems = [
    {
      title: "Web3 Development",
      description: "Exploring blockchain, smart contracts, and decentralized applications",
      icon: "⛓️",
    },
    {
      title: "Next.js Advanced Features",
      description: "Deep diving into Server Components, App Router, and latest best practices",
      icon: "⚡",
    },
    {
      title: "TypeScript Mastery",
      description: "Improving type safety, advanced patterns, and best practices",
      icon: "📘",
    },
    {
      title: "Performance Optimization",
      description: "Learning advanced techniques for faster, more efficient applications",
      icon: "🚀",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/30"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-12 text-center"
        >
          <span className="text-gradient">Currently Learning</span>
        </h2>

        <div ref={itemsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-visible">
          {learningItems.map((item, index) => (
            <div
              key={index}
              className="learning-item glass-effect rounded-xl p-4 border border-dark-800 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="learning-icon text-3xl mb-3">{item.icon}</div>
              <h3 className="text-base font-display font-semibold text-gray-200 mb-2 group-hover:text-primary-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

