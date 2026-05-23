import React from 'react';
import { motion } from 'framer-motion';
import './UIUXShowcase.css';

import imgUxvidia from '../assets/uxvidia.jpg';
import imgMetria from '../assets/metria.jpg';
import imgAdaptivo from '../assets/adaptivo.png';

export default function UIUXShowcase() {
  return (
    <section className="uiux-section" id="uiux">
      <div className="uiux-container">
        
        <motion.h2 
          className="uiux-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          UI/UX Design
        </motion.h2>

        <div className="uiux-grid">
          
          {/* Top Left: Uxvidia (Numi) */}
          <motion.div 
            className="uiux-image-card card-numi"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img src={imgUxvidia} alt="Numi Design" />
          </motion.div>

          {/* Top Right: Metria */}
          <motion.div 
            className="uiux-image-card card-metria"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={imgMetria} alt="Metria Design" />
          </motion.div>

          {/* Bottom Left: Adaptivo */}
          <motion.div 
            className="uiux-image-card card-adaptivo"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img src={imgAdaptivo} alt="Adaptivo Design" />
          </motion.div>

          {/* Bottom Right: Text Cards Grid */}
          <motion.div 
            className="uiux-text-grid"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Card 1: Numi */}
            <div className="uiux-text-card top-left-card">
              <p className="uiux-desc">
                <strong>Numi</strong>, math learning made addictive. A gamified experience that turns equations into daily adventures.
              </p>
              <p className="uiux-team">Team up with : @rapit.zn, @hilmeetamaam</p>
              <div className="card-dot"></div>
            </div>

            {/* Card 2: Metria */}
            <div className="uiux-text-card top-right-card">
              <p className="uiux-desc">
                <strong>Metria</strong>, where Fit meets fashion. A precision-driven app that captures your exact body measurements to curate the perfect digital wardrobe.
              </p>
              <p className="uiux-team">Team up with : @raihansnh @rapit.zn, @hilmeetamaam</p>
              <div className="card-dot"></div>
            </div>

            {/* Card 3: Adaptivo */}
            <div className="uiux-text-card bottom-left-card">
              <p className="uiux-desc">
                <strong>Adaptivo</strong>, productivity that listens to your body. A smart task manager that harmonizes your daily goals with your real-time physical well-being.
              </p>
              <p className="uiux-team">Team up with : @pratamawae489, @gib_tyx</p>
              <div className="card-dot"></div>
            </div>

            {/* Card 4: Partnership */}
            <div className="uiux-text-card bottom-right-card">
              <p className="uiux-desc">
                Created in partnership with a dedicated team for a past design competition. My role involved shaping the visual direction and ensuring a user-centric design approach.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
