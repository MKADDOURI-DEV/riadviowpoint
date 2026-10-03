import { useSearchParams, Link } from 'react-router-dom';
import { useLang } from '@/hooks/useLang';
import { useReveal } from '@/hooks/useReveal';
import { siteImages } from '@/data/images';
import BookingWidget from '@/components/BookingWidget';
import PageHero from '@/components/PageHero';

export default function Booking() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  const [searchParams] = useSearchParams();
  const roomSlug = searchParams.get('room');

  return (
    <div ref={ref}>
      <PageHero image={siteImages.courtyard4} title={t.booking.title} subtitle={t.booking.subtitle} />

      <section className="py-24 md:py-32 bg-[#faf8f5]">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Booking widget */}
            <div className="reveal">
              <BookingWidget />
            </div>

            {/* Info sidebar */}
            <div className="reveal space-y-8">
              <div className="image-zoom aspect-[4/3] overflow-hidden">
                <img src={siteImages.courtyard} alt="Riad Viewpoint" loading="lazy" className="w-full h-full object-cover" />
              </div>

              <div className="bg-white p-8">
                <h3 className="text-xl font-serif text-[#2c2620] mb-4">{t.booking.subtitle}</h3>
                <p className="text-sm text-[#8a7e6e] leading-relaxed mb-6">{t.booking.bookingNote}</p>
                <div className="space-y-3 pt-6 border-t border-[#e8dfd3]">
                  <Link to="/rooms" className="block text-sm text-[#c17b5a] hover:underline">
                    {t.nav.rooms} →
                  </Link>
                  <Link to="/services" className="block text-sm text-[#c17b5a] hover:underline">
                    {t.nav.services} →
                  </Link>
                  <Link to="/contact" className="block text-sm text-[#c17b5a] hover:underline">
                    {t.nav.contact} →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
