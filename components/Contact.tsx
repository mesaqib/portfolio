"use client";

import { useEffect, useRef } from "react";
import portfolioData from "@/data/portfolio.json";
export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // No GSAP animations for Contact section.
    return () => {};
  }, []);

  const contactMethods = [
    {
      label: "Email",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
      icon: "✉️",
    },
    {
      label: "Location",
      value: portfolioData.personal.location,
      href: "#",
      icon: "📍",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 text-center"
        >
          <span className="text-gradient">Let's Connect</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
          Always up for a good idea and great collaboration. Let's build something that feels right and performs even better.
        </p>

        <div ref={contentRef} className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-semibold text-gray-200 mb-4">
              Open to Opportunities and New Projects
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="flex flex-col items-center p-4 glass-effect rounded-xl hover:border-primary-500/50 border border-dark-800 transition-all duration-300 group text-center"
              >
                <span className="text-3xl mb-3">{method.icon}</span>
                <div className="text-sm text-gray-500 mb-2">{method.label}</div>
                <div className="text-gray-200 group-hover:text-primary-400 transition-colors font-medium break-all">
                  {method.value}
                </div>
              </a>
            ))}
          </div>

          {/* Social Links */}
          {portfolioData.social.linkedin && (
            <div className="flex justify-center gap-4 pt-4">
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 glass-effect rounded-full hover:border-primary-500/50 border border-dark-800 transition-all duration-300 hover-lift text-sm font-medium magnetic-btn"
              >
                LinkedIn
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
