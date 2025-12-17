"use client";

import { useEffect, useRef } from "react";
import portfolioData from "@/data/portfolio.json";
export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // No GSAP animations for Experience section.
    return () => {};
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-10 text-center"
        >
          <span className="text-gradient">Experience</span>
        </h2>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-600 to-primary-500" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <div
                key={exp.id}
                className="experience-card relative pl-0 md:pl-24"
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-6 top-6 w-4 h-4 bg-primary-500 rounded-full ring-4 ring-dark-900" />

                <div className="glass-effect rounded-xl p-5 md:p-6 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-display font-bold text-gray-200 mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-base md:text-lg text-primary-400 font-medium mb-2">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-gray-400 font-mono mt-2 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex items-start text-gray-400"
                      >
                        <span className="text-primary-500 mr-3 mt-1">✓</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-xs text-primary-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
