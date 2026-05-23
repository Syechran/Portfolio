import React from 'react';
import { motion } from 'framer-motion';
import './ProductShowcase.css';

import imgFierce from '../assets/fierce.jpg';
import imgFarfalla from '../assets/farfalla.png';
import imgFloria from '../assets/floria.png';
import imgMortune from '../assets/mortune.png';
import imgCookies from '../assets/cookies.png';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

export default function ProductShowcase() {
  return (
    <section className="product-showcase" id="work">
      <div className="showcase-container">
        <motion.div 
          className="showcase-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          
          {/* Column 1 */}
          <div className="grid-col">
            <motion.div variants={fadeUp} custom={0} className="showcase-card dark-card">
              <div className="dark-card-content">
                <h2><span>3D</span><br/>Product</h2>
                <div className="toggle-icon"></div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} custom={0.1} className="showcase-card image-card col1-img">
              <img src={imgFierce} alt="Fierce Product" />
            </motion.div>
          </div>

          {/* Column 2 */}
          <div className="grid-col">
            <motion.div variants={fadeUp} custom={0.2} className="showcase-card image-card col2-img1">
              <img src={imgFarfalla} alt="Farfalla Essential Oil" />
            </motion.div>
            <motion.div variants={fadeUp} custom={0.3} className="showcase-card image-card col2-img2">
              <img src={imgFloria} alt="Floria Cream" />
            </motion.div>
          </div>

          {/* Column 3 */}
          <div className="grid-col">
            <motion.div variants={fadeUp} custom={0.4} className="showcase-card image-card col3-img1">
              <img src={imgMortune} alt="Mortune Bottles" />
            </motion.div>
            <motion.div variants={fadeUp} custom={0.5} className="showcase-card image-card col3-img2">
              <img src={imgCookies} alt="Cookies Bag" />
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
