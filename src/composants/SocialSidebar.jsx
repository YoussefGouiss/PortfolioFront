// src/components/SocialSidebar.js
import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin, FaPlus } from 'react-icons/fa';

// --- Component-Specific CSS (No changes needed) ---
const componentStyles = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes textFadeIn {
    from { opacity: 0; transform: translateX(-15px); }
    to { opacity: 1; transform: translateX(0); }
  }
  .animate-component-fade-in-up {
    animation: fadeInUp 1s ease-out forwards;
  }
  .animate-component-text-fade-in {
    animation: textFadeIn 0.4s ease-out forwards;
  }
`;

// --- Data (No changes needed) ---
const socialLinks = [
    {
    id: 0,
    icon: <FaGithub />,
    label: 'YoussefGouiss',
    href: 'https://github.com/YoussefGouiss',
    colorHex: '#22d3ee', // cyan-400
    glowFilter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.8))',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    id: 1,
    icon: <FaInstagram />,
    label: 'code.with.gouiss',
    href: 'https://www.instagram.com/code.with.gouiss/',
    colorHex: '#f472b6', // pink-400
    glowFilter: 'drop-shadow(0 0 8px rgba(244, 114, 182, 0.8))',
    gradient: 'from-pink-400 to-purple-500',
  },
  {
    id: 2,
    icon: <FaFacebook />,
    label: 'Youssef Gouiss',
    href: 'https://facebook.com/youssef.gouiss',
    colorHex: '#60a5fa', // blue-400
    glowFilter: 'drop-shadow(0 0 8px rgba(96, 165, 250, 0.8))',
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    label: 'Youssef Gouiss',
    href: 'https://www.linkedin.com/in/youssef-gouiss-1023a2352/',
    colorHex: '#818cf8', // indigo-400
    glowFilter: 'drop-shadow(0 0 8px rgba(129, 140, 248, 0.8))',
    gradient: 'from-indigo-400 to-purple-500',
  },
];

const SocialSidebar = () => {
  // State for the desktop hover effect
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // State for the mobile click-to-open menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State for the mobile icon hover effect
  const [mobileHoveredIndex, setMobileHoveredIndex] = useState(null);

  return (
    <>
      <style>{componentStyles}</style>

      {/* --- MOBILE VIEW: Styled "Glassmorphism" Menu --- */}
      <div className="lg:hidden fixed bottom-5 right-5 z-30">
        <div className="relative flex flex-col items-center gap-4">
          
          {/* The list of social icons, shown when isMenuOpen is true */}
          {isMenuOpen && (
            <ul className="flex flex-col gap-4">
              {socialLinks.map((link, index) => (
                <li
                  key={link.id}
                  className="transition-all duration-300 ease-in-out"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(10px)',
                    opacity: isMenuOpen ? 1 : 0,
                  }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setMobileHoveredIndex(link.id)}
                    onMouseLeave={() => setMobileHoveredIndex(null)}
                    // NEW STYLES for the icon containers
                    className="block p-3 rounded-full bg-black/30 backdrop-blur-lg shadow-md transition-all duration-300"
                    style={{
                      // Replicates the desktop glow effect on mobile hover
                      color: mobileHoveredIndex === link.id ? link.colorHex : '#9ca3af', // gray-400
                      filter: mobileHoveredIndex === link.id ? link.glowFilter : 'none',
                    }}
                  >
                    {React.cloneElement(link.icon, { size: 24 })}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* NEW STYLES for the main trigger button (FAB) */}
<button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-14 h-14 rounded-full bg-black/30 backdrop-blur-lg border border-white/10 text-gray-400 flex items-center justify-center shadow-lg transform-gpu transition-all duration-300 hover:border-white/20 hover:text-white active:scale-95 z-40"
            aria-label="Open social media links"
          >
            <div 
              className="transition-transform duration-300 ease-in-out"
              style={{ transform: isMenuOpen ? 'rotate(135deg)' : 'rotate(0)' }}
            >
              <FaPlus size={24} />
            </div>
          </button>
        </div>
      </div>

      {/* --- DESKTOP VIEW: Original hover sidebar (Unchanged) --- */}
      <div className="hidden lg:flex fixed top-1/2 -translate-y-1/2 left-8 z-20 items-center">
        <div
          className="relative flex items-center gap-6 animate-component-fade-in-up"
          style={{ animationDelay: '1s' }}
        >
          <div className="absolute -top-10 -left-1 font-mono text-indigo-200/30">{'<h3>'}</div>
          <div className="absolute -bottom-10 -left-1 font-mono text-indigo-200/30">{'</h3>'}</div>
          <ul className="flex flex-col gap-5">
            {socialLinks.map((link) => (
              <li key={link.id} className="pointer-events-auto" onMouseEnter={() => setHoveredIndex(link.id)} onMouseLeave={() => setHoveredIndex(null)}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2"
                  style={{
                    color: hoveredIndex === link.id ? link.colorHex : '#9ca3af',
                    transform: hoveredIndex === link.id ? 'scale(1.2)' : 'scale(1)',
                    filter: hoveredIndex === link.id ? link.glowFilter : 'none',
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  {React.cloneElement(link.icon, { size: 28 })}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-56 w-px bg-gradient-to-b from-transparent via-purple-500/40 to-transparent"></div>
          <div className="w-48 h-56 flex items-center text-left">
            {hoveredIndex !== null && (
              <div className="animate-component-text-fade-in">
                <p className={`text-lg font-medium tracking-wider bg-clip-text text-transparent bg-gradient-to-r ${socialLinks[hoveredIndex].gradient}`}>
                  {socialLinks[hoveredIndex].label}
                </p>
                <p className="text-xs text-gray-500 mt-1">{new URL(socialLinks[hoveredIndex].href).hostname}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialSidebar;