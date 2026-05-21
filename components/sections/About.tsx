import Reveal from '@/components/ui/Reveal';
import Counter from '@/components/ui/Counter';
import SectionHeader from './SectionHeader';
import { stats } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-10 max-w-[1280px] mx-auto">
      <SectionHeader
        num="01"
        label="ABOUT"
        title={
          <>
            Full-stack work with <span className="text-gradient">proof</span>,
            <br />
            not just aesthetics.
          </>
        }
      />

      <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-12 lg:gap-20 items-start">
        <Reveal>
          <div className="font-mono text-[14px] sm:text-base leading-relaxed">
            <p className="mb-6">
              <span className="text-cyan">// What I bring.</span>
            </p>
            <p className="mb-6">
              I&apos;m a junior full-stack developer based in{' '}
              <strong className="text-magenta font-medium">Mumbai, India</strong>, building product surfaces that
              connect UI, APIs, databases, admin workflows, AI features, and deployment realities.
            </p>
            <p className="mb-6">
              My strongest proof is <strong className="text-magenta font-medium">ResumeSprint</strong>: a solo-built
              3-application AI resume SaaS with a user app, REST API backend, and admin dashboard. It covers JD
              matching, resume improvement suggestions, subscriptions, and PDF export.
            </p>
            <p>
              I am most useful on teams that need someone who can take ownership beyond a single screen: understand the
              product goal, wire the data flow, handle edge cases, and keep shipping.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {stats.map((s, i) => (
              <div key={i} className="stat relative border border-line p-4 sm:p-5 md:p-6 bg-white/[0.01] transition-colors hover:border-cyan">
                <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-magenta" />
                <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-magenta" />
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient leading-none">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.2em] text-muted mt-2 uppercase">{s.key}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
