// src/components/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed
import { FiHome } from 'react-icons/fi';

const NotFoundPage = () => {
  return (
    // This container centers the content vertically and horizontally within the viewport
    <div className="min-h-screen w-full flex items-center justify-center text-center px-4">
      <div className="max-w-2xl animate-fadeInUp">
        
        {/* The "404" text with a gradient and a subtle glow */}
        <h1 
          className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
          style={{ textShadow: '0 0 15px rgba(192, 132, 252, 0.4)' }} // A purple text-shadow glow
        >
          404
        </h1>

        {/* The main heading */}
        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-200">
          Lost in the Cosmos?
        </h2>

        {/* A helpful message */}
        <p className="mt-2 text-lg text-indigo-200/80">
          The page you're looking for seems to have drifted into a black hole.
        </p>

        {/* The "Return Home" button, styled exactly like your other buttons */}
        <Link
          to="/"
          className="
            mt-10 inline-flex items-center gap-3 px-8 py-3 rounded-full
            font-semibold tracking-wider text-indigo-300
            border-2 border-purple-500/50
            transition-all duration-300 ease-in-out
            hover:bg-purple-500/20 hover:backdrop-blur-sm
            hover:border-purple-400 hover:text-cyan-300
            hover:shadow-lg hover:shadow-purple-500/30
            hover:scale-105
          "
        >
          <FiHome className="w-5 h-5" />
          Return to Home Base
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;