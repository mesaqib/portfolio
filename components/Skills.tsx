"use client";

import { useEffect, useRef } from "react";
import portfolioData from "@/data/portfolio.json";
export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // No GSAP animations for Skills section.
    return () => {};
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      skills: portfolioData.skills.languages,
      icon: "💻",
    },
    {
      title: "Frameworks & Libraries",
      skills: portfolioData.skills.frameworks,
      icon: "⚛️",
    },
    {
      title: "Tools & Platforms",
      skills: portfolioData.skills.tools,
      icon: "🛠️",
    },
    {
      title: "Others",
      skills: portfolioData.skills.others,
      icon: "✨",
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/30"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-10 text-center"
        >
          <span className="text-gradient">Technical Skills</span>
        </h2>

        <div
          ref={skillsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-card glass-effect rounded-xl p-5 group"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-lg font-display font-semibold text-gray-200">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-dark-800/50 border border-dark-700 rounded-full text-sm text-gray-300 hover:border-primary-500 hover:text-primary-400 transition-all duration-300 group-hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
