"use client";

import { useEffect, useRef } from "react";
import portfolioData from "@/data/portfolio.json";
export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // No GSAP animations for Projects section.
    // Ensure title remains as plain text and project cards are displayed normally.
    return () => {};
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/30"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 text-center"
        >
          <span className="text-gradient">Selected Work</span>
        </h2>
        <p className="text-center text-gray-400 mb-10 text-lg">
          {portfolioData.personal.subtitle}
        </p>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card group glass-effect rounded-2xl overflow-hidden border-2 border-dark-800 transition-all duration-300 shadow-xl"
            >
              <div className="p-6 bg-dark-900/40">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-display font-bold text-gray-200 mb-2">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-400 font-mono">
                      {project.category} — {project.year}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  {project.achievements.map((achievement, achIndex) => (
                    <div
                      key={achIndex}
                      className="flex items-start text-gray-400 text-sm"
                    >
                      <span className="text-primary-500 mr-3 mt-1">•</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-dark-800/50 border border-dark-700 rounded-full text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-1.5 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-medium transition-all duration-300 text-sm"
                    >
                      Visit Project
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-1.5 glass-effect text-gray-300 hover:text-primary-400 rounded-full font-medium transition-all duration-300 border border-dark-800 text-sm"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder for more projects */}
          {portfolioData.projects.length === 1 && (
            <div className="project-card group glass-effect rounded-3xl p-8 flex items-center justify-center min-h-[400px] border-2 border-dashed border-dark-800 hover:border-primary-500/50 transition-colors">
              <div className="text-center">
                <p className="text-gray-400 mb-2">More projects coming soon...</p>
                <p className="text-sm text-gray-500">Stay tuned for updates!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
