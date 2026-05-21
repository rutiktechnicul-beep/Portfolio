'use client';
import { useEffect, useRef, useState } from 'react';

export default function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io.disconnect();
          const step = Math.max(1, Math.ceil(to / 40));
          let cur = 0;
          const id = setInterval(() => {
            cur += step;
            if (cur >= to) {
              cur = to;
              clearInterval(id);
            }
            setVal(cur);
          }, 30);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
