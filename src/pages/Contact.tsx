import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { useLang } from '@/hooks/useLang';
import { useReveal } from '@/hooks/useReveal';
import { contactInfo } from '@/data/services';
import { siteImages } from '@/data/images';
import PageHero from '@/components/PageHero';

export default function Contact() {
  const { lang, t } = useLang();
  const ref = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={ref}>
      <PageHero image={siteImages.interior3} title={t.nav.contact} subtitle={t.location.subtitle} />

      <section className="py-24 md:py-32 bg-[#faf8f5]">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div className="reveal">
              <h2 className="text-3xl font-serif text-[#2c2620] mb-6">{t.location.contactFormTitle}</h2>
              <p className="text-[#8a7e6e] leading-relaxed mb-10">{t.location.subtitle}</p>

              <div className="space-y-6">
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
            </div>

            {/* Form */}
            <div className="reveal">
              {submitted ? (
                <div className="bg-white p-10 text-center shadow-lg">
                  <CheckCircle className="w-16 h-16 text-[#c17b5a] mx-auto mb-6" />
                  <h3 className="text-2xl font-serif text-[#2c2620] mb-3">{t.location.formSuccess}</h3>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                    className="btn-outline mt-6"
                  >
                    {t.common.close}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 shadow-lg">
                  <h3 className="text-2xl font-serif text-[#2c2620] mb-6">{t.location.contactFormTitle}</h3>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-xs font-medium tracking-wider uppercase text-[#8a7e6e] mb-2">{t.location.formName}</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-[#e8dfd3] bg-[#faf8f5] text-[#2c2620] focus:outline-none focus:border-[#c17b5a] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-wider uppercase text-[#8a7e6e] mb-2">{t.location.formEmail}</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-[#e8dfd3] bg-[#faf8f5] text-[#2c2620] focus:outline-none focus:border-[#c17b5a] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-wider uppercase text-[#8a7e6e] mb-2">{t.location.formSubject}</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 border border-[#e8dfd3] bg-[#faf8f5] text-[#2c2620] focus:outline-none focus:border-[#c17b5a] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-wider uppercase text-[#8a7e6e] mb-2">{t.location.formMessage}</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-[#e8dfd3] bg-[#faf8f5] text-[#2c2620] focus:outline-none focus:border-[#c17b5a] transition-colors resize-none"
                      />
                    </div>
                    <button type="submit" className="w-full btn-primary">
                      {t.location.formSend}
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
