import React from "react";

// Full Penguin SVG (Purple color)
export const Penguin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className="h-24 w-24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    {/* Penguin Body */}
    <circle cx="100" cy="100" r="60" fill="purple" />
    {/* Penguin Belly */}
    <circle cx="100" cy="120" r="30" fill="white" />
    {/* Penguin Eyes */}
    <circle cx="80" cy="80" r="8" fill="black" />
    <circle cx="120" cy="80" r="8" fill="black" />
    {/* Penguin Beak */}
    <polygon points="100,100 90,110 110,110" fill="orange" />
    {/* Penguin Wings */}
    <path
      d="M50 100 Q30 120, 50 140"
      stroke="purple"
      strokeWidth="4"
      fill="none"
    />
    <path
      d="M150 100 Q170 120, 150 140"
      stroke="purple"
      strokeWidth="4"
      fill="none"
    />
    {/* Penguin Feet */}
    <ellipse cx="75" cy="160" rx="15" ry="10" fill="orange" />
    <ellipse cx="125" cy="160" rx="15" ry="10" fill="orange" />
  </svg>
);
