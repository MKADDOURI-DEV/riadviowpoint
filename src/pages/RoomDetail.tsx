import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Bed, Bath, Users, Check, X } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import { useReveal } from '@/hooks/useReveal';
import { getRoomBySlug, rooms } from '@/data/rooms';
import RoomCard from '@/components/RoomCard';

export default function RoomDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);

  const room = slug ? getRoomBySlug(slug) : undefined;

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#faf8f5]">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-[#2c2620] mb-4">Room not found</h1>
          <Link to="/rooms" className="btn-outline">{t.rooms.backToRooms}</Link>
        </div>
      </div>
    );
  }

  const categoryLabels: Record<string, string> = {
    suite: t.rooms.roomCategorySuite,
    family: t.rooms.roomCategoryFamily,
    standard: t.rooms.roomCategoryStandard,
    economy: t.rooms.roomCategoryEconomy,
  };

  const relatedRooms = rooms.filter((r) => r.slug !== room.slug).slice(0, 3);

  return (
    <div ref={ref}>
      {/* Hero image */}
      <section className="relative h-[70vh] min-h-[450px] overflow-hidden">
        <img src={room.images[0]} alt={room.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c2620]/70 via-transparent to-[#2c2620]/20" />
        <div className="absolute bottom-0 left-0 right-0 container-max section-padding pb-12">
          <button
            onClick={() => navigate('/rooms')}
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.rooms.backToRooms}
          </button>
          <span className="inline-block px-3 py-1 bg-white/90 text-[#2c2620] text-xs font-medium tracking-wider uppercase mb-4">
            {categoryLabels[room.category]}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white">{room.name}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28 bg-[#faf8f5]">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 reveal">
              <p className="text-lg text-[#8a7e6e] leading-relaxed mb-10">{room.description[lang]}</p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mb-12 pb-12 border-b border-[#e8dfd3]">
                <div className="text-center">
                  <Users className="w-6 h-6 text-[#c17b5a] mx-auto mb-2" />
                  <p className="text-sm text-[#8a7e6e]">{room.capacity} {t.rooms.guests}</p>
                </div>
                <div className="text-center">
                  <Bed className="w-6 h-6 text-[#c17b5a] mx-auto mb-2" />
                  <p className="text-sm text-[#8a7e6e]">{categoryLabels[room.category]}</p>
                </div>
                <div className="text-center">
                  <Bath className="w-6 h-6 text-[#c17b5a] mx-auto mb-2" />
                  <p className="text-sm text-[#8a7e6e]">{room.bathrooms} {room.bathrooms > 1 ? t.rooms.bathrooms : t.rooms.bathroom}</p>
                </div>
              </div>

              {/* Features */}
              <h2 className="text-2xl font-serif text-[#2c2620] mb-6">{t.rooms.features}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {room.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#c17b5a]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#c17b5a]" />
                    </div>
                    <span className="text-sm text-[#2c2620]">{feature[lang]}</span>
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <h2 className="text-2xl font-serif text-[#2c2620] mb-6">{t.rooms.amenities}</h2>
              <div className="flex flex-wrap gap-3 mb-12">
                {room.amenities.map((amenity, i) => (
                  <span key={i} className="px-4 py-2 bg-white border border-[#e8dfd3] text-sm text-[#2c2620]">
                    {amenity}
                  </span>
                ))}
              </div>

              {/* Gallery */}
              <h2 className="text-2xl font-serif text-[#2c2620] mb-6">{t.rooms.gallery}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`image-zoom aspect-square overflow-hidden border-2 transition-all ${
                      activeImage === i ? 'border-[#c17b5a]' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt={`${room.name} ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar - Booking */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-white p-8 shadow-xl mb-6">
                  <h3 className="text-xl font-serif text-[#2c2620] mb-2">{room.name}</h3>
                  <p className="text-sm text-[#8a7e6e] mb-6">{room.shortDescription[lang]}</p>
                  <div className="space-y-3 mb-6 pb-6 border-b border-[#e8dfd3]">
                    <div className="flex items-center gap-3 text-sm text-[#2c2620]">
                      <Users className="w-4 h-4 text-[#c17b5a]" /> {room.capacity} {t.rooms.guests}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#2c2620]">
                      <Bath className="w-4 h-4 text-[#c17b5a]" /> {room.bathrooms} {room.bathrooms > 1 ? t.rooms.bathrooms : t.rooms.bathroom}
                    </div>
                  </div>
                  <Link to={`/booking?room=${room.slug}`} className="w-full btn-primary mb-3">
                    {t.rooms.bookNow}
                  </Link>
                  <Link to="/booking" className="w-full btn-outline">
                    {t.booking.checkAvailability}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related rooms */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-max section-padding">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2c2620] mb-12 text-center reveal">{t.rooms.relatedRooms}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedRooms.map((r, i) => (
              <RoomCard key={r.slug} room={r} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
