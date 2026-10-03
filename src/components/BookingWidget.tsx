import { useState } from 'react';
import { useLang } from '@/hooks/useLang';
import { rooms } from '@/data/rooms';

export default function BookingWidget({ compact = false }: { compact?: boolean }) {
  const { t } = useLang();
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [room, setRoom] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const nights = checkIn && checkOut
    ? Math.max(0, Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000))
    : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c17b5a]/10 flex items-center justify-center">
          <span className="text-2xl text-[#c17b5a]">✓</span>
        </div>
        <h3 className="text-xl font-serif text-[#2c2620] mb-2">{t.booking.requestBooking}</h3>
        <p className="text-sm text-[#8a7e6e] mb-6">{t.booking.bookingNote}</p>
        <div className="bg-[#f5f0e8] p-4 rounded-sm text-left space-y-2 mb-6">
          <div className="flex justify-between text-sm"><span className="text-[#8a7e6e]">{t.booking.checkIn}</span><span className="text-[#2c2620] font-medium">{checkIn}</span></div>
          <div className="flex justify-between text-sm"><span className="text-[#8a7e6e]">{t.booking.checkOut}</span><span className="text-[#2c2620] font-medium">{checkOut}</span></div>
          <div className="flex justify-between text-sm"><span className="text-[#8a7e6e]">{t.booking.guests}</span><span className="text-[#2c2620] font-medium">{guests}</span></div>
          {nights > 0 && <div className="flex justify-between text-sm"><span className="text-[#8a7e6e]">{t.booking.nights}</span><span className="text-[#2c2620] font-medium">{nights}</span></div>}
          {room && <div className="flex justify-between text-sm"><span className="text-[#8a7e6e]">{t.booking.room}</span><span className="text-[#2c2620] font-medium">{rooms.find(r => r.slug === room)?.name}</span></div>}
        </div>
        <button onClick={() => setSubmitted(false)} className="btn-outline">
          {t.common.close}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white ${compact ? 'p-6' : 'p-8'} shadow-xl`}>
      {!compact && (
        <h3 className="text-2xl font-serif text-[#2c2620] mb-1">{t.booking.title}</h3>
      )}
      {!compact && <p className="text-sm text-[#8a7e6e] mb-6">{t.booking.subtitle}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-medium tracking-wider uppercase text-[#8a7e6e] mb-2">{t.booking.checkIn}</label>
          <input
            type="date"
            min={today}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full px-4 py-3 border border-[#e8dfd3] bg-[#faf8f5] text-[#2c2620] focus:outline-none focus:border-[#c17b5a] transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-medium tracking-wider uppercase text-[#8a7e6e] mb-2">{t.booking.checkOut}</label>
          <input
            type="date"
            min={checkIn || today}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full px-4 py-3 border border-[#e8dfd3] bg-[#faf8f5] text-[#2c2620] focus:outline-none focus:border-[#c17b5a] transition-colors"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-medium tracking-wider uppercase text-[#8a7e6e] mb-2">{t.booking.guests}</label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full px-4 py-3 border border-[#e8dfd3] bg-[#faf8f5] text-[#2c2620] focus:outline-none focus:border-[#c17b5a] transition-colors appearance-none cursor-pointer"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>{n} {n > 1 ? t.booking.guestsPl : t.booking.guest}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium tracking-wider uppercase text-[#8a7e6e] mb-2">{t.booking.room}</label>
          <select
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="w-full px-4 py-3 border border-[#e8dfd3] bg-[#faf8f5] text-[#2c2620] focus:outline-none focus:border-[#c17b5a] transition-colors appearance-none cursor-pointer"
          >
            <option value="">{t.booking.anyRoom}</option>
            {rooms.map((r) => (
              <option key={r.slug} value={r.slug}>{r.name}</option>
            ))}
          </select>
        </div>
      </div>

      {nights > 0 && (
        <div className="mb-4 text-sm text-[#8a7e6e]">
          {nights} {nights > 1 ? t.booking.nights : t.booking.night}
        </div>
      )}

      <button type="submit" className="w-full btn-primary">
        {t.booking.checkAvailability}
      </button>

      <p className="text-xs text-[#8a7e6e] mt-4 text-center leading-relaxed">
        {t.booking.bookingNote}
      </p>
    </form>
  );
}
