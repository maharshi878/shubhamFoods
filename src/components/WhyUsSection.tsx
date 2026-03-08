import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { Settings, Leaf, CheckCircle, Eye } from 'lucide-react';

const whyUsItems = [
  { key: 'whyUs.item1', icon: Settings },
  { key: 'whyUs.item2', icon: Leaf },
  { key: 'whyUs.item3', icon: CheckCircle },
  { key: 'whyUs.item4', icon: Eye },
];

const WhyUsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background decorat ions */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="badge-research mb-6 inline-block">
                {t('whyUs.badge')}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="section-title mb-6">
                {t('whyUs.title')}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="section-subtitle mx-auto">
                {t('whyUs.subtitle')}
              </p>
            </ScrollReveal>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollReveal key={item.key} delay={index * 0.1}>
                  {/* Glass card = visual only */}
                  <div className="glass-card p-8 h-full group hover:border-primary/40 transition-all duration-300 pointer-events-none">
                    
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 pointer-events-auto">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-semibold mb-3 pointer-events-auto">
                      {t(`${item.key}.title`)}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed pointer-events-auto">
                      {t(`${item.key}.desc`)}
                    </p>
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

export default WhyUsSection;
