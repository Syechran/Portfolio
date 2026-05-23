import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useMotionValueEvent } from 'framer-motion';
import './WebDevShowcase.css';

import imgKahuto from '../assets/kahutostore.png';
import imgMatcha from '../assets/matcha.png';
import imgBinus from '../assets/binusflow.png';
import imgRentcar from '../assets/rentcar.png';
import imgBelanja from '../assets/belanjayuk.png';
import imgPadi from '../assets/padi.png';

const projects = [
  { id: 1, image: imgKahuto, title: 'Kahuto Store' },
  { id: 2, image: imgMatcha, title: 'Matcha' },
  { id: 3, image: imgBinus, title: 'Binus Flow' },
  { id: 4, image: imgRentcar, title: 'Rent Car' },
  { id: 5, image: imgBelanja, title: 'Belanja Yuk' },
  { id: 6, image: imgPadi, title: 'Padi' },
];

// Duplikasi array agar bisa looping tanpa putus
const duplicatedProjects = [...projects, ...projects, ...projects];

export default function WebDevShowcase() {
  const [isPressed, setIsPressed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);
  
  const trackRef = useRef(null);
  const x = useMotionValue(0);

  // Mengukur lebar total dari 1 set project (6 gambar)
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        // Karena kita duplikasi 3x, lebar 1 set adalah sepertiga dari total
        setContentWidth(trackRef.current.scrollWidth / 3);
      }
    };
    
    // Beri sedikit jeda agar gambar ter-render dulu
    setTimeout(measure, 100);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Frame loop untuk animasi berjalan terus-menerus (Marquee)
  useAnimationFrame((t, delta) => {
    if (isPressed || isDragging || !contentWidth) return;
    
    // Kecepatan geser (bisa diatur)
    const moveBy = 1.2 * (delta / 16); 
    let newX = x.get() - moveBy;
    
    // Jika sudah melewati batas 1 set, reset mulus ke 0
    if (newX <= -contentWidth) {
      newX += contentWidth;
    }
    
    x.set(newX);
  });

  // Memastikan infinite loop juga berfungsi saat di-drag secara manual
  useMotionValueEvent(x, "change", (latest) => {
    if (!contentWidth) return;
    if (latest <= -contentWidth) {
      x.set(latest + contentWidth);
    } else if (latest > 0) {
      x.set(latest - contentWidth);
    }
  });

  return (
    <section className="webdev-section" id="webdev">
      <div className="webdev-container">
        
        {/* Main Orange Box */}
        <div className="webdev-box">
          <div className="webdev-header">
            <h2>Web Development</h2>
            <p>
              Explore the logic behind the pixels. Click to view public repositories on GitHub. 
              Please note: client-confidential projects are restricted to visual previews.
            </p>
          </div>

          <div 
            className="carousel-viewport" 
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
            onTouchStart={() => setIsPressed(true)}
            onTouchEnd={() => setIsPressed(false)}
          >
            <motion.div 
              className="carousel-track marquee-mode"
              ref={trackRef}
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -contentWidth * 2, right: contentWidth }} // Batas longgar
              dragElastic={0}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
            >
              {duplicatedProjects.map((project, index) => (
                <div key={`${project.id}-${index}`} className="carousel-slide marquee-slide">
                  <div className="slide-image-container">
                    <img src={project.image} alt={project.title} draggable="false" />
                    
                    <button className="slide-action-btn" aria-label="View Project">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}