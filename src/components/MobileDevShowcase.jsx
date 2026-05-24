import React from 'react';
import { motion } from 'framer-motion';
import './MobileDevShowcase.css';

import imgKeuangan from '../assets/keuangan mockup.png';
import imgStoreGG from '../assets/storegg mockup.png';

export default function MobileDevShowcase() {
  return (
    <section className="mobiledev-section" id="mobiledev">
      <div className="mobiledev-container">

        <motion.h2
          className="mobiledev-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          Mobile Development
        </motion.h2>

        <div className="mobiledev-grid">
          {/* Card 1 */}
          <motion.div
            className="mobile-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mobile-image-wrapper">
              <img src={imgKeuangan} alt="Aplikasi Keuangan" />
            </div>

            {/* UBAH DI SINI: ganti button menjadi a */}
            <a
              href="https://github.com/Syechran/personal-expense-tracker" // Ganti dengan link tujuan Anda
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-action-btn"
              aria-label="View Project"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="mobile-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="mobile-image-wrapper">
              <img src={imgStoreGG} alt="Store GG" />
            </div>

            {/* UBAH DI SINI: ganti button menjadi a */}
            <a
              href="https://github.com/Syechran/storeggmobile" // Ganti dengan link tujuan Anda
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-action-btn"
              aria-label="View Project"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.p
          className="mobiledev-desc"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Explore the logic behind the pixels. Click to view public repositories on GitHub.
          Please note: client-confidential projects are restricted to visual previews.
        </motion.p>

      </div>
    </section>
  );
}