/* ── Preload semua gambar showcase ──────────────────────────────────
   Dipakai saat layar loading agar setiap gambar sudah diunduh DAN
   di-decode sebelum situs ditampilkan. Dengan begitu tidak ada
   "fetch + decode" mendadak saat user mulai scroll.
   ────────────────────────────────────────────────────────────────── */

import profilePic from './assets/Profile Picture.webp';

import imgFierce from './assets/fierce.webp';
import imgFarfalla from './assets/farfalla.webp';
import imgFloria from './assets/floria.webp';
import imgMortune from './assets/mortune.webp';
import imgCookies from './assets/cookies.webp';

import imgKahuto from './assets/kahutostore.webp';
import imgMatcha from './assets/matcha.webp';
import imgBinus from './assets/binusflow.webp';
import imgRentcar from './assets/rentcar.webp';
import imgBelanja from './assets/belanjayuk.webp';
import imgPadi from './assets/padi.webp';

import imgKeuangan from './assets/keuangan mockup.webp';
import imgStoreGG from './assets/storegg mockup.webp';

import imgUxvidia from './assets/uxvidia.webp';
import imgMetria from './assets/metria.webp';
import imgAdaptivo from './assets/adaptivo.webp';

import imgFigma from './assets/figma.png';
import imgReact from './assets/react.png';
import imgNodejs from './assets/nodejs.png';
import imgBlender from './assets/blender.png';
import imgIllustrator from './assets/illustrator.png';
import imgPhotoshop from './assets/photoshop.png';

export const preloadList = [
  profilePic,
  imgFierce,
  imgFarfalla,
  imgFloria,
  imgMortune,
  imgCookies,
  imgKahuto,
  imgMatcha,
  imgBinus,
  imgRentcar,
  imgBelanja,
  imgPadi,
  imgKeuangan,
  imgStoreGG,
  imgUxvidia,
  imgMetria,
  imgAdaptivo,
  imgFigma,
  imgReact,
  imgNodejs,
  imgBlender,
  imgIllustrator,
  imgPhotoshop,
];

function preloadOne(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.decoding = 'async';
    const finish = () => {
      const decoded = typeof img.decode === 'function' ? img.decode() : Promise.resolve();
      decoded.catch(() => {}).then(() => resolve(src));
    };
    img.onload = finish;
    img.onerror = () => resolve(src);
    img.src = src;
  });
}

export function preloadImages(urls = preloadList) {
  return Promise.all(urls.map(preloadOne));
}
