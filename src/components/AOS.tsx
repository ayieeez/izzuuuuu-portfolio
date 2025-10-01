'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-sine',
      once: false,
      mirror: false,
      offset: 120,
    });
  }, []);

  return null;
}