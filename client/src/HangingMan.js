import React from "react";

export const HangingMan = () => {
  return (
    <div className="hanging-man-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 600"
        className="hanging-man-svg"
      >
        <g>
          {/* Rope */}
          <line x1="100" y1="0" x2="100" y2="400" stroke="brown" strokeWidth="5" />

          {/* Man Body */}
          <circle cx="100" cy="400" r="10" fill="black" /> {/* Head */}
          <line x1="100" y1="410" x2="100" y2="460" stroke="black" strokeWidth="4" /> {/* Body */}
          <line x1="100" y1="460" x2="80" y2="490" stroke="black" strokeWidth="4" /> {/* Left Leg */}
          <line x1="100" y1="460" x2="120" y2="490" stroke="black" strokeWidth="4" /> {/* Right Leg */}
          <line x1="100" y1="420" x2="80" y2="440" stroke="black" strokeWidth="4" /> {/* Left Arm */}
          <line x1="100" y1="420" x2="120" y2="440" stroke="black" strokeWidth="4" /> {/* Right Arm */}
        </g>
      </svg>
    </div>
  );
};
