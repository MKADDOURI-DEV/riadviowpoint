import { useLang } from '@/hooks/useLang';

export default function PageHero({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  const { t } = useLang();

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c2620]/80 via-[#2c2620]/30 to-[#2c2620]/40" />
      </div>
      <div className="relative container-max section-padding pb-16 md:pb-20">
        <div className="animate-fade-in-up">
          <p className="text-eyebrow text-white/80 mb-3">{t.common.learnMore}</p>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-3">{title}</h1>
          <p className="text-lg text-white/70 max-w-xl">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
