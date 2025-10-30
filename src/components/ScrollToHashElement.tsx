// src/components/ScrollToHashElement.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function scrollToElementWithRetry(selector: string, attempts = 30, interval = 100) {
  return new Promise<boolean>((resolve) => {
    let tries = 0;
    const iv = setInterval(() => {
      const el = document.querySelector(selector);
      tries += 1;
      if (el || tries >= attempts) {
        clearInterval(iv);
        if (el) {
          // Scroll and account for fixed header adjustment if needed later
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        resolve(!!el);
      }
    }, interval);
  });
}

export default function ScrollToHashElement() {
  const { hash, pathname, key } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // small delay then attempt with retries to handle async content
    const selector = hash;
    const t = setTimeout(() => {
      scrollToElementWithRetry(selector, 30, 100);
    }, 50);

    return () => clearTimeout(t);
  }, [hash, pathname, key]);

  return null;
}
