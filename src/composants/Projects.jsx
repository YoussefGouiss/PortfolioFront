// src/components/Projects.js
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
// Import the Link component for SPA navigation
import { Link } from 'react-router-dom';

// --- PROJECT DATA ---
const projectsData = [
  {
    number: '1',
    title: "L'organisme El Bader",
    description: "We developed a dynamic and accessible website for El Bader, a non-profit organization dedicated to supporting children, women, and people with disabilities. The platform showcases the association's mission, activities, and ongoing programs, while allowing visitors to contact, donate, or volunteer easily.",
    imageUrl: '/image 1.png', // Note: For this to work, 'image 1.png' must be in your 'public' folder.
    liveUrl: 'https://elbaderfullstack.ct.ws/',
  },
  {
    number: '2',
    title: 'HR-Talentix',
    description: "A comprehensive HR management platform designed to streamline the recruitment process. It features role-based access for candidates and administrators, dynamic job postings, and an intuitive application tracking system, all built with modern, responsive design principles.",
    imageUrl: '/image 2.png', // Note: This image must also be in your 'public' folder.
    liveUrl: '#',
  },
];

const Projects = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4 animate-fadeInUp">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </h2>
      </div>

      <div className="flex flex-col gap-20">
        {projectsData.map((project, index) => (
          <div
            key={project.number}
            className={`
              flex flex-col gap-8 items-center 
              md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}
            `}
          >
            {/* ... (The rest of your project mapping code is unchanged) ... */}
            <div className="w-full md:w-1/2 p-4">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block relative group">
                <div className="absolute -top-3 -left-3 w-2/3 h-2/3 border-t-2 border-l-2 border-purple-400/60 rounded-tl-lg transition-all duration-300 group-hover:w-full group-hover:h-full"></div>
                <div className="absolute -bottom-3 -right-3 w-2/3 h-2/3 border-b-2 border-r-2 border-purple-400/60 rounded-br-lg transition-all duration-300 group-hover:w-full group-hover:h-full"></div>
                <div className="relative p-2 bg-black/30 rounded-lg">
                  <img src={project.imageUrl} alt={project.title} className="rounded-md w-full h-auto ring-1 ring-white/10" />
                  <div className="absolute inset-0 bg-black/50 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <p className="font-mono text-purple-300 mb-2">{'< Project '}{project.number}{' />'}</p>
              <h3 className="text-3xl font-bold text-gray-100 mb-4">{project.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-cyan-300 group">
                Let's visit it <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* --- "See All Projects" Button --- */}
      <div className="text-center mt-20">
        <Link
          to="/projects"
          className="
            inline-flex items-center gap-3 px-8 py-3 rounded-full
            font-semibold tracking-wider text-indigo-300
            border-2 border-purple-500/50
            transition-all duration-300 ease-in-out
            hover:bg-purple-500/20 hover:backdrop-blur-sm
            hover:border-purple-400 hover:text-cyan-300
            hover:shadow-lg hover:shadow-purple-500/30
            hover:scale-105
          "
        >
          See All Projects
          <FiArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Projects;    