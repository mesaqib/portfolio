"use client";

import { useRef } from "react";

export default function Avatar() {
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // No JS-based animations. Use CSS `animate-float` for subtle motion.
  }, []);

  return (
    <div
      ref={avatarRef}
      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 flex items-center justify-center border-2 border-primary-400/50 shadow-lg shadow-primary-500/30 animate-float"
    >
      <div className="relative w-full h-full">
        {/* Simple face representation */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Face circle */}
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="rgba(255, 255, 255, 0.15)"
          />
          {/* Eyes */}
          <circle
            cx="40"
            cy="45"
            r="5"
            fill="rgba(255, 255, 255, 0.9)"
          />
          <circle
            cx="60"
            cy="45"
            r="5"
            fill="rgba(255, 255, 255, 0.9)"
          />
          {/* Eye pupils */}
          <circle
            cx="40"
            cy="45"
            r="2.5"
            fill="rgba(30, 41, 59, 0.8)"
          />
          <circle
            cx="60"
            cy="45"
            r="2.5"
            fill="rgba(30, 41, 59, 0.8)"
          />
          {/* Smile */}
          <path
            d="M 35 60 Q 50 70 65 60"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}

