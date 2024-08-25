import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import splitType from 'split-type';

const TextAnimation = ({ children, duration = 1.5, stagger = 0.03, className }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const chars = new splitType(textRef.current.children, { types: 'chars' });

          gsap.fromTo(
            chars.chars,
            { 
              y: 100,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              stagger,
              duration,
              ease: 'power4.out',
            }
          );

          observer.unobserve(textRef.current);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(textRef.current);

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [duration, stagger]);

  return (
    <div className={`${className}`} ref={textRef}>
      {children}
    </div>
  );
};

export default TextAnimation;
