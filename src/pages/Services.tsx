import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import { useReveal } from '@/hooks/useReveal';
import { services, propertyInfo } from '@/data/services';
import { siteImages } from '@/data/images';
import PageHero from '@/components/PageHero';

export default function Services() {
  const { lang, t } = useLang();
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <PageHero image={siteImages.interior2} title={t.services.title} subtitle={t.services.subtitle} />

      {/* Services grid */}
      <section className="py-24 md:py-32 bg-[#faf8f5]">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] || LucideIcons.Sparkles;
              return (
                <div key={i} className="reveal bg-white p-8 text-center" style={{ transitionDelay: `${i * 0.05}s` }}>
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#c17b5a]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#c17b5a]" />
                  </div>
                  <h3 className="text-lg font-serif text-[#2c2620] mb-2">{service.title[lang]}</h3>
                  <p className="text-sm text-[#8a7e6e] leading-relaxed">{service.description[lang]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Property info */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16 reveal">
            <p className="text-eyebrow mb-4">{t.services.propertyInfoTitle}</p>
            <h2 className="text-3xl md:text-5xl font-serif text-[#2c2620]">{t.services.propertyInfoTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8dfd3] max-w-4xl mx-auto">
            {propertyInfo.map((info, i) => (
              <div key={i} className="reveal bg-[#faf8f5] p-8" style={{ transitionDelay: `${i * 0.05}s` }}>
                <p className="text-xs font-medium tracking-wider uppercase text-[#c17b5a] mb-2">{info.label[lang]}</p>
                <p className="text-lg font-serif text-[#2c2620]">{info.value[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={siteImages.rooftop2} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#2c2620]/85" />
        </div>
        <div className="relative container-max section-padding text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 reveal">{t.home.bookingCtaTitle}</h2>
          <Link to="/booking" className="btn-primary reveal">
            {t.home.bookingCtaButton}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
