import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Hello from './Hello';
import SocialSidebar from './SocialSidebar';
import AboutMe from './AboutMe';
import ScrollIndicator from './Scrol'; // Using the exact name from your component
import Projects from './Projects';
import ContactForm from './ContactForm';
import Footer from './Footer';

// --- Reusable Animation Wrapper (Defined inside this file) ---
// This component handles the logic for detecting when an element is on screen.
const AnimateOnScroll = ({ children, animationClass = 'animate-home-fade-up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`transition-opacity duration-700 ${isVisible ? animationClass : 'opacity-0'}`}>
      {children}
    </div>
  );
};


export default function Home() {
  // We define all necessary CSS animations here in a <style> tag.
  // This avoids modifying any external files.
  const animationStyles = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeInLeft {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeInRight {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-home-fade-up {
      animation: fadeInUp 1s ease-out forwards;
    }
    .animate-home-fade-left {
      animation: fadeInLeft 1s ease-out forwards;
    }
    .animate-home-fade-right {
      animation: fadeInRight 1s ease-out forwards;
    }
  `;

  return (
    <div>
      {/* Inject the custom animation styles into the page */}
      <style>{animationStyles}</style>
      <SocialSidebar/>
      <Navbar/>

      {/* Hero section gets a direct animation class since it's visible on load */}
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4 animate-home-fade-up">
        <Hello/>
        <ScrollIndicator/>
      </div>

      {/* --- Each subsequent section is wrapped in our AnimateOnScroll component --- */}

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <AnimateOnScroll>
          <AboutMe/>
        </AnimateOnScroll>
      </div>
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        {/* We use a different animation for variety */}
        <AnimateOnScroll animationClass="animate-home-fade-left">
          <Projects/>
        </AnimateOnScroll>
      </div>
     
        <AnimateOnScroll animationClass="animate-home-fade-right">
          <ContactForm/>
        </AnimateOnScroll>

      <AnimateOnScroll>
        <Footer/>
      </AnimateOnScroll>
    </div>
  )
}