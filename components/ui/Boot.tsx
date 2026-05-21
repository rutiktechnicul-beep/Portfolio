'use client';
import { useEffect, useState } from 'react';

const lines = [
  { text: '> init rutik.os', cls: 'ok' },
  { text: '> loading modules ...........', cls: 'ok' },
  { text: '> mounting /portfolio ...', cls: 'magenta' },
  { text: '> compiling shaders ........', cls: 'ok' },
  { text: '> initializing webgl ........', cls: 'ok' },
  { text: '> resolving /dev/rutik ...', cls: 'accent' },
  { text: '> warning: creative output detected.', cls: 'warn' },
  { text: '', cls: '' },
  { text: '> launch sequence initiated', cls: 'blink' },
];

export default function Boot() {
  const [shown, setShown] = useState<number>(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setShown((s) => {
        if (s >= lines.length) {
          clearInterval(id);
          setTimeout(() => setDone(true), 600);
          return s;
        }
        return s + 1;
      });
    }, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#000',
        zIndex: 9000,
        display: 'flex',
        alignItems: 'center',
        padding: 32,
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 13,
        color: '#0f0',
        lineHeight: 1.7,
        opacity: done ? 0 : 1,
        pointerEvents: done ? 'none' : 'auto',
        transition: 'opacity 0.6s ease 0.2s',
      }}
    >
      <div style={{ maxWidth: 680 }}>
        {lines.slice(0, shown).map((l, i) => (
          <div key={i} style={{ animation: 'bootIn 0.25s ease forwards' }}>
            <span
              dangerouslySetInnerHTML={{
                __html: l.text
                  .replace(/^&gt; /, '> ')
                  .replace(/\.\.\.|done|ready|mounted|200 OK|OK|100%/g, (m) => `<span style="color:#0f0">${m}</span>`)
                  .replace(/warning:/g, '<span style="color:#ffb800">warning:</span>')
                  .replace(/init|resolving/g, '<span style="color:#00FFFF">$&</span>')
                  .replace(/\/portfolio|\/dev\/rutik/g, '<span style="color:#FF006E">$&</span>'),
              }}
            />
            {l.cls === 'blink' && (
              <span
                style={{
                  display: 'inline-block',
                  width: 8,
                  height: 14,
                  background: '#0f0',
                  marginLeft: 4,
                  verticalAlign: 'middle',
                  animation: 'blink 1s steps(1) infinite',
                }}
              />
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes bootIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
