import Reveal from '@/components/ui/Reveal';
import SectionHeader from './SectionHeader';
import { timeline } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-10 max-w-[1280px] mx-auto">
      <SectionHeader
        num="04"
        label="PATH"
        title={
          <>
            The <span className="text-gradient">journey</span>
            <br />
            so far.
          </>
        }
      />

      <div className="timeline relative pl-7 sm:pl-10">
        <span
          className="absolute left-1.5 sm:left-2 top-2 bottom-2 w-px"
          style={{ background: 'linear-gradient(to bottom, var(--cyan), var(--magenta))' }}
        />

        {timeline.map((item, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div className="tl-item relative pb-10 sm:pb-12">
              <span
                className="absolute -left-[26px] sm:-left-[34px] top-1.5 w-[13px] h-[13px] sm:w-[17px] sm:h-[17px] rounded-full border border-cyan"
                style={{ background: 'var(--bg)' }}
              />
              <span
                className="absolute -left-[23px] sm:-left-[30px] top-[10px] sm:top-2.5 w-[7px] h-[7px] sm:w-[9px] sm:h-[9px] rounded-full bg-cyan"
                style={{ boxShadow: '0 0 12px var(--cyan)' }}
              />
              <div className="text-[10px] sm:text-[11px] tracking-[0.25em] text-magenta uppercase mb-2">{item.when}</div>
              <h4 className="font-display text-[18px] sm:text-[22px] font-bold mb-1.5 leading-tight">
                {item.title}
              </h4>
              <div className="text-[12px] sm:text-[13px] text-cyan mb-3">{item.place}</div>
              <p className="text-[13px] sm:text-sm leading-relaxed text-muted max-w-[640px]">{item.what}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
