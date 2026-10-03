import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import { useReveal } from '@/hooks/useReveal';
import { siteImages } from '@/data/images';
import PageHero from '@/components/PageHero';

export default function Marrakech() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();

  const sections = [
    { title: t.marrakech.medinaTitle, text: t.marrakech.medinaText, image: siteImages.marrakech },
    { title: t.marrakech.souksTitle, text: t.marrakech.souksText, image: siteImages.souks },
    { title: t.marrakech.jemaaTitle, text: t.marrakech.jemaaText, image: siteImages.jemaa },
    { title: t.marrakech.culturalTitle, text: t.marrakech.culturalText, image: siteImages.bahiaPalace },
    { title: t.marrakech.restaurantsTitle, text: t.marrakech.restaurantsText, image: siteImages.food2 },
    { title: t.marrakech.dayTripsTitle, text: t.marrakech.dayTripsText, image: siteImages.atlas },
  ];

  return (
    <div ref={ref}>
      <PageHero image={siteImages.marrakech3} title={t.marrakech.title} subtitle={t.marrakech.subtitle} />

      {/* Intro */}
      <section className="py-24 md:py-32 bg-[#faf8f5]">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto text-center reveal">
            <p className="text-eyebrow mb-6">{t.common.learnMore}</p>
            <h2 className="text-3xl md:text-5xl font-serif text-[#2c2620] mb-8">{t.marrakech.introTitle}</h2>
            <p className="text-lg text-[#8a7e6e] leading-relaxed">{t.marrakech.introText}</p>
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, i) => (
        <section key={i} className={`py-20 md:py-28 ${i % 2 === 0 ? 'bg-white' : 'bg-[#faf8f5]'}`}>
          <div className="container-max section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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

      {/* Useful info */}
      <section className="py-20 md:py-28 bg-[#2c2620]">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto text-center reveal">
            <p className="text-eyebrow text-[#c17b5a] mb-4">{t.marrakech.usefulInfoTitle}</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">{t.marrakech.usefulInfoTitle}</h2>
            <p className="text-white/70 leading-relaxed text-lg">{t.marrakech.usefulInfoText}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#faf8f5]">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#2c2620] mb-6 reveal">{t.home.bookingCtaTitle}</h2>
          <p className="text-[#8a7e6e] mb-10 text-lg reveal">{t.home.bookingCtaText}</p>
          <Link to="/booking" className="btn-primary reveal">
            {t.home.bookingCtaButton}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
