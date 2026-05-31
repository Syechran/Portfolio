import { useRef, createContext, useEffect, useState } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import Snap from 'lenis/snap';
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

function LenisSnap() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // Inisialisasi Snap plugin untuk lenis (desktop only)
    const snap = new Snap(lenis, {
      type: 'mandatory',
      lerp: 0.05,
      duration: 1.5,
    });

    // Cari semua elemen section atau komponen utama untuk di-snap
    const sections = Array.from(document.querySelectorAll('section, .app-wrapper, .showcase-section'));

    // Daftarkan elemen ke snap
    if (sections.length > 0) {
      snap.addElements(sections, { align: 'start' });
    }

    return () => {
      snap.destroy();
    };
  }, [lenis]);

  return null;
}

function AppContent({ isDesktop, scrollRef }) {
  return (
    <ScrollRefContext.Provider value={scrollRef}>
      <div ref={scrollRef}>
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

function App() {
  const scrollRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.matchMedia('(min-width: 769px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 769px)');
    const handleChange = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Mobile: Tidak pakai Lenis, scroll normal
  if (!isDesktop) {
    return <AppContent isDesktop={false} scrollRef={scrollRef} />;
  }

  // Desktop: Pakai Lenis dengan snap scroll
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.07,
        smoothWheel: true,
      }}
    >
      <LenisSnap />
      <AppContent isDesktop={true} scrollRef={scrollRef} />
    </ReactLenis>
  );
}

export default App;
