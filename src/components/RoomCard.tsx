import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import type { Room } from '@/data/rooms';

export default function RoomCard({ room, index = 0 }: { room: Room; index?: number }) {
  const { lang, t } = useLang();

  const categoryLabels: Record<string, string> = {
    suite: t.rooms.roomCategorySuite,
    family: t.rooms.roomCategoryFamily,
    standard: t.rooms.roomCategoryStandard,
    economy: t.rooms.roomCategoryEconomy,
  };

  return (
    <article
      className="reveal group bg-white overflow-hidden flex flex-col"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <Link to={`/rooms/${room.slug}`} className="image-zoom relative aspect-[4/5] block overflow-hidden">
        <img
          src={room.images[0]}
          alt={room.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-[#2c2620] text-xs font-medium tracking-wider uppercase">
          {categoryLabels[room.category]}
        </span>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-serif text-[#2c2620] mb-2">{room.name}</h3>
        <p className="text-sm text-[#8a7e6e] leading-relaxed mb-4 flex-1">
          {room.shortDescription[lang]}
        </p>

        {/* Capacity */}
        <div className="flex items-center gap-4 text-xs text-[#8a7e6e] mb-5 pb-5 border-b border-[#e8dfd3]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#c17b5a]" />
            {room.capacity} {t.rooms.guests}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#c17b5a]" />
            {room.bathrooms} {room.bathrooms > 1 ? t.rooms.bathrooms : t.rooms.bathroom}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            to={`/rooms/${room.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 border border-[#c17b5a] text-[#c17b5a] text-xs font-medium tracking-wider uppercase transition-all duration-300 hover:bg-[#c17b5a] hover:text-white"
          >
            {t.rooms.discoverRoom}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to={`/booking?room=${room.slug}`}
            className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-[#2c2620] text-white text-xs font-medium tracking-wider uppercase transition-all duration-300 hover:bg-[#c17b5a]"
          >
            {t.rooms.bookNow}
          </Link>
        </div>
      </div>
    </article>
  );
}
