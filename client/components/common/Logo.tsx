import React from "react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="50%"
        y="45"
        textAnchor="middle"
        fill="currentColor"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '48px',
          fontWeight: '700',
          letterSpacing: '0.05em',
        }}
      >
        MİLLİ
      </text>
      <g transform="translate(0, 60)">
        <line x1="20" y1="5" x2="50" y2="5" stroke="currentColor" strokeWidth="1.5" />
        <text
          x="100"
          y="10"
          textAnchor="middle"
          fill="currentColor"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            textTransform: 'lowercase',
            letterSpacing: '0.1em',
          }}
        >
          local spirit
        </text>
        <line x1="150" y1="5" x2="180" y2="5" stroke="currentColor" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
