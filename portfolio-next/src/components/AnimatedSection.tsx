'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  id?: string;
}

export default function AnimatedSection({ children, className = '', stagger = false, id }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            // Also trigger children animations
            const children = entry.target.querySelectorAll('.reveal');
            children.forEach((child) => child.classList.add('reveal--visible'));
            // Add animated class for timeline dots
            const timelineEntries = entry.target.querySelectorAll('.timeline-entry');
            timelineEntries.forEach((te) => te.classList.add('animated'));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={`reveal ${stagger ? 'reveal-stagger' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
