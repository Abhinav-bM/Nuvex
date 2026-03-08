import React from "react";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary-color shrink-0"
      >
        <path
          d="M6 26V6L18 20V6"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 6V26L14 12V26"
          stroke="var(--color-secondary)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-xl font-bold tracking-tight text-text-primary">
        NUVEX
      </span>
    </div>
  );
}
