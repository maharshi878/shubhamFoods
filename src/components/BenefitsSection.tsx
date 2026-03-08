import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { Sparkles, Heart, Stethoscope, Shield, Brain, Flame } from 'lucide-react';

const benefits = [
  { key: 'benefit1', icon: Sparkles },
  { key: 'benefit2', icon: Heart },
  { key: 'benefit3', icon: Stethoscope },
  { key: 'benefit4', icon: Shield },
  { key: 'benefit5', icon: Brain },
  { key: 'benefit6', icon: Flame },
];

const BenefitsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="badge-research mb-6 inline-block">{t('benefits.badge')}</span>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="section-title mb-6">{t('benefits.title')}</h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="section-subtitle mx-auto">
                {t('benefits.subtitle')}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <ScrollReveal key={benefit.key} delay={index * 0.1}>
                  <div className="glass-card p-8 h-full group hover:border-primary/40 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <h3 className="font-display text-xl font-semibold mb-3">
                      {t(`${benefit.key}.title`)}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`${benefit.key}.desc`)}
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

export default BenefitsSection;
