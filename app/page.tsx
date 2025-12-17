"use client";

import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Learning from "@/components/Learning";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OpenToWorkBadge from "@/components/OpenToWorkBadge";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // No GSAP animations — keep placeholder for future client-only logic
    return () => {};
  }, []);

  return (
    <main ref={mainRef} className="min-h-screen">
      {/* <OpenToWorkBadge /> */}
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Learning />
      <Contact />
      <Footer />
    </main>
  );
}
