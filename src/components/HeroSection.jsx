import { useEffect, useRef, useContext } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import profilePic from '../assets/Profile Picture.jpg';
import './HeroSection.css';
import { ScrollRefContext } from '../App';

/* ─── Animation Variants ─────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 },
  },
};

const scribbleDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 0.8, ease: 'easeInOut', delay },
      opacity: { duration: 0.01, delay },
    },
  }),
};

const buttonVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: 1.2 },
  },
};

/* ─── Double Scribble Underline SVG ──────────────────────────── */
function ScribbleUnderline({ controls }) {
  return (
    <svg
      className="hero-scribble"
      viewBox="0 0 420 22"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Line 1 — top scribble */}
      <motion.path
        d="M2,6 C40,4 80,8 120,5 C160,2 200,7 240,5 C280,3 320,8 360,5 C385,3 405,6 418,5"
        stroke="#DE6536"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={scribbleDraw}
        custom={0.85}
        initial="hidden"
        animate={controls}
      />
      {/* Line 2 — bottom scribble */}
      <motion.path
        d="M2,14 C40,12 80,16 120,13 C160,10 200,15 240,13 C280,11 320,16 360,13 C385,11 405,14 418,13"
        stroke="#DE6536"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={scribbleDraw}
        custom={1.0}
        initial="hidden"
        animate={controls}
      />
    </svg>
  );
}

/* ─── Component ──────────────────────────────────────────────── */
export default function HeroSection() {
  const scrollRef = useContext(ScrollRefContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { root: scrollRef, once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      // Reset ke hidden saat section keluar viewport agar bisa re-animate
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <section className="hero-section" ref={ref} id="hero">
      {/* ── LEFT: Text Content ── */}
      <div className="hero-content">
        {/* Greeting */}
        <motion.p
          className="hero-greeting"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={controls}
        >
          Hai. I&apos;m Syechran,
        </motion.p>

        {/* Headline */}
        <div className="hero-headline">
          <motion.h1
            className="hero-title-line"
            variants={fadeUp}
            custom={0.15}
            initial="hidden"
            animate={controls}
          >
            A Creative
          </motion.h1>

          <div className="hero-developer-wrap">
            <motion.h1
              className="hero-title-developer"
              variants={fadeUp}
              custom={0.35}
              initial="hidden"
              animate={controls}
            >
              Developer
            </motion.h1>
            {/* Double hand-drawn scribble underline */}
            <ScribbleUnderline controls={controls} />
          </div>
        </div>

        {/* Description */}
        <motion.p
          className="hero-description"
          variants={fadeUp}
          custom={0.65}
          initial="hidden"
          animate={controls}
        >
          who bridges the gap between logic and aesthetics. Starting my journey
          in 3D &amp; visual design, I now craft immersive digital experiences
          —from high-fidelity UI/UX to functional web and mobile solutions.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="hero-cta"
          variants={buttonVariant}
          initial="hidden"
          animate={controls}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 8px 32px rgba(222, 101, 54, 0.45)',
          }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="hero-description-text">CONTACT ME</span>
          <span className="hero-cta-icon">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </motion.a>
      </div>

      {/* ── RIGHT: Profile Photo (flush to top, rounded bottom) ── */}
      <motion.div
        className="hero-photo-wrapper"
        variants={fadeLeft}
        initial="hidden"
        animate={controls}
      >
        <div className="hero-photo-frame">
          <img
            src={profilePic}
            alt="Syechran — Creative Developer"
            className="hero-photo"
            draggable={false}
          />
        </div>
      </motion.div>
    </section>
  );
}
