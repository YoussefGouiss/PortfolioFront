// src/components/HeroSection.js
import React from 'react';

// A simple utility to add staggered animation delays
const getAnimationDelay = (index) => `${index * 100}ms`;

const Hello = () => {
  const subHeadingText = "I am a full stack web developer";

  return (
    <div className="flex flex-col items-center text-center animate-fadeInUp">
      {/* Main Headline */}
      <h1 className="text-6xl md:text-8xl font-bold text-gray-200 drop-shadow-lg">
        <span className="text-cyan-400 drop-shadow-glow-cyan">{"</"}</span>
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Hello!
        </span>
        <span className="text-cyan-400 drop-shadow-glow-cyan">{">"}</span>
      </h1>

      {/* Sub-heading */}
      <p className="mt-6 text-xl md:text-2xl text-indigo-200/90 tracking-wider">
        {subHeadingText.split('').map((char, index) => (
          <span
            key={index}
            className="animate-fadeInUp"
            style={{ animationDelay: getAnimationDelay(index), animationDuration: '0.5s' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </p>

      {/* --- NEW: Stacked Action Area --- */}
      <div 
        className="mt-12 flex flex-col items-center gap-6 animate-fadeInUp" 
        style={{ animationDelay: '1s' }}
      >
        {/* Freelancer Status Pill (Unchanged) */}
        <div 
          className="
            inline-flex items-center gap-3 rounded-full 
            bg-purple-900/30 backdrop-blur-sm 
            px-5 py-2.5 
            ring-1 ring-purple-400/40 
          "
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium tracking-wider text-cyan-200">
            Available for Freelance
          </span>
        </div>

        {/* --- NEW: Glowing Ghost Button --- */}
        <a
          href="/contact" // <-- IMPORTANT: Change this to your email
          className="
            px-8 py-3 rounded-full
            font-semibold tracking-wider text-indigo-300
            border-2 border-purple-500/50
            transition-all duration-300 ease-in-out
            hover:bg-purple-500/20 hover:backdrop-blur-sm
            hover:border-purple-400 hover:text-cyan-300
            hover:shadow-lg hover:shadow-purple-500/30
            hover:scale-105
          "
        >
          Contact me 
        </a>
      </div>
    </div>
  );
};

export default Hello;