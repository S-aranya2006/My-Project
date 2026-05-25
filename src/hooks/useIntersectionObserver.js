import { useEffect } from 'react';

/**
 * Custom React hook that implements viewport intersection observers.
 * Automatically scans the DOM for elements with '.reveal' classes and activates
 * the transition state class '.active' when in-view, mirroring original portfolio JS behavior.
 */
export const useIntersectionObserver = (dependency) => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated, we stop observing to keep animation state stable
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Give a minor delay for React to finalize DOM render rendering
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [dependency]);
};

export default useIntersectionObserver;
