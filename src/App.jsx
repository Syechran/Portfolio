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
import { preloadImages, preloadList } from './preloadImages';

/* ── App Ready / Loader ────────────────────────────────────────────
   Loader baru ditutup setelah FONT dan SEMUA gambar showcase selesai
   diunduh + di-decode. Jadi saat layar loading hilang, scroll langsung
   lancar tanpa "fetch + decode" gambar di tengah jalan.
   ──────────────────────────────────────────────────────────────── */
function hideAppLoader() {
  const el = document.getElementById('app-loader');
  document.documentElement.classList.remove('is-loading');
  if (!el) return;
  el.classList.add('app-loader--hidden');
  setTimeout(() => {
    if (el.parentNode) el.parentNode.removeChild(el);
  }, 600);
}

function useAppReady() {
  useEffect(() => {
    let cancelled = false;

    // Font ditunggu, tapi dibatasi 2 detik agar Google Fonts yang lambat
    // tidak menahan loader. Gambar tetap ditunggu sampai benar-benar siap.
    const fontsReady =
      typeof document !== 'undefined' && document.fonts
        ? Promise.race([
            document.fonts.ready,
            new Promise((resolve) => setTimeout(resolve, 2000)),
          ])
        : Promise.resolve();

    Promise.all([fontsReady, preloadImages(preloadList)]).then(() => {
      if (!cancelled) hideAppLoader();
    });

    return () => {
      cancelled = true;
    };
  }, []);
}

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

  // Tahan loader sampai font + semua gambar siap
  useAppReady();

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
