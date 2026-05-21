'use client';
import { profile } from '@/lib/data';

const techCards = [
  { name: 'Next.js', sub: 'React Framework', dot: '#22d3ee', icon: '/svg/nextdotjs.svg', iconColor: '#ffffff' },
  { name: 'Node.js', sub: 'JavaScript Runtime', dot: '#22c55e', icon: '/svg/nodedotjs.svg', iconColor: '#22c55e' },
  { name: 'Laravel', sub: 'PHP Framework', dot: '#ef4444', icon: '/svg/laravel.svg', iconColor: '#ef4444' },
  { name: 'MySQL', sub: 'Database', dot: '#3b82f6', icon: '/svg/mysql.svg', iconColor: '#3b82f6' },
  { name: 'AI Integrations', sub: 'OpenAI, Gemini', dot: '#a855f7', icon: '/svg/openaigym.svg', iconColor: '#a855f7' },
];

export default function Hero() {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) window.scrollTo({ top: (target as HTMLElement).offsetTop - 30, behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col overflow-hidden px-4 pt-20 pb-6 sm:px-6 sm:pt-24 sm:pb-8 md:px-10 lg:pt-24 lg:pb-10"
      style={{ backgroundColor: '#000000' }}
    >

      <div className="relative z-[2] mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center">
        {/* Two-column grid so detail block sits on the left */}
        <div className="grid w-full grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-10 xl:gap-12">
          <div className="flex flex-col items-start gap-5 sm:gap-6 lg:gap-7">
            <div className="flex items-center gap-3 font-sans text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.32em] text-cyan">
              <span className="h-px w-8 sm:w-10 bg-cyan/60" />
              HI, I&apos;M
            </div>

            <h1
              className="font-display font-bold leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(48px, 7vw, 104px)' }}
            >
              <span className="text-gradient-hero">RUTIK UGALE</span>
            </h1>

            <h2 className="max-w-[640px] font-display text-2xl sm:text-[26px] font-medium leading-[1.25] text-ink md:text-[30px]">
              Architecting AI-powered SaaS, full-stack web apps, and end-to-end product systems
            </h2>

            <p className="max-w-[580px] font-sans text-[14px] sm:text-[15px] leading-[1.7] text-muted">
              Junior Full-Stack Developer shipping production SaaS with Next.js, Node.js, Laravel, and MySQL. I own the full product lifecycle — frontend, backend, AI API integrations, and admin panels with role-based access control.
            </p>

            <div className="mt-1 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-between gap-5 rounded-md px-6 sm:px-7 py-3.5 sm:py-4 font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-black"
                style={{
                  background: 'linear-gradient(90deg, #22d3ee 0%, #ec4899 100%)',
                  boxShadow: '0 10px 30px -8px rgba(34,211,238,0.45), 0 8px 28px -10px rgba(236,72,153,0.4)',
                }}
              >
                View My Work
                <span className="text-base">↗</span>
              </a>
              <a
                href="/resume.pdf"
                download="Rutik-Ugale-Resume.pdf"
                className="inline-flex items-center justify-between gap-5 rounded-md border border-magenta px-6 sm:px-7 py-3.5 sm:py-4 font-sans text-[12px] font-semibold uppercase tracking-[0.22em] text-magenta"
                style={{ boxShadow: '0 0 22px rgba(255,0,110,0.15), inset 0 0 18px rgba(255,0,110,0.06)' }}
              >
                My Resume
                <span className="text-base">↓</span>
              </a>
            </div>

            <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-6 font-sans text-[12px] sm:text-[13px] text-muted">
              <span className="inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                </svg>
                {profile.location.split(',').slice(-2).join(',').trim() || 'Pune, India'}
              </span>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-cyan break-all">
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                {profile.email}
              </a>
            </div>
          </div>

          {/* Laptop image on the right (desktop only) */}
          <div className="hidden lg:flex items-center justify-center">
            <LaptopImage />
          </div>
        </div>

        <div className="mt-10 sm:mt-12 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {techCards.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-line bg-black/40 p-4 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="block h-7 w-7 shrink-0"
                  style={{
                    backgroundColor: t.iconColor,
                    WebkitMaskImage: `url(${t.icon})`,
                    maskImage: `url(${t.icon})`,
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                    filter: `drop-shadow(0 0 8px ${t.iconColor}55)`,
                  }}
                />
                <div className="min-w-0 flex-1">
                  <div className="font-display text-[14px] sm:text-[15px] font-semibold text-ink leading-tight">{t.name}</div>
                  <div className="mt-0.5 font-sans text-[11px] sm:text-[12px] text-muted leading-tight">{t.sub}</div>
                </div>
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ background: t.dot, boxShadow: `0 0 10px ${t.dot}` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      

      <style jsx global>{`
        .text-gradient-hero {
          background: linear-gradient(90deg, #22d3ee 0%, #a855f7 45%, #ec4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </section>
  );
}

function LaptopImage() {
  return (
    <div className="relative w-full max-w-[720px] scale-150 origin-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/image/laptop.png"
        alt="Laptop showcasing development work"
        className="w-full h-auto select-none"
        draggable={false}
      />
    </div>
  );
}

