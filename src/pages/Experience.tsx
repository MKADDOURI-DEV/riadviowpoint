import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import { useReveal } from '@/hooks/useReveal';
import { siteImages } from '@/data/images';
import PageHero from '@/components/PageHero';

export default function Experience() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();

  const sections = [
    { title: t.experience.atmosphereTitle, text: t.experience.atmosphereText, image: siteImages.courtyard },
    { title: t.experience.lifestyleTitle, text: t.experience.lifestyleText, image: siteImages.rooftop },
    { title: t.experience.relaxationTitle, text: t.experience.relaxationText, image: siteImages.interior },
    { title: t.experience.localTitle, text: t.experience.localText, image: siteImages.souks },
    { title: t.experience.hospitalityTitle, text: t.experience.hospitalityText, image: siteImages.food },
    { title: t.experience.architectureTitle, text: t.experience.architectureText, image: siteImages.tiles },
  ];

  return (
    <div ref={ref}>
      <PageHero image={siteImages.experience1} title={t.experience.title} subtitle={t.experience.subtitle} />

      {sections.map((section, i) => (
        <section key={i} className={`py-20 md:py-28 ${i % 2 === 0 ? 'bg-[#faf8f5]' : 'bg-white'}`}>
          <div className="container-max section-padding">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`reveal ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <p className="text-eyebrow mb-4">{`0${i + 1}`}</p>
                <h2 className="text-3xl md:text-4xl font-serif text-[#2c2620] mb-6">{section.title}</h2>
                <p className="text-[#8a7e6e] leading-relaxed text-lg">{section.text}</p>
              </div>
              <div className={`reveal image-zoom aspect-[4/3] overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img src={section.image} alt={section.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={siteImages.courtyard3} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#2c2620]/85" />
        </div>
        <div className="relative container-max section-padding text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 reveal">{t.home.bookingCtaTitle}</h2>
          <p className="text-white/70 mb-10 text-lg reveal">{t.home.bookingCtaText}</p>
          <Link to="/booking" className="btn-primary reveal">
            {t.home.bookingCtaButton}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
