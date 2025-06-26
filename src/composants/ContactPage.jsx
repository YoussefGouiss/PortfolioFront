// src/pages/ContactPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiPhone } from 'react-icons/fi';

// Import shared layout components and the form itself
import Navbar from './Navbar';
import SocialSidebar from './SocialSidebar';
import Footer from './Footer';
import ContactForm from './ContactForm'; // We'll reuse this component

const ContactPage = () => {
  return (
    <>
      <SocialSidebar />
      <Navbar />
        <main className="w-full max-w-4xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          
          {/* --- Page Header --- */}
          <div className="text-center animate-fadeInUp mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-purple-300 hover:text-cyan-300 transition-colors mb-4">
              <FiArrowLeft /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Let's Build Something
            </h1>
            <p className="text-indigo-200/80 mt-2 max-w-2xl mx-auto">
              Have an idea or a project in mind? I'm here to help. Reach out directly or use the form below.
            </p>
          </div>

          {/* --- The Focused Funnel Container --- */}
          <div className="flex flex-col items-center gap-10 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
            
            {/* --- 1. Compact Contact Bar --- */}
            <div className="flex items-center gap-6">
              <a 
                href="mailto:Youssefgouiss298@gmail.com" 
                className="
                  group relative w-16 h-16 rounded-full flex items-center justify-center
                  ring-2 ring-purple-500/30 text-purple-300
                  transition-all duration-300 ease-in-out
                  hover:ring-cyan-400 hover:text-cyan-300
                  hover:bg-purple-500/10 hover:shadow-lg hover:shadow-cyan-500/20
                  hover:scale-110
                "
              >
                <FiMail size={28} />
                <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded">Email</span>
              </a>
              <a 
                href="tel:+212708016338" 
                className="
                  group relative w-16 h-16 rounded-full flex items-center justify-center
                  ring-2 ring-purple-500/30 text-purple-300
                  transition-all duration-300 ease-in-out
                  hover:ring-cyan-400 hover:text-cyan-300
                  hover:bg-purple-500/10 hover:shadow-lg hover:shadow-cyan-500/20
                  hover:scale-110
                "
              >
                <FiPhone size={28} />
                <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded">Call</span>
              </a>
            </div>

            {/* --- 2. The "OR" Separator --- */}
            <div className="flex items-center w-full max-w-lg">
              <div className="flex-grow h-px bg-gradient-to-r from-transparent via-purple-500/40 to-purple-500/40"></div>
              <span className="flex-shrink-0 px-4 font-mono text-indigo-300/70">OR</span>
              <div className="flex-grow h-px bg-gradient-to-l from-transparent via-purple-500/40 to-purple-500/40"></div>
            </div>
            
            {/* --- 3. The Main Contact Form --- */}
            {/* 
              To make this perfect, you could modify ContactForm to accept a prop like `showTitle={false}` 
              to hide its own "Get In Touch" title, preventing repetition.
            */}
            <div className="w-full max-w-2xl">
              <ContactForm />
            </div>
          </div>

        </main>
        <Footer />
    </>
  );
};

export default ContactPage;