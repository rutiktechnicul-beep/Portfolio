'use client';

import Reveal from '@/components/ui/Reveal';
import SectionHeader from './SectionHeader';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-10 max-w-[1280px] mx-auto">
      <SectionHeader
        num="03"
        label="SELECTED WORK"
        title={
          <>
            Production work that
            <br />
            shows <span className="text-gradient">ownership</span>.
          </>
        }
      />

      {projects.map((p, i) => {
        const reversed = i % 2 === 1;
        return (
          <Reveal key={p.num} delay={0.05}>
            <div className={`grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-center mb-20 sm:mb-24 md:mb-28 lg:mb-32 ${reversed ? 'md:[&>*:first-child]:order-2' : ''}`}>
              {/* Visual */}
              <div className="p-visual relative aspect-[4/3] border border-line overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-cyan" style={{ background: 'linear-gradient(135deg, #0d0d14, #15151c)' }}>
                <div className="browser-bar flex items-center gap-1.5 px-2.5 sm:px-3.5 py-2 sm:py-2.5 bg-[#0a0a10] border-b border-line">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[rgba(255,0,110,0.5)]" />
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[rgba(255,184,0,0.5)]" />
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[rgba(0,255,128,0.5)]" />
                  <div className="flex-1 text-[9px] sm:text-[10px] text-muted px-2 sm:px-2.5 py-1 bg-black border border-line ml-2 sm:ml-3 font-mono truncate">
                    <span className="text-cyan mr-1.5">⌬</span>
                    {p.url ? p.url.replace('https://', '') : `${p.title.toLowerCase().replace(/\s/g, '')}.android`}
                  </div>
                </div>
                <div
                  className="absolute top-7 sm:top-8 left-0 right-0 bottom-0 flex flex-col justify-center items-center px-4 sm:px-8 text-center"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 30%, rgba(0,255,255,.08), transparent 60%), radial-gradient(circle at 70% 80%, rgba(255,0,110,.08), transparent 60%)',
                  }}
                >
                  <div className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-cyan uppercase mb-3 sm:mb-4">— {p.tagline} —</div>
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-gradient mb-3 sm:mb-4 leading-none">{p.title}</h3>
                  <div className="mb-2 grid w-full max-w-[460px] grid-cols-1 gap-1.5 sm:grid-cols-3">
                    {p.impact.map((item) => (
                      <span key={item} className="border border-cyan/25 bg-cyan/[0.03] px-2 py-1.5 text-[8px] uppercase tracking-[0.14em] text-cyan">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="hidden sm:flex flex-wrap gap-1.5 justify-center mt-4">
                    {p.features.map((f) => (
                      <span key={f} className="text-[9px] px-2.5 py-1 border border-line tracking-wider uppercase text-muted">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] text-magenta mb-3 sm:mb-4">// PROJECT {p.num}</div>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight">
                  {p.title}
                </h3>
                <div className="text-[11px] sm:text-xs tracking-[0.2em] text-cyan uppercase mb-5 sm:mb-6">{p.role}</div>
                <div className="mb-4 sm:mb-5 flex flex-wrap gap-2">
                  {p.impact.map((item) => (
                    <span key={item} className="border border-magenta/35 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-magenta">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-[14px] sm:text-[15px] leading-relaxed mb-5 sm:mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[9px] sm:text-[10px] px-2 sm:px-2.5 py-1 border border-line text-muted tracking-wider uppercase">
                      {s}
                    </span>
                  ))}
                </div>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener"
                    className="live-link inline-flex items-center gap-2.5 text-[11px] sm:text-xs tracking-[0.2em] uppercase px-5 sm:px-7 py-3 sm:py-3.5 border border-cyan text-cyan relative overflow-hidden transition-colors hover:text-black"
                  >
                    <span className="absolute inset-0 -z-10 bg-cyan transition-transform duration-300" style={{ transform: 'translateX(-101%)' }} />
                    Visit Live <span className="arr transition-transform">↗</span>
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        );
      })}

      <style jsx global>{`
        .live-link::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--cyan);
          transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: -1;
        }
        .live-link:hover::before {
          transform: translateX(0);
        }
        .live-link {
          z-index: 1;
        }
        .live-link:hover .arr {
          transform: translate(4px, -4px);
        }
      `}</style>
    </section>
  );
}
