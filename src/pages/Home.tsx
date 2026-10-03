import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star, ChevronDown } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import { useReveal } from '@/hooks/useReveal';
import { rooms } from '@/data/rooms';
import { services } from '@/data/services';
import { contactInfo } from '@/data/services';
import { siteImages } from '@/data/images';
import RoomCard from '@/components/RoomCard';
import BookingWidget from '@/components/BookingWidget';
import * as LucideIcons from 'lucide-react';

export default function Home() {
  const { lang, t } = useLang();
  const ref = useReveal<HTMLDivElement>();

  const featuredRooms = rooms.slice(0, 3);

  const whyStayItems = [
    { icon: MapPin, title: t.home.whyStay1Title, text: t.home.whyStay1Text },
    { icon: LucideIcons.Sparkles, title: t.home.whyStay2Title, text: t.home.whyStay2Text },
    { icon: LucideIcons.Mountain, title: t.home.whyStay3Title, text: t.home.whyStay3Text },
    { icon: LucideIcons.Heart, title: t.home.whyStay4Title, text: t.home.whyStay4Text },
  ];

  const testimonials = [
    {
      name: 'Sophie L.',
      country: 'France',
      text: {
        en: 'An unforgettable stay. The riad is beautifully decorated, the staff incredibly welcoming, and the location perfect for exploring the medina. The rooftop terrace views at sunset are magical.',
        fr: 'Un séjour inoubliable. Le riad est magnifiquement décoré, le personnel incroyablement accueillant, et l\'emplacement parfait pour explorer la médina. La vue depuis la terrasse au coucher du soleil est magique.',
        ar: 'إقامة لا تُنسى. الرياض مزين بشكل جميل والموظفون ودودون للغاية والموقع مثالي لاستكشاف المدينة القديمة. إطلالة التراس عند الغروب ساحرة.',
      },
      rating: 5,
    },
    {
      name: 'James W.',
      country: 'United Kingdom',
      text: {
        en: 'Authentic Moroccan experience in the heart of the medina. The tadelakt walls, traditional decor, and warm hospitality made our stay truly special. Highly recommended.',
        fr: 'Expérience marocaine authentique au cœur de la médina. Les murs en tadelakt, le décor traditionnel et l\'hospitalité chaleureuse ont rendu notre séjour vraiment spécial. Hautement recommandé.',
        ar: 'تجربة مغربية أصيلة في قلب المدينة القديمة. جدران التديلاكت والديكور التقليدي والضيافة الدافئة جعلت إقامتنا مميزة حقًا. موصى به بشدة.',
      },
      rating: 5,
    },
    {
      name: 'Maria G.',
      country: 'Spain',
      text: {
        en: 'A hidden gem in Marrakech. The rooms are comfortable and beautifully designed, breakfast on the terrace is delicious, and the staff goes above and beyond. We will return!',
        fr: 'Un joyau caché à Marrakech. Les chambres sont confortables et joliment décorées, le petit-déjeuner sur la terrasse est délicieux, et le personnel se dépasse. Nous reviendrons !',
        ar: 'جوهرة مخفية في مراكش. الغرف مريحة ومصممة بشكل جميل، الفطار على التراس لذيذ، والموظفون يتجاوزون التوقعات. سنعود!',
      },
      rating: 5,
    },
  ];

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={siteImages.heroRiad}
            alt="Riad Viewpoint courtyard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2c2620]/50 via-[#2c2620]/30 to-[#2c2620]/60" />
        </div>

        <div className="relative container-max section-padding text-center">
          <p className="text-eyebrow text-white/70 mb-6 animate-fade-in">{t.common.learnMore}</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 animate-fade-in-up leading-tight">
            Riad Viewpoint
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-in-delay-1 font-light">
            {t.hero.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link to="/booking" className="btn-primary">
              {t.hero.bookYourStay}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/rooms" className="btn-secondary">
              {t.hero.discoverRiad}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-fade-in-delay-3">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32 bg-[#faf8f5]">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto text-center reveal">
            <p className="text-eyebrow mb-6">{t.common.learnMore}</p>
            <h2 className="text-3xl md:text-5xl font-serif text-[#2c2620] mb-8 text-balance">{t.home.introTitle}</h2>
            <p className="text-lg text-[#8a7e6e] leading-relaxed mb-6">{t.home.introText}</p>
            <p className="text-lg text-[#8a7e6e] leading-relaxed">{t.home.introText2}</p>
            <div className="moroccan-divider">
              <span className="text-[#c17b5a] text-lg">✦</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ROOMS */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16 reveal">
            <p className="text-eyebrow mb-4">{t.home.featuredRooms}</p>
            <h2 className="text-3xl md:text-5xl font-serif text-[#2c2620] mb-4">{t.home.featuredRooms}</h2>
            <p className="text-[#8a7e6e] max-w-2xl mx-auto">{t.home.featuredRoomsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room, i) => (
              <RoomCard key={room.slug} room={room} index={i} />
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link to="/rooms" className="btn-outline">
              {t.home.viewAllRooms}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY STAY */}
      <section className="py-24 md:py-32 bg-[#f5f0e8]">
        <div className="container-max section-padding">
          <div className="text-center mb-16 reveal">
            <p className="text-eyebrow mb-4">{t.home.whyStayTitle}</p>
            <h2 className="text-3xl md:text-5xl font-serif text-[#2c2620] mb-4">{t.home.whyStayTitle}</h2>
            <p className="text-[#8a7e6e] max-w-2xl mx-auto">{t.home.whyStaySubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyStayItems.map((item, i) => (
              <div key={i} className="reveal text-center" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <item.icon className="w-7 h-7 text-[#c17b5a]" />
                </div>
                <h3 className="text-xl font-serif text-[#2c2620] mb-3">{item.title}</h3>
                <p className="text-sm text-[#8a7e6e] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={siteImages.experience1} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#2c2620]/80" />
        </div>
        <div className="relative container-max section-padding">
          <div className="max-w-2xl reveal">
            <p className="text-eyebrow text-[#c17b5a] mb-4">{t.home.experienceTitle}</p>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">{t.home.experienceTitle}</h2>
            <p className="text-white/70 mb-4 text-lg leading-relaxed">{t.home.experienceSubtitle}</p>
            <p className="text-white/60 mb-8 leading-relaxed">{t.home.experienceText}</p>
            <Link to="/experience" className="btn-secondary">
              {t.home.experienceCta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 md:py-32 bg-[#faf8f5]">
        <div className="container-max section-padding">
          <div className="text-center mb-16 reveal">
            <p className="text-eyebrow mb-4">{t.home.servicesTitle}</p>
            <h2 className="text-3xl md:text-5xl font-serif text-[#2c2620] mb-4">{t.home.servicesTitle}</h2>
            <p className="text-[#8a7e6e] max-w-2xl mx-auto">{t.home.servicesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, i) => {
              const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] || LucideIcons.Sparkles;
              return (
                <div key={i} className="reveal bg-white p-8 text-center" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#c17b5a]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#c17b5a]" />
                  </div>
                  <h3 className="text-lg font-serif text-[#2c2620] mb-2">{service.title[lang]}</h3>
                  <p className="text-sm text-[#8a7e6e] leading-relaxed">{service.description[lang]}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 reveal">
            <Link to="/services" className="btn-outline">
              {t.home.viewAllServices}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MARRAKECH SECTION */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal order-2 lg:order-1">
              <p className="text-eyebrow mb-4">{t.home.marrakechTitle}</p>
              <h2 className="text-3xl md:text-5xl font-serif text-[#2c2620] mb-6">{t.home.marrakechTitle}</h2>
              <p className="text-lg text-[#c17b5a] mb-4 font-serif italic">{t.home.marrakechSubtitle}</p>
              <p className="text-[#8a7e6e] leading-relaxed mb-8">{t.home.marrakechText}</p>
              <Link to="/marrakech" className="btn-outline">
                {t.home.marrakechCta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="reveal order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="image-zoom aspect-[3/4] overflow-hidden">
                <img src={siteImages.marrakech} alt="Marrakech" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-rows-2 gap-4">
                <div className="image-zoom overflow-hidden">
                  <img src={siteImages.jemaa} alt="Jemaa el-Fna" loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="image-zoom overflow-hidden">
                  <img src={siteImages.souks} alt="Souks" loading="lazy" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-[#f5f0e8]">
        <div className="container-max section-padding">
          <div className="text-center mb-16 reveal">
            <p className="text-eyebrow mb-4">{t.home.testimonialsTitle}</p>
            <h2 className="text-3xl md:text-5xl font-serif text-[#2c2620] mb-4">{t.home.testimonialsTitle}</h2>
            <p className="text-[#8a7e6e] max-w-2xl mx-auto">{t.home.testimonialsSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="reveal bg-white p-8" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#c17b5a] text-[#c17b5a]" />
                  ))}
                </div>
                <p className="text-[#2c2620] leading-relaxed mb-6 italic">"{testimonial.text[lang]}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#e8dfd3]">
                  <div className="w-10 h-10 rounded-full bg-[#c17b5a]/10 flex items-center justify-center">
                    <span className="text-sm font-serif text-[#c17b5a]">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#2c2620]">{testimonial.name}</p>
                    <p className="text-xs text-[#8a7e6e]">{testimonial.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION PREVIEW */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal image-zoom aspect-[4/3] overflow-hidden order-2 lg:order-1">
              <img src={siteImages.marrakech2} alt="Marrakech medina" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="reveal order-1 lg:order-2">
              <p className="text-eyebrow mb-4">{t.home.locationTitle}</p>
              <h2 className="text-3xl md:text-5xl font-serif text-[#2c2620] mb-6">{t.home.locationTitle}</h2>
              <p className="text-[#8a7e6e] leading-relaxed mb-6">{t.home.locationSubtitle}</p>
              <div className="flex items-start gap-3 mb-8 text-[#8a7e6e]">
                <MapPin className="w-5 h-5 text-[#c17b5a] flex-shrink-0 mt-0.5" />
                <span className="text-sm">{contactInfo.address[lang]}</span>
              </div>
              <Link to="/location" className="btn-outline">
                {t.home.getDirections}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={siteImages.courtyard} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#2c2620]/85" />
        </div>
        <div className="relative container-max section-padding">
          <div className="max-w-2xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 text-balance">{t.home.bookingCtaTitle}</h2>
            <p className="text-white/70 mb-10 text-lg leading-relaxed">{t.home.bookingCtaText}</p>
            <Link to="/booking" className="btn-primary">
              {t.home.bookingCtaButton}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
