import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Landmark, Settings, CookingPot, FlaskConical } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BlackGarlicSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="black-garlic" className="py-24 relative overflow-hidden">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <ScrollReveal>
              <span className="badge-research mb-6 inline-block">{t('blackGarlic.badge')}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="section-title mb-6">{t('blackGarlic.title')}</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="section-subtitle mx-auto">
                {t('blackGarlic.subtitle')}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="glass-card p-8 h-full">
                <Landmark className="w-8 h-8 text-primary mb-5" />
                <h3 className="font-display text-2xl font-semibold mb-3">{t('blackGarlic.card1.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('blackGarlic.card1.desc')}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="glass-card p-8 h-full">
                <CookingPot className="w-8 h-8 text-primary mb-5" />
                <h3 className="font-display text-2xl font-semibold mb-3">{t('blackGarlic.card2.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('blackGarlic.card2.desc')}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass-card p-8 h-full">
                <Settings className="w-8 h-8 text-primary mb-5" />
                <h3 className="font-display text-2xl font-semibold mb-3">{t('blackGarlic.card3.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('blackGarlic.card3.desc')}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="glass-card p-8 h-full border-l-4 border-l-primary">
                <FlaskConical className="w-8 h-8 text-primary mb-5" />
                <h3 className="font-display text-2xl font-semibold mb-3">{t('blackGarlic.card4.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('blackGarlic.card4.desc')}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackGarlicSection;
