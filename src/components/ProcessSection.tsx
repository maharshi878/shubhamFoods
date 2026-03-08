import React from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import {
  Tractor,
  Sun,
  Wind,
  Factory,
  Hand,
  Droplets,
  Fan,
  Palette,
  ScanSearch,
  Package,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProcessSection: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    { title: t('process.step1.title'), desc: t('process.step1.desc'), icon: Tractor },
    { title: t('process.step2.title'), desc: t('process.step2.desc'), icon: Sun },
    { title: t('process.step3.title'), desc: t('process.step3.desc'), icon: Wind },
    { title: t('process.step4.title'), desc: t('process.step4.desc'), icon: Factory },
    { title: t('process.step5.title'), desc: t('process.step5.desc'), icon: Hand },
    { title: t('process.step6.title'), desc: t('process.step6.desc'), icon: Droplets },
    { title: t('process.step7.title'), desc: t('process.step7.desc'), icon: Fan },
    { title: t('process.step8.title'), desc: t('process.step8.desc'), icon: Palette },
    { title: t('process.step9.title'), desc: t('process.step9.desc'), icon: ScanSearch },
    { title: t('process.step10.title'), desc: t('process.step10.desc'), icon: Package },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url(/src/assets/image7.webp)' }}
      />
      <div
        className="absolute inset-x-0 top-0 h-16 z-10"
        style={{ background: 'linear-gradient(to bottom, hsl(20 10% 6%), transparent)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-16 z-10"
        style={{ background: 'linear-gradient(to top, hsl(20 10% 6%), transparent)' }}
      />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full" />
      </div>

      <div className="container px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="badge-research mb-6 inline-block">{t('process.company.badge')}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="section-title mb-6">{t('process.company.title')}</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="section-subtitle mx-auto">
                {t('process.company.subtitle')}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.title} delay={index * 0.06}>
                  <motion.div whileHover={{ scale: 1.02 }} className="glass-card p-7 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-mono text-primary/70">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

