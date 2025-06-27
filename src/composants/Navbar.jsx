import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeHover, setActiveHover] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About me', path: '/about' },
    { name: 'Project', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path) => {
    console.log(`Navigating to: ${path}`);
    // In your actual app, replace this with your router navigation
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between relative">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
              {/* Logo placeholder - replace with your image */}

            
              <img 
                src="public\codewithgouiss-removebg-preview.png" 
                alt="Logo" 
                className="h-12 w-auto relative z-10 transition-all duration-300 group-hover:scale-110" 
              />
             
            </div>

          </div>

          {/* Navigation Items - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.path}
                className="group relative px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setActiveHover(index)}
                onMouseLeave={() => setActiveHover(null)}
              >
                {/* Holographic background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-lg transition-all duration-500"></div>
                
                {/* Neon border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-cyan-400/50 transition-all duration-300"></div>
                
                {/* Glitch effect overlay */}
                <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 rounded-lg transition-all duration-100 group-hover:animate-pulse"></div>

                <div className="relative z-10 flex items-center">
                  {/* Text with typing effect */}
                  <span className="font-mono text-gray-300 group-hover:text-cyan-400 transition-all duration-300 relative">
                    <span className="group-hover:animate-pulse">&lt;</span>
                    <span className="group-hover:text-white font-semibold">{item.name}</span>
                    <span className="group-hover:animate-pulse">/&gt;</span>
                    
                    {/* Cursor blink */}
                    <span className="absolute -right-2 top-0 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping">|</span>
                  </span>
                </div>

                {/* Energy pulse effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition-all duration-300 ${
                  activeHover === index ? 'animate-pulse' : ''
                }`}></div>

                {/* Matrix rain effect */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse"></div>
                </div>

                {/* Code brackets that expand on hover */}
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-x-1">
                  <span className="text-xs font-mono animate-pulse">{'{'}</span>
                </div>
                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                  <span className="text-xs font-mono animate-pulse">{'}'}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="group relative p-2 z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:bg-white ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-cyan-400 mt-1 transition-all duration-300 group-hover:bg-white ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-cyan-400 mt-1 transition-all duration-300 group-hover:bg-white ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/50 rounded transition-all duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        {/* Backdrop with blur */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        
        {/* Mobile Menu Panel */}
        <div className={`absolute top-0 right-0 h-screen w-80 max-w-[85vw] bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl border-l border-cyan-500/30 shadow-2xl transition-all duration-500 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 font-mono text-sm">Menu</span>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="group p-2 rounded-lg border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="w-5 h-5 relative">
                <div className="absolute inset-0 w-full h-0.5 bg-cyan-400 top-1/2 rotate-45 group-hover:bg-white transition-colors duration-300"></div>
                <div className="absolute inset-0 w-full h-0.5 bg-cyan-400 top-1/2 -rotate-45 group-hover:bg-white transition-colors duration-300"></div>
              </div>
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col p-6 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.path}
                className="group relative px-6 py-4 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => setMobileMenuOpen(false)}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500"></div>
                
                {/* Holographic border */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-400/40 transition-all duration-300"></div>
                
                {/* Moving particles effect */}
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                  <div className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{left: '10%', top: '20%', animationDelay: '0s'}}></div>
                  <div className="absolute w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{left: '80%', top: '60%', animationDelay: '0.5s'}}></div>
                  <div className="absolute w-1 h-1 bg-pink-400 rounded-full animate-bounce" style={{left: '50%', top: '80%', animationDelay: '1s'}}></div>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex flex-col">
                    {/* Main text */}
                    <span className="font-mono text-gray-300 group-hover:text-white transition-all duration-300 text-lg font-semibold">
                      <span className="text-cyan-400 group-hover:animate-pulse">&lt;</span>
                      <span className="group-hover:text-cyan-400 transition-all duration-300">{item.name}</span>
                      <span className="text-cyan-400 group-hover:animate-pulse">/&gt;</span>
                    </span>
                    
                    {/* Subtitle */}
                    <span className="text-xs text-gray-500 group-hover:text-cyan-300 transition-all duration-300 font-mono mt-1 opacity-0 group-hover:opacity-100">
                      Navigate to {item.name.toLowerCase()}
                    </span>
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <div className="w-6 h-6 border-r-2 border-t-2 border-cyan-400 transform rotate-45"></div>
                  </div>
                </div>

                {/* Energy pulse effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                
                {/* Scan line effect */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse"></div>
              </a>
            ))}
          </div>

          {/* Footer with effects */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-cyan-500/20">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
              <span className="text-cyan-400 font-mono text-xs">DEV</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
            
            {/* Floating particles in footer */}
            <div className="relative mt-4 h-8 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
                  style={{
                    left: `${i * 12.5}%`,
                    animation: `floatUp ${2 + Math.random()}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Side glow effect */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 opacity-50 animate-pulse"></div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Digital rain effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-cyan-400 to-transparent opacity-50"
            style={{
              left: `${20 + i * 20}%`,
              height: '100%',
              animation: `rain ${2 + Math.random() * 3}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Scanning line effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50">
        <div className="h-full w-20 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]" 
             style={{ animation: 'scan 3s ease-in-out infinite' }}></div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        
        @keyframes scan {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(calc(100vw + 100px)); }
        }
        
        @keyframes rain {
          0% { transform: translateY(-100px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100px); opacity: 0; }
        }
        
        .group:hover .animate-glow {
          animation: glow 1s ease-in-out infinite alternate;
        }
        
        @keyframes floatUp {
          0% { transform: translateY(20px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-20px); opacity: 0; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;