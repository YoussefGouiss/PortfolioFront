import React from 'react';

const AnimatedBackground = ({ children }) => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Main animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-pulse"></div>
      
      {/* Secondary moving gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-800/10 via-blue-800/10 to-indigo-800/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-32 w-40 h-40 bg-pink-500/10 rounded-full blur-xl animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-cyan-500/10 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Moving light streaks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent animate-pulse" style={{ left: '10%', top: '20%', animationDuration: '2s' }}></div>
        <div className="absolute w-px h-16 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent animate-pulse" style={{ left: '30%', top: '60%', animationDuration: '2.5s', animationDelay: '1s' }}></div>
        <div className="absolute w-px h-24 bg-gradient-to-b from-transparent via-pink-400/50 to-transparent animate-pulse" style={{ left: '70%', top: '30%', animationDuration: '3s', animationDelay: '0.5s' }}></div>
        <div className="absolute w-px h-18 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse" style={{ left: '90%', top: '70%', animationDuration: '2.2s', animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Glowing dots grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(6)].map((_, row) => (
          <div key={row} className="flex justify-between items-center h-full">
            {[...Array(8)].map((_, col) => (
              <div
                key={col}
                className="w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-20"
                style={{
                  animationDelay: `${(row + col) * 0.3}s`,
                  animationDuration: `${2 + Math.random()}s`
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/30 pointer-events-none"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;