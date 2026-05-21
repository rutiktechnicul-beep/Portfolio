'use client';

import Reveal from '@/components/ui/Reveal';
import SectionHeader from './SectionHeader';
import { stackGroups } from '@/lib/data';

export default function Stack() {
  return (
    <section id="stack" className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-10 max-w-[1280px] mx-auto">
      <SectionHeader
        num="02"
        label="STACK"
        title={
          <>
            Tools I <span className="text-gradient">wield</span>
            <br />
            in production.
          </>
        }
      />

      {stackGroups.map((group, i) => (
        <Reveal key={group.label} delay={i * 0.08}>
          <div className="mb-7 sm:mb-9">
            <div className="text-[10px] sm:text-[11px] tracking-[0.3em] text-magenta uppercase mb-3 sm:mb-3.5">{group.label}</div>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="pill relative overflow-hidden font-mono text-[12px] sm:text-[13px] border border-line bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:text-black"
                  style={{ padding: '8px 14px' }}
                >
                  <span className="dot text-cyan mr-2 transition-colors">▸</span>
                  {item}
                  <span
                    className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: 'var(--grad)' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ))}

      <style jsx global>{`
        .pill {
          position: relative;
          z-index: 1;
        }
        .pill::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--grad);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: -1;
        }
        .pill:hover {
          color: #000 !important;
        }
        .pill:hover::before {
          opacity: 1;
        }
        .pill:hover .dot {
          color: #000 !important;
        }
      `}</style>
    </section>
  );
}
