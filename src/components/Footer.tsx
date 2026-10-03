import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Compass } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import { contactInfo } from '@/data/services';
import { rooms } from '@/data/rooms';

export default function Footer() {
  const { lang, t } = useLang();

  return (
    <footer className="bg-[#2c2620] text-white/70">
      {/* Top CTA strip */}
      <div className="border-b border-white/10">
        <div className="container-max section-padding py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif text-white mb-2">{t.home.bookingCtaTitle}</h3>
            <p className="text-sm text-white/60 max-w-md">{t.home.bookingCtaText}</p>
          </div>
          <Link to="/booking" className="btn-primary whitespace-nowrap">
            {t.home.bookingCtaButton}
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h4 className="text-xl font-serif text-white mb-1">Riad Viewpoint</h4>
            <p className="text-sm text-[#c17b5a] mb-4 italic">{t.footer.tagline}</p>
            <p className="text-sm leading-relaxed">{t.footer.description}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-sans font-semibold tracking-wider uppercase text-white mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm hover:text-[#c17b5a] transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/rooms" className="text-sm hover:text-[#c17b5a] transition-colors">{t.nav.rooms}</Link></li>
              <li><Link to="/experience" className="text-sm hover:text-[#c17b5a] transition-colors">{t.nav.experience}</Link></li>
              <li><Link to="/services" className="text-sm hover:text-[#c17b5a] transition-colors">{t.nav.services}</Link></li>
              <li><Link to="/marrakech" className="text-sm hover:text-[#c17b5a] transition-colors">{t.nav.marrakech}</Link></li>
              <li><Link to="/location" className="text-sm hover:text-[#c17b5a] transition-colors">{t.nav.location}</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-[#c17b5a] transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Rooms */}
          <div>
            <h4 className="text-sm font-sans font-semibold tracking-wider uppercase text-white mb-6">{t.footer.ourRooms}</h4>
            <ul className="space-y-3">
              {rooms.slice(0, 6).map((room) => (
                <li key={room.slug}>
                  <Link to={`/rooms/${room.slug}`} className="text-sm hover:text-[#c17b5a] transition-colors">
                    {room.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-sans font-semibold tracking-wider uppercase text-white mb-6">{t.footer.contactUs}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#c17b5a] flex-shrink-0" />
                <span className="text-sm">{contactInfo.address[lang]}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c17b5a] flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-sm hover:text-[#c17b5a] transition-colors">{contactInfo.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c17b5a] flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm hover:text-[#c17b5a] transition-colors">{contactInfo.email}</a>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-white/20 hover:bg-[#c17b5a] hover:border-[#c17b5a] transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-white/20 hover:bg-[#c17b5a] hover:border-[#c17b5a] transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={contactInfo.social.tripadvisor} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-white/20 hover:bg-[#c17b5a] hover:border-[#c17b5a] transition-all duration-300" aria-label="TripAdvisor">
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-max section-padding py-6 text-center">
          <p className="text-xs text-white/40 tracking-wide">
            © {new Date().getFullYear()} Riad Viewpoint — {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
