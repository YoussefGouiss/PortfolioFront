// src/pages/AllProjectsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';

// Import the shared components for a consistent look
// --- EXPANDED PROJECT DATA ---
// This is the single source of truth for all your projects.
// Add a 'technologies' array and a 'githubUrl' to each project.
const allProjectsData = [
  {
    number: '1',
    title: "L'organisme El Bader",
    description: "A dynamic and accessible website for a non-profit organization dedicated to supporting children, women, and people with disabilities.",
    imageUrl: '/image 1.png', // Remember: place images in the 'public' folder
    liveUrl: 'https://elbaderfullstack.ct.ws/',
    githubUrl: '#', // Add your GitHub repo link
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express'],
  },
  {
    number: '2',
    title: 'HR-Talentix',
    description: "A comprehensive HR management platform to streamline recruitment, featuring role-based access and an intuitive application tracking system.",
    imageUrl: '/image 2.png',
    liveUrl: '#',
    githubUrl: '#',
    technologies: ['Vue.js', 'Firebase', 'Vuetify', 'Jest'],
  }
];

// --- Reusable Project Card Component ---
const ProjectCard = ({ project }) => (
  <div className="
    group relative flex flex-col h-full
    bg-black/40 backdrop-blur-md rounded-lg
    ring-1 ring-purple-500/30
    transition-all duration-300
    hover:ring-cyan-400 hover:scale-[1.03]
    hover:shadow-2xl hover:shadow-cyan-500/20
  ">
    {/* Image container with hover effect */}
    <div className="relative overflow-hidden rounded-t-lg">
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    </div>

    {/* Content */}
    <div className="flex flex-col flex-grow p-6">
      <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-grow">{project.description}</p>
      
      {/* Technology Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.technologies.map(tech => (
          <span key={tech} className="text-xs font-mono bg-purple-500/20 text-cyan-300 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
    
    {/* Card Footer with Links */}
    <div className="border-t border-purple-500/20 p-4 flex justify-between items-center text-gray-400">
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
        <FiGithub /> Code
      </a>
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
        <FiExternalLink /> Live Demo
      </a>
    </div>
  </div>
);


const AllProjectsPage = () => {
  return (
    <>

        <main className="w-full max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          
          {/* --- Page Header --- */}
          <div className="text-center animate-fadeInUp mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-purple-300 hover:text-cyan-300 transition-colors mb-4">
              <FiArrowLeft /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              All Projects
            </h1>
            <p className="text-indigo-200/80 mt-2">A collection of my work. Click on any project to learn more.</p>
          </div>

          {/* --- Projects Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjectsData.map((project, index) => (
              <div 
                key={project.number} 
                className="animate-fadeInUp" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

        </main>
      
    </>
  );
};

export default AllProjectsPage;