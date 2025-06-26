// src/pages/AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiFigma, FiDatabase, FiServer } from 'react-icons/fi';
import { FaReact, FaLaravel, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiMongodb } from 'react-icons/si';

// Import shared layout components for consistency
import Navbar from './Navbar';
import SocialSidebar from './SocialSidebar';
import Footer from './Footer';

// --- Data for easy updates ---
const personalDetails = [
  { label: 'Name', value: 'Youssef Gouiss' },
  { label: 'Age', value: '22' },
  { label: 'Phone', value: '+2127 08 01 63 38' },
  { label: 'Email', value: 'Youssefgouiss298@gmail.com' },
];

const skillsData = [
  {
    category: 'Frontend',
    icon: <FaReact size={28} className="text-cyan-400" />,
    items: [
      { name: 'React', icon: <FaReact /> },
      { name: 'JavaScript', icon: <FaJsSquare /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    category: 'Backend',
    icon: <FiServer size={28} className="text-orange-400" />,
    items: [
      { name: 'PHP', icon: <FaPhp /> },
      { name: 'Laravel', icon: <FaLaravel /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <span className="font-bold text-gray-300">Express</span> },
    ],
  },
  {
    category: 'Databases',
    icon: <FiDatabase size={28} className="text-green-400" />,
    items: [
      { name: 'MySQL (SQL)', icon: <SiMysql /> },
      { name: 'MongoDB (NoSQL)', icon: <SiMongodb /> },
    ],
  },
  {
    category: 'Design & Methodology',
    icon: <FiFigma size={28} className="text-pink-400" />,
    items: [
      { name: 'Figma', icon: <FiFigma /> },
      { name: 'UML', icon: <span className="font-bold">UML</span> },
    ],
  },
];

// --- Reusable Skill Card Component ---
const SkillCard = ({ skill }) => (
  <div className="
    flex flex-col h-full
    bg-black/40 backdrop-blur-md rounded-lg
    ring-1 ring-purple-500/30
    p-6 transition-all duration-300
    hover:ring-cyan-400 hover:scale-[1.03]
    hover:shadow-2xl hover:shadow-cyan-500/20
  ">
    <div className="flex items-center gap-4 mb-4">
      {skill.icon}
      <h3 className="text-xl font-bold text-gray-100">{skill.category}</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {skill.items.map(item => (
        <span key={item.name} className="flex items-center gap-2 text-sm font-mono bg-purple-500/20 text-indigo-200 px-3 py-1.5 rounded-md">
          {item.icon}
          {item.name}
        </span>
      ))}
    </div>
  </div>
);

// --- Main AboutPage Component ---
const AboutPage = () => {
  return (
    <>
      <SocialSidebar />
      <Navbar />
        {/* UPDATED: Responsive vertical padding for better spacing on mobile */}
        <main className="w-full max-w-6xl mx-auto py-20 md:py-24 px-4 sm:px-6 lg:px-8">
          
          <div className="text-center animate-fadeInUp mb-16">
            <Link to="/" className="inline-flex items-center gap-2 text-purple-300 hover:text-cyan-300 transition-colors mb-4">
              <FiArrowLeft /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Who I Am
            </h1>
          </div>

          {/* --- UPDATED: RESPONSIVE "ABOUT ME" SECTION --- */}
          <div className="flex flex-col md:flex-row items-stretch gap-8 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
            
            {/* UPDATED: The title is now responsive. It's horizontal on mobile and vertical on desktop. */}
            <div className="flex-shrink-0 flex items-center justify-center md:p-4">
              <h2 className="
                text-4xl font-bold tracking-wider text-center
                bg-gradient-to-b from-gray-200 to-gray-500 bg-clip-text text-transparent
                mb-8 md:mb-0
                md:text-5xl md:tracking-widest 
                md:[writing-mode:vertical-rl] md:transform md:rotate-180
              ">
                ABOUT ME
              </h2>
            </div>
            
            <div className="relative flex-grow p-4">
              {/* UPDATED: The L-shaped frames are now responsive for better balance on mobile. */}
              <div className="absolute top-0 left-0 w-2/3 h-2/3 md:w-3/4 md:h-3/4 border-t-2 border-l-2 border-purple-400/50 rounded-tl-lg"></div>
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 md:w-3/4 md:h-3/4 border-b-2 border-r-2 border-purple-400/50 rounded-br-lg"></div>
              
              <div className="relative h-full bg-black/40 backdrop-blur-md rounded-lg p-6 md:p-8">
                <p className="text-gray-300 leading-relaxed">
                  Hi, I'm Youssef Gouiss, a 22-year-old web developer with a passion for building clean, responsive, and user-friendly websites. I enjoy turning ideas into reality through code, and I'm always eager to learn new technologies and improve my skills.
                </p>
                <hr className="my-6 border-purple-500/30" />
                <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 text-gray-300">
                  {personalDetails.map(detail => (
                    <React.Fragment key={detail.label}>
                      <span className="font-semibold text-indigo-300">{detail.label}</span>
                      <span className="text-left">: {detail.value}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* --- TOOLKIT SECTION (This was already responsive) --- */}
          <div className="mt-24 text-center animate-fadeInUp" style={{ animationDelay: '300ms' }}>
            <h2 className="text-3xl font-bold text-gray-100 mb-10">My Professional Toolkit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillsData.map((skill, index) => (
                <div key={skill.category} className="animate-fadeInUp" style={{ animationDelay: `${400 + index * 100}ms` }}>
                  <SkillCard skill={skill} />
                </div>
              ))}
            </div>
          </div>
        </main>
      <Footer />
    </>
  );
};

export default AboutPage;