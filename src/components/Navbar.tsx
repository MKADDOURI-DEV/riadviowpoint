import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import { languages } from '@/i18n/translations';
import type { Language } from '@/i18n/translations';

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setLangOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/rooms', label: t.nav.rooms },
    { to: '/experience', label: t.nav.experience },
    { to: '/services', label: t.nav.services },
    { to: '/marrakech', label: t.nav.marrakech },
    { to: '/location', label: t.nav.location },
    { to: '/contact', label: t.nav.contact },
  ];

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? 'bg-transparent py-5'
            : 'bg-[#faf8f5]/95 backdrop-blur-md py-3 shadow-sm'
        }`}
      >
        <nav className="container-max section-padding flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span
              className={`font-serif text-2xl tracking-wide transition-colors duration-300 ${
                transparent ? 'text-white' : 'text-[#2c2620]'
              }`}
            >
              Riad Viewpoint
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to));
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 relative ${
                    transparent
                      ? 'text-white/90 hover:text-white'
                      : 'text-[#2c2620]/80 hover:text-[#c17b5a]'
                  } ${active ? (transparent ? 'text-white' : 'text-[#c17b5a]') : ''}`}
                >
                  {link.label}
                  {active && (
                    <span className={`absolute -bottom-1 left-0 right-0 h-px ${transparent ? 'bg-white' : 'bg-[#c17b5a]'}`} />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language switcher */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 ${
                  transparent ? 'text-white/90 hover:text-white' : 'text-[#2c2620]/80 hover:text-[#c17b5a]'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{lang}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white shadow-xl rounded-sm overflow-hidden min-w-[140px] animate-fade-in">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code as Language); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                        lang === l.code ? 'bg-[#c17b5a] text-white' : 'text-[#2c2620] hover:bg-[#f5f0e8]'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Book Now button */}
            <Link
              to="/booking"
              className={`hidden lg:inline-flex items-center px-6 py-2.5 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                transparent
                  ? 'bg-white/15 border border-white/40 text-white hover:bg-white hover:text-[#2c2620] backdrop-blur-sm'
                  : 'bg-[#c17b5a] text-white hover:bg-[#a8654a]'
              }`}
            >
              {t.nav.bookNow}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden transition-colors ${transparent ? 'text-white' : 'text-[#2c2620]'}`}
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-[#2c2620]" />
        <div className="relative h-full flex flex-col justify-center items-center gap-6 px-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-2xl font-serif transition-all duration-300 ${
                menuOpen ? 'animate-fade-in-up' : ''
              } text-white/90 hover:text-[#c17b5a]`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="mt-4 inline-flex items-center px-8 py-4 bg-[#c17b5a] text-white text-sm font-medium tracking-wider uppercase"
          >
            {t.nav.bookNow}
          </Link>

          {/* Language switcher mobile */}
          <div className="flex gap-3 mt-8">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code as Language)}
                className={`px-4 py-2 text-sm font-medium tracking-wider uppercase transition-colors ${
                  lang === l.code ? 'bg-[#c17b5a] text-white' : 'text-white/60 border border-white/20'
                }`}
              >
                {l.flag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
