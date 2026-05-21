'use client';
import { useEffect, useState } from 'react';
import { profile } from '@/lib/data';

const links = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
 
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const orig = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = orig;
      };
    }
  }, [open]);

  const go = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    setOpen(false);
    if (!href) return;
    const target = document.querySelector(href);
    if (target) window.scrollTo({ top: (target as HTMLElement).offsetTop - 30, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] border-b border-line/60 bg-bg/70 px-4 sm:px-6 md:px-10 py-3 sm:py-4 backdrop-blur-xl"
        style={{ WebkitBackdropFilter: 'blur(18px) saturate(140%)', backdropFilter: 'blur(18px) saturate(140%)' }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 sm:gap-6">
          <a href="#hero" onClick={go} className="flex items-center gap-2.5 sm:gap-3" aria-label="Home">
            <span
              className="relative flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-lg border border-cyan/60 font-display text-[13px] sm:text-[15px] font-bold text-gradient"
              style={{ boxShadow: '0 0 18px rgba(0,255,255,0.25), inset 0 0 14px rgba(255,0,110,0.15)' }}
            >
              RU
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-[13px] md:text-[15px] font-bold uppercase tracking-[0.18em] text-ink">
                {profile.name}
              </span>
              <span className="font-sans text-[10px] md:text-[11px] tracking-[0.05em] text-muted">Full-Stack Developer</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-sans text-[11px] font-medium tracking-[0.22em] uppercase">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={go} className="group relative py-1 text-ink/85 hover:text-cyan transition-colors">
                {l.label}
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[3px] w-[3px] rounded-full bg-cyan opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: '0 0 8px #00FFFF' }} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden md:inline-flex items-center gap-2 rounded-full border border-line bg-black/40 px-3 lg:px-3.5 py-2 font-sans text-[10px] lg:text-[11px] font-medium text-ink/90 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22e07d] animate-pulse" style={{ boxShadow: '0 0 8px #22e07d' }} />
              <span className="whitespace-nowrap">Available for Work</span>
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hidden sm:flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-md border border-line bg-black/40 text-ink/80 transition-colors hover:border-cyan/60 hover:text-cyan"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 md:h-[18px] md:w-[18px]" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12.03c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.16 1.18a10.95 10.95 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55C20.21 21.41 23.5 17.1 23.5 12.03 23.5 5.65 18.35.5 12 .5Z"/></svg>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hidden sm:flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-md border border-line bg-black/40 text-ink/80 transition-colors hover:border-cyan/60 hover:text-cyan"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 md:h-[18px] md:w-[18px]" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8h4.56v14H.22V8Zm7.36 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.55v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.58V8Z"/></svg>
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="hidden sm:flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-md border border-line bg-black/40 text-ink/80 transition-colors hover:border-cyan/60 hover:text-cyan"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 md:h-[18px] md:w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            </a>

            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="flex h-9 w-9 lg:hidden items-center justify-center rounded-md border border-line bg-black/40 text-ink transition-colors hover:border-cyan/60 hover:text-cyan"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                {open ? (
                  <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M4 7h16" strokeLinecap="round" />
                    <path d="M4 12h16" strokeLinecap="round" />
                    <path d="M4 17h16" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[99] lg:hidden transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-bg/85 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[88%] max-w-[360px] border-l border-line bg-bg-2 px-6 pt-24 pb-10 shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="mb-6 flex items-center gap-2 rounded-full border border-line bg-black/40 px-3.5 py-2 font-sans text-[11px] font-medium text-ink/90 w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22e07d] animate-pulse" style={{ boxShadow: '0 0 8px #22e07d' }} />
            Available for Work
          </div>

          <div className="flex flex-col gap-1 font-sans text-[14px] font-medium tracking-[0.12em] uppercase">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={go}
                className="flex items-center justify-between border-b border-line/60 py-4 text-ink/90 transition-colors hover:text-cyan"
              >
                {l.label}
                <span className="text-cyan">↗</span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-black/40 text-ink/80 hover:border-cyan/60 hover:text-cyan"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12.03c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.16 1.18a10.95 10.95 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55C20.21 21.41 23.5 17.1 23.5 12.03 23.5 5.65 18.35.5 12 .5Z"/></svg>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-black/40 text-ink/80 hover:border-cyan/60 hover:text-cyan"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8h4.56v14H.22V8Zm7.36 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.55v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.58V8Z"/></svg>
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-black/40 text-ink/80 hover:border-cyan/60 hover:text-cyan"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            </a>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 block font-sans text-[12px] text-muted hover:text-cyan break-all"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </>
  );
}
