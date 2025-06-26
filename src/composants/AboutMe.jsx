// src/components/AboutMe.js
import React from 'react';
import { FiDownload } from 'react-icons/fi';

// Data for personal details to keep the component clean
const personalDetails = [
  { label: 'Name', value: 'Youssef Gouiss' },
  { label: 'Age', value: '22' },
  { label: 'Phone', value: '+2127 08 01 63 38' },
  { label: 'Email', value: 'Youssefgouiss298@gmail.com' },
];

const AboutMe = () => {
  return (
    // Section container with entrance animation and vertical padding
    <section id="about" className="relative w-full max-w-5xl mx-auto p-4 py-16 sm:py-20 animate-fadeInUp">
      {/* Decorative <div> tags */}
      <div className="absolute top-0 left-0 font-mono text-purple-300/20 text-lg">{'<div>'}</div>
      <div className="absolute bottom-0 right-0 font-mono text-purple-300/20 text-lg">{'</div>'}</div>

      {/* 
        Main layout container: 
        - Mobile: Stacks vertically (flex-col). Title is on top.
        - Desktop (md:): Two columns (flex-row). Title is on the left.
      */}
      <div className="flex flex-col md:flex-row md:items-stretch gap-8">
        
        {/* Left Column: Title. Now responsive. */}
        <div className="flex-shrink-0 flex items-center justify-center md:p-4">
          <h2 
            className="
              text-4xl font-bold tracking-wider text-center
              bg-gradient-to-b from-gray-200 to-gray-500 bg-clip-text text-transparent
              mb-8 md:mb-0
              md:text-5xl md:tracking-widest 
              md:[writing-mode:vertical-rl] md:transform md:rotate-180
            "
          >
            ABOUT ME
          </h2>
        </div>

        {/* Right Column: Framed Content Box */}
        <div className="relative flex-grow p-4">
          {/* 
            The L-shaped frame elements.
            - Mobile: Smaller size (w-2/3 h-2/3) for balance.
            - Desktop (md:): Original larger size (w-3/4 h-3/4).
          */}
          <div className="absolute top-0 left-0 w-2/3 h-2/3 md:w-3/4 md:h-3/4 border-t-2 border-l-2 border-purple-400/50 rounded-tl-lg"></div>
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 md:w-3/4 md:h-3/4 border-b-2 border-r-2 border-purple-400/50 rounded-br-lg"></div>

          {/* The actual content with a blurred, semi-transparent background */}
          <div className="relative h-full bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8">
            <p className="text-gray-300 leading-relaxed">
              Hi, I'm Youssef Gouiss, a 22-year-old web developer with a passion for building clean,
              responsive, and user-friendly websites. I enjoy turning ideas into reality through code, and
              I'm always eager to learn new technologies and improve my skills. Whether working on the
              front-end or back-end, I strive to create digital experiences that are both functional and
              visually engaging.
            </p>
            
            <hr className="my-6 border-purple-500/30" />

            {/* Grid for personal details - this layout is already quite robust */}
            <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 text-gray-300">
              {personalDetails.map(detail => (
                <React.Fragment key={detail.label}>
                  <span className="font-semibold text-indigo-300">{detail.label}</span>
                  <span className="text-left">: {detail.value}</span>
                </React.Fragment>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="mt-8 text-center md:text-left">
              <a
                href="/path-to-your/cv.pdf" // <-- IMPORTANT: Update this path
                download
                className="
                  inline-flex items-center gap-3 px-6 py-2.5 rounded-full
                  font-semibold tracking-wider text-indigo-300
                  border-2 border-purple-500/50
                  transition-all duration-300 ease-in-out
                  hover:bg-purple-500/20 hover:backdrop-blur-sm
                  hover:border-purple-400 hover:text-cyan-300
                  hover:shadow-lg hover:shadow-purple-500/30
                  hover:scale-105
                "
              >
                <FiDownload />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;