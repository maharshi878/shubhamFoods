import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Factory, Hand, Layers, PackageCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CompanyAboutSection: React.FC = () => {
  const { t } = useLanguage();

  const points = [
    { title: t('about.company.point1.title'), description: t('about.company.point1.desc'), icon: Factory },
    { title: t('about.company.point2.title'), description: t('about.company.point2.desc'), icon: Hand },
    { title: t('about.company.point3.title'), description: t('about.company.point3.desc'), icon: Layers },
    { title: t('about.company.point4.title'), description: t('about.company.point4.desc'), icon: PackageCheck },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: 'url(/src/assets/image8.webp)' }}
      />
      <div
        className="absolute inset-x-0 top-0 h-16 z-10"
        style={{ background: 'linear-gradient(to bottom, hsl(20 10% 6%), transparent)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-16 z-10"
        style={{ background: 'linear-gradient(to top, hsl(20 10% 6%), transparent)' }}
      />
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="badge-research mb-6 inline-block">{t('about.company.badge')}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="section-title mb-6">{t('about.company.title')}</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="section-subtitle mx-auto">
                {t('about.company.subtitle')}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <ScrollReveal key={point.title} delay={index * 0.1}>
                  <div className="glass-card p-8 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold mb-3">{point.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyAboutSection;
