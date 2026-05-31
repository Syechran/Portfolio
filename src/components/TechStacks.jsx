import React from 'react';
import { motion } from 'framer-motion';
import './TechStacks.css';

// Import gambar (pastikan file-file ini ada di folder src/assets)
import imgFigma from '../assets/figma.png';
import imgReact from '../assets/react.png';
import imgNodejs from '../assets/nodejs.png';
import imgBlender from '../assets/blender.png';
import imgIllustrator from '../assets/illustrator.png';
import imgPhotoshop from '../assets/photoshop.png';

const techData = [
  { name: 'Figma', icon: imgFigma },
  { name: 'React', icon: imgReact },
  { name: 'NodeJS', icon: imgNodejs },
  { name: 'Blender', icon: imgBlender },
  { name: 'Illustrator', icon: imgIllustrator },
  { name: 'Photoshop', icon: imgPhotoshop },
];

export default function TechStacks() {
  return (
    <section className="techstack-section" id="techstack">
      <div className="techstack-container">
        
        <motion.h2 
          className="techstack-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          Tech Stacks
        </motion.h2>

        <div className="techstack-grid">
          {techData.map((tech, index) => (
            <motion.div 
              className="tech-item" 
              key={tech.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="tech-pill">
                <div className="tech-circle">
                  <img src={tech.icon} alt={`${tech.name} logo`} />
                </div>
              </div>
              <p className="tech-name">{tech.name}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
