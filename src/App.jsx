import { useRef, createContext } from 'react';
import HeroSection from './components/HeroSection';
import ProductShowcase from './components/ProductShowcase';
import WebDevShowcase from './components/WebDevShowcase';
import MobileDevShowcase from './components/MobileDevShowcase';
import UIUXShowcase from './components/UIUXShowcase';
import TechStacks from './components/TechStacks';
import Contact from './components/Contact';

/* ── Scroll Container Context ──────────────────────────────────────
   Dibagikan ke semua komponen agar Framer Motion bisa mendeteksi
   masuk/keluar viewport relative ke scroll container yang benar,
   bukan relative ke window. Ini memastikan animasi re-trigger dan
   scroll-snap berfungsi bersamaan.
   ──────────────────────────────────────────────────────────────── */
export const ScrollRefContext = createContext(null);

function App() {
  const scrollRef = useRef(null);

  return (
    <ScrollRefContext.Provider value={scrollRef}>
      <div className="scroll-container" ref={scrollRef}>
        <HeroSection />
        <ProductShowcase />
        <WebDevShowcase />
        <MobileDevShowcase />
        <UIUXShowcase />
        <TechStacks />
        <Contact />
      </div>
    </ScrollRefContext.Provider>
  );
}

export default App;
