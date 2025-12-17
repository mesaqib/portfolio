"use client";

import { useEffect, useRef } from "react";
import portfolioData from "@/data/portfolio.json";
export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // No GSAP animations for About section.
    return () => {};
  }, []);

  const stats = [
    { value: portfolioData.personal.stats.experience, label: "Years of Experience" },
    { value: portfolioData.personal.stats.projects, label: "Projects Completed" },
    { value: portfolioData.personal.stats.companies, label: "Companies" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-10 text-center"
        >
          <span className="text-gradient">About Me</span>
        </h2>

        <div ref={contentRef} className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-gray-200">
              {portfolioData.personal.title}
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              {portfolioData.personal.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 glass-effect rounded-full text-sm">
                📍 {portfolioData.personal.location}
              </div>
              <div className="px-4 py-2 glass-effect rounded-full text-sm">
                🎓 {portfolioData.personal.education.degree} - {portfolioData.personal.education.year}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-3xl blur-3xl" />
            <div className="relative glass-effect rounded-3xl p-8 hover-lift">
              <h4 className="text-xl font-display font-semibold mb-4 text-primary-400">
                What I Do
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3">→</span>
                  <span>Building scalable React & Next.js applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3">→</span>
                  <span>Creating pixel-perfect, responsive UIs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3">→</span>
                  <span>Integrating RESTful APIs and Web3 technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3">→</span>
                  <span>Optimizing performance and accessibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-5 text-center"
            >
              <div className="text-3xl sm:text-4xl font-display font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
