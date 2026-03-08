import React from 'react';
import ScrollReveal from './ScrollReveal';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, hsl(38 90% 50% / 0.04) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative border-t border-border/30 py-20">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="badge-research mb-6 inline-block">{t('contact.badge')}</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
                  {t('contact.title1')}{' '}
                  <span className="text-gradient">{t('contact.title2')}</span>
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  {t('contact.subtitle')}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="glass-card p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{t('contact.address.title')}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Besides Zadeshwar Gram Panchayat,<br />
                    Zadeshwar, Dist. Bharuch<br />
                    Gujarat, India
                  </p>
                </div>

                <div className="glass-card p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{t('contact.phone.title')}</h3>
                  <div className="space-y-1">
                    <a
                      href="tel:+919173891552"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 91738 91552
                    </a>
                    <a
                      href="tel:+919265461216"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 92654 61216
                    </a>
                  </div>
                </div>

                <div className="glass-card p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{t('contact.email.title')}</h3>
                  <div className="space-y-1">
                    <a
                      href="mailto:68jmdave@gmail.com"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      68jmdave@gmail.com
                    </a>
                    <a
                      href="mailto:vnutrifoods@gmail.com"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      vnutrifoods@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="border-t border-border/20 py-8">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Shubham Foods" className="h-8 w-auto object-contain" />
              <span className="font-display font-semibold">Shubham Foods</span>
            </div>
            <p className="text-sm text-muted-foreground">{t('footer.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
