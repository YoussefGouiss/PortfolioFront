// src/components/ScrollIndicator.js
import React from 'react';

// We define the animation inside the component to keep it self-contained.
const componentStyles = `
  @keyframes scroll-animation {
    0% {
      transform: translateY(-6px);
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    70% {
      transform: translateY(6px);
      opacity: 1;
    }
    100% {
      transform: translateY(10px);
      opacity: 0;
    }
  }
  .animate-scroll-wheel {
    animation: scroll-animation 2.2s ease-in-out infinite;
  }
`;

const ScrollIndicator = () => {
  return (
    <>
      <style>{componentStyles}</style>
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeInUp"
        style={{ animationDelay: '2s' }} // Fades in after everything else
      >
        {/* The mouse icon shape */}
        <div 
          className="
            w-7 h-11 rounded-full border-2 border-purple-400/60 
            flex justify-center items-start pt-2
          "
        >
          {/* The animated scroll wheel */}
          <div className="w-1.5 h-3 rounded-full bg-cyan-300 animate-scroll-wheel"></div>
        </div>
        
        <p className="text-xs font-mono tracking-widest text-purple-300/50">
          SCROLL
        </p>
      </div>
    </>
  );
};

export default ScrollIndicator;