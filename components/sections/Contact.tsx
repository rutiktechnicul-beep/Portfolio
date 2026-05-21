import Reveal from '@/components/ui/Reveal';
import { profile } from '@/lib/data';

export default function Contact() {
  const links = [
    { href: `mailto:${profile.email}`, label: 'Email', marker: '@' },
    { href: profile.linkedin, label: 'LinkedIn', marker: 'in' },
    { href: profile.github, label: 'GitHub', marker: 'gh' },
    { href: `tel:${profile.phone}`, label: 'Call', marker: 'tel' },
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-24 md:py-32 lg:py-44 px-4 sm:px-6 text-center md:px-10">
      <div className="mx-auto max-w-[1280px]">
      <Reveal>
        <div className="font-mono text-[11px] tracking-[0.35em] uppercase text-muted mb-6 flex items-center gap-3 justify-center">
          <span className="w-8 h-px bg-cyan" />
          <span className="text-cyan">05</span>
          <span>&nbsp;/&nbsp;CONTACT</span>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div
          className="font-display font-bold mb-8 sm:mb-12"
          style={{ fontSize: 'clamp(32px, 7vw, 96px)', lineHeight: 0.95 }}
        >
          Let&apos;s build <span className="text-gradient glow-magenta">something</span>
          <br />
          worth shipping.
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mx-auto mb-8 sm:mb-9 max-w-[680px] font-mono text-[13px] sm:text-sm leading-relaxed text-muted">
          Open to full-stack roles, SaaS product work, and teams that need a developer who can own frontend, backend,
          dashboards, and integrations.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mx-auto grid max-w-[760px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener"
              className="group flex items-center justify-between border border-line bg-white/[0.02] px-5 py-4 text-left font-mono transition-all duration-300 hover:-translate-y-1 hover:border-cyan hover:bg-cyan/5"
            >
              <span>
                <span className="block text-[10px] uppercase tracking-[0.22em] text-muted">Contact</span>
                <span className="mt-1 block text-sm text-ink group-hover:text-cyan">{s.label}</span>
              </span>
              <span className="text-xs uppercase tracking-wider text-magenta">{s.marker}</span>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.4}>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 sm:mt-10 inline-block border-b border-magenta pb-1.5 font-mono text-[13px] sm:text-base tracking-wider transition-colors hover:text-cyan md:text-lg break-all"
        >
          {profile.email}
        </a>
      </Reveal>
      </div>
    </section>
  );
}
