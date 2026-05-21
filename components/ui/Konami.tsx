'use client';
import { useEffect, useState } from 'react';

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export default function Konami() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let idx = 0;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === KONAMI[idx]) {
        idx++;
        if (idx === KONAMI.length) {
          idx = 0;
          trigger();
        }
      } else idx = 0;
    };

    const trigger = () => {
      setShow(true);
      let i = 0;
      document.body.style.transition = 'filter 0.3s';
      const fl = setInterval(() => {
        document.body.style.filter = i % 2 ? 'hue-rotate(120deg) saturate(2)' : 'none';
        i++;
        if (i > 6) {
          clearInterval(fl);
          document.body.style.filter = 'none';
        }
      }, 150);
      setTimeout(() => setShow(false), 5000);
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div
      className="fixed bottom-8 right-8 z-[8000] bg-black border border-magenta px-5 py-3.5 text-[11px] tracking-wider text-cyan"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.4s',
        boxShadow: '0 0 30px rgba(255,0,110,0.3)',
        pointerEvents: 'none',
      }}
    >
      <span className="text-magenta">$</span> achievement_unlocked.exe — you found the easter egg 🚀
    </div>
  );
}
