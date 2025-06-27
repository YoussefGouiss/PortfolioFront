// src/components/Footer.js
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';

// We keep the social links here for easy management
const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/YoussefGouiss' },
  { icon: <FaInstagram />, href: 'https://instagram.com/youssef_gouiss' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/youssef-gouiss' },
];

const Footer = () => {
  // Function to smoothly scroll to the top of the page
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full py-12 px-4 text-center">
      <div className="w-full max-w-lg mx-auto flex flex-col items-center">
        
        {/* --- Back to Top Button --- */}
        <button
          onClick={handleScrollToTop}
          className="
            mb-8 w-12 h-12 rounded-full flex items-center justify-center
            ring-2 ring-purple-500/30 text-purple-300
            transition-all duration-300 ease-in-out
            hover:ring-cyan-400 hover:text-cyan-300
            hover:bg-purple-500/10 hover:shadow-lg hover:shadow-cyan-500/20
            hover:scale-110
          "
          aria-label="Scroll to top"
        >
          <FiArrowUp size={24} />
        </button>

        {/* --- Thematic Horizon Line --- */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent mb-8"></div>
        
        {/* --- Logo --- */}
        <div className="mb-6">
            <img src='public\codewithgouiss-removebg-preview.png' className='h-10'/>
        </div>

        {/* --- Social Links --- */}
        <div className="flex items-center justify-center gap-6 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-gray-400 transition-all duration-300 ease-in-out
                hover:text-cyan-300 hover:scale-125
                hover:drop-shadow-glow-cyan
              "
              aria-label={link.icon.type.displayName}
            >
              {React.cloneElement(link.icon, { size: 24 })}
            </a>
          ))}
        </div>

        {/* --- Copyright Notice --- */}
        <p className="text-sm text-indigo-300/60 font-mono">
          © {new Date().getFullYear()} Youssef Gouiss. All Rights Reserved.
        </p>
        <p className="text-xs text-indigo-300/40 font-mono mt-1">
          Designed & Built from Scratch
        </p>
      </div>
    </footer>
  );
};

export default Footer;