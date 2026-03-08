import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <span className="badge-research mb-6 inline-block">{t('about.badge')}</span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="section-title mb-12">{t('about.title')}</h2>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal delay={0.2}>
              <div className="glass-card p-8">
                <p className="text-lg leading-relaxed text-foreground/90">
                  {t('about.p1')}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="glass-card p-8 border-l-4 border-l-primary">
                <p className="text-lg leading-relaxed text-foreground/90">
                  {t('about.p2')}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="glass-card p-8">
                <p className="text-lg leading-relaxed text-foreground/90">
                  {t('about.p3')}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
