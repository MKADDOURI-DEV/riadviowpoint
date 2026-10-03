import { useLang } from '@/hooks/useLang';
import { useReveal } from '@/hooks/useReveal';
import { rooms } from '@/data/rooms';
import { siteImages } from '@/data/images';
import RoomCard from '@/components/RoomCard';
import PageHero from '@/components/PageHero';

export default function Rooms() {
  const { t } = useLang();
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <PageHero
        image={siteImages.courtyard2}
        title={t.rooms.title}
        subtitle={t.rooms.subtitle}
      />

      <section className="py-24 md:py-32 bg-[#faf8f5]">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, i) => (
              <RoomCard key={room.slug} room={room} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
