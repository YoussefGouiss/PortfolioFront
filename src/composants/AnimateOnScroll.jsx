// src/components/AnimateOnScroll.js
import React, { useState, useEffect, useRef } from 'react';

const AnimateOnScroll = ({ children, animationClass = 'animate-fadeInUp', threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element is in view, set isVisible to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing the element once it's visible
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold, // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function to disconnect the observer
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    // Attach the ref and apply animation classes conditionally
    <div ref={ref} className={`transition-opacity duration-1000 ${isVisible ? animationClass : 'opacity-0'}`}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;