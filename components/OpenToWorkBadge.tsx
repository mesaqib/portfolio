"use client";

import { useRef } from "react";
import portfolioData from "@/data/portfolio.json";
export default function OpenToWorkBadge() {
  const badgeRef = useRef<HTMLDivElement>(null);

  // No GSAP animations. Badge remains visible when enabled.

  if (!portfolioData.personal.openToWork?.status) return null;

  const workTypes = [];
  if (portfolioData.personal.openToWork.remote) {
    workTypes.push("Remote");
  }
  if (portfolioData.personal.openToWork.wfo) {
    workTypes.push("WFO");
  }

  return (
    <div
      ref={badgeRef}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 glass-effect rounded-full px-3 py-1.5 md:px-4 md:py-2 border border-primary-500/50 shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
    >
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          <div className="absolute top-0 left-0 w-2 h-2 bg-primary-500 rounded-full animate-ping opacity-75" />
        </div>
        <span className="text-xs font-medium text-gray-200">
          Open to Work
        </span>
      </div>
      <div className="text-[10px] text-gray-400 text-center mt-1">
        {workTypes.join(" • ")} • {portfolioData.personal.openToWork.location}
      </div>
    </div>
  );
}

