"use client";

import { useEffect, useRef, useState } from "react";
import portfolioData from "@/data/portfolio.json";
import Avatar from "./Avatar";

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // No GSAP animations. Nav visibility handled via CSS and scroll state.

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 will-change-transform ${
        isScrolled
          ? "glass-effect shadow-lg py-3 backdrop-blur-xl bg-dark-950/90 border-b border-dark-800/50"
          : "bg-dark-950/80 backdrop-blur-sm py-4 border-b border-dark-900/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* <Avatar /> */}
            Saqib.
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative text-sm font-medium text-gray-200 hover:text-primary-400 transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="px-6 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-200 hover:text-primary-400 transition-colors z-10"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Full Page Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-dark-950/95 backdrop-blur-md z-[99] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <div className="fixed inset-0 z-[101] md:hidden flex flex-col items-center justify-center px-6">
              <div className="w-full max-w-sm space-y-6">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-6 py-4 text-2xl font-display font-semibold text-gray-200 hover:text-primary-400 glass-effect rounded-2xl border border-dark-800/50 hover:border-primary-500/50 transition-all duration-300 transform hover:scale-105"
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                    }}
                  >
                    {item.name}
                  </button>
                ))}
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="block w-full text-center px-6 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-2xl font-display font-semibold text-xl transition-all duration-300 transform hover:scale-105 mt-4"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${navItems.length * 0.1}s both`
                  }}
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
