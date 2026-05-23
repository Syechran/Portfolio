import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  const contactMethods = [
    {
      title: 'Instagram',
      subtitle: '@syechranaf',
      icon: (
        <svg viewBox="0 0 24 24" width="65" height="65" fill="#de6536">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      )
    },
    {
      title: 'Whatsapp',
      subtitle: '+6285157766039',
      icon: (
        <svg viewBox="0 0 24 24" width="65" height="65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.656 1.438 5.163L2 22l4.956-1.424A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="#de6536"/>
          <path d="M9.16 7.5c-.2-.47-.41-.48-.6-.49H8.1c-.18 0-.47.07-.71.33-.25.27-.94.92-.94 2.24s.96 2.6 1.1 2.78c.13.18 1.87 2.97 4.6 4.04.64.25 1.14.4 1.53.51.64.2 1.23.17 1.69.1.52-.08 1.59-.65 1.81-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.31-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.85 1.06-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.17-1.34-.8-.72-1.34-1.6-1.5-1.87-.15-.27-.02-.42.12-.55.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.6-1.46-.83-2z" fill="#fff"/>
        </svg>
      )
    },
    {
      title: 'Mail',
      subtitle: 'syechran@gmail.com',
      icon: (
        <svg viewBox="0 0 24 24" width="65" height="65" fill="#de6536">
          <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
        </svg>
      )
    },
    {
      title: 'Linkedin',
      subtitle: 'syechran',
      icon: (
        <svg viewBox="0 0 24 24" width="65" height="65" fill="#de6536">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      title: 'Github',
      subtitle: 'Syechran',
      icon: (
        <svg viewBox="0 0 24 24" width="65" height="65" fill="#de6536">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Kolom Kiri: Teks & Grafik */}
        <motion.div 
          className="contact-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-title-container">
            <h2 className="contact-title">Contact</h2>
            <div className="contact-title-row">
              <h2 className="contact-title">Me.</h2>
              <svg className="contact-target" viewBox="0 0 24 24" width="45" height="45">
                <circle cx="12" cy="12" r="9" stroke="#de6536" strokeWidth="2.5" fill="none"></circle>
                <circle cx="12" cy="12" r="4.5" fill="#de6536"></circle>
              </svg>
            </div>
          </div>

          {/* Grafik Geometris (Checkerboard 4x4) */}
          <div className="contact-graphic">
            {/* Box Besar (Top-Left & Bottom-Right) */}
            <div className="cg-box cg-box-tl"></div>
            <div className="cg-box cg-box-br"></div>
            
            {/* 8 Box Kecil sisanya (CSS Grid Auto-Flow akan otomatis mengisinya di tempat yang kosong!) */}
            {[...Array(8)].map((_, i) => (
              <div key={i} className="cg-box"></div>
            ))}
          </div>
        </motion.div>

        {/* Kolom Kanan: Daftar Kontak */}
        <motion.div 
          className="contact-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          {contactMethods.map((contact, index) => (
            <motion.div 
              className="contact-item" 
              key={contact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
            >
              <div className="contact-icon">
                {contact.icon}
              </div>
              <div className="contact-text">
                <h3 className="contact-item-title">{contact.title}</h3>
                <p className="contact-item-sub">{contact.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
