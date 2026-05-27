import React from "react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img 
      src="/IMG_6381.PNG" 
      alt="Milli Logo" 
      className={className}
    />
  );
}
