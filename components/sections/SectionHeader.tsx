import Reveal from '@/components/ui/Reveal';

interface Props {
  num: string;
  label: string;
  title: React.ReactNode;
}

export default function SectionHeader({ num, label, title }: Props) {
  return (
    <>
      <Reveal>
        <div className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.35em] uppercase text-muted mb-5 sm:mb-6 flex items-center gap-2 sm:gap-3">
          <span className="w-6 sm:w-8 h-px bg-cyan" />
          <span className="text-cyan">{num}</span>
          <span>&nbsp;/&nbsp;{label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className="font-display font-bold mb-10 sm:mb-12 md:mb-14"
          style={{ fontSize: 'clamp(28px, 5.5vw, 64px)', lineHeight: 0.98 }}
        >
          {title}
        </h2>
      </Reveal>
    </>
  );
}
