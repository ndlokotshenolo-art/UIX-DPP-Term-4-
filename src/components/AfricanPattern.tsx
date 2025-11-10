import React from 'react';

export const AfricanPattern = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern id="africanPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path
          d="M20 0L24 8L32 8L26 14L28 22L20 18L12 22L14 14L8 8L16 8L20 0Z"
          fill="currentColor"
          opacity="0.05"
        />
        <circle cx="0" cy="0" r="2" fill="currentColor" opacity="0.03" />
        <circle cx="40" cy="40" r="2" fill="currentColor" opacity="0.03" />
        <path
          d="M0 20L8 24L8 32L14 26L22 28L18 20L22 12L14 14L8 8L8 16L0 20Z"
          fill="currentColor"
          opacity="0.04"
        />
      </pattern>
      <rect width="200" height="200" fill="url(#africanPattern)" />
    </svg>
  );
};
