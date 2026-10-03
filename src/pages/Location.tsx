import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import { useReveal } from '@/hooks/useReveal';
import { contactInfo, propertyInfo } from '@/data/services';
import { siteImages } from '@/data/images';
import PageHero from '@/components/PageHero';

export default function Location() {
  const { lang, t } = useLang();
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <PageHero image={siteImages.marrakech2} title={t.location.title} subtitle={t.location.subtitle} />

      <section className="py-24 md:py-32 bg-[#faf8f5]">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Map */}
            <div className="reveal">
              <div className="relative aspect-[4/3] overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d332.4!2d-7.9891!3d31.6255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM3JzMxLjgiTiA3wrA1OScyMC43Ilc!5e0!3m2!1sen!2sma!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Riad Viewpoint Location"
                />
              </div>
              <a
                href={contactInfo.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline mt-6 w-full"
              >
                <Navigation className="w-4 h-4" />
                {t.location.getDirections}
              </a>
            </div>

            {/* Info */}
            <div className="reveal">
              <h2 className="text-3xl font-serif text-[#2c2620] mb-8">{t.location.title}</h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#c17b5a]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#c17b5a]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wider uppercase text-[#c17b5a] mb-1">{t.location.address}</p>
                    <p className="text-[#2c2620]">{contactInfo.address[lang]}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#c17b5a]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#c17b5a]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wider uppercase text-[#c17b5a] mb-1">{t.location.callUs}</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-[#2c2620] hover:text-[#c17b5a] transition-colors">{contactInfo.phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#c17b5a]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#c17b5a]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wider uppercase text-[#c17b5a] mb-1">{t.location.emailUs}</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-[#2c2620] hover:text-[#c17b5a] transition-colors">{contactInfo.email}</a>
                  </div>
                </div>
              </div>

              {/* Property quick info */}
              <div className="bg-white p-6">
                <h3 className="text-lg font-serif text-[#2c2620] mb-4">{t.services.propertyInfoTitle}</h3>
                <div className="space-y-3">
                  {propertyInfo.slice(0, 4).map((info, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-[#8a7e6e]">{info.label[lang]}</span>
                      <span className="text-[#2c2620] font-medium text-right">{info.value[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/booking" className="btn-primary mt-8 w-full">
                {t.nav.bookNow}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
