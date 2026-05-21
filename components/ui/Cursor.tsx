'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2,
      rx = mx,
      ry = my;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };
    window.addEventListener('mousemove', onMove);

    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      raf = requestAnimationFrame(loop);
    };
    loop();

    const hoverables = document.querySelectorAll('a, button, .pill, .p-visual, .stat, [data-cursor-hover]');
    const onEnter = () => {
      dot.classList.add('hover');
      ring.classList.add('hover');
    };
    const onLeave = () => {
      dot.classList.remove('hover');
      ring.classList.remove('hover');
    };
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="cursor-ring fixed pointer-events-none z-[9999] rounded-full border border-magenta"
        style={{
          width: 36,
          height: 36,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.25s cubic-bezier(.16,1,.3,1), background 0.2s',
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={dotRef}
        className="cursor-dot fixed pointer-events-none z-[9999] rounded-full bg-cyan"
        style={{
          width: 8,
          height: 8,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.12s ease-out, background 0.2s',
          mixBlendMode: 'difference',
          boxShadow: '0 0 16px var(--cyan)',
        }}
      />

      <style jsx global>{`
        .cursor-dot.hover {
          transform: translate(-50%, -50%) scale(2.5) !important;
          background: var(--magenta) !important;
          box-shadow: 0 0 24px var(--magenta) !important;
        }
        .cursor-ring.hover {
          transform: translate(-50%, -50%) scale(2.5) !important;
        }
      `}</style>
    </>
  );
}
