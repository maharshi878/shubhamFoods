import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

// Note: Values are approximate ranges compiled from various studies
// Actual content varies significantly by fermentation conditions
const nutritionData = [
  { label: 'S-Allyl-Cysteine', value: '~1-6 mg*', percentage: 75 },
  { label: 'Polyphenols', value: 'Varies*', percentage: 65 },
  { label: 'Carbohydrates', value: '~30-45 g', percentage: 55 },
  { label: 'Protein', value: '~6-8 g', percentage: 45 },
  { label: 'Fiber', value: '~2-4 g', percentage: 35 },
  { label: 'Calcium', value: '~15-30 mg', percentage: 30 },
  { label: 'Iron', value: '~1-2 mg', percentage: 28 },
  { label: 'Vitamin C', value: 'Minimal*', percentage: 15 },
];

const NutritionBar: React.FC<{ label: string; value: string; percentage: number; delay: number }> = ({
  label,
  value,
  percentage,
  delay,
}) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-foreground">{label}</span>
          <span className="text-sm text-muted-foreground font-mono">{value}</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: delay + 0.3, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </div>
      </div>
    </ScrollReveal>
  );
};

const NutritionSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="nutrition" className="py-24 relative overflow-hidden">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="badge-research mb-6 inline-block">{t('nutrition.badge')}</span>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="section-title mb-6">{t('nutrition.title')}</h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="section-subtitle mx-auto">
                {t('nutrition.subtitle')}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glass-card p-8">
              {nutritionData.slice(0, 4).map((item, index) => (
                <NutritionBar
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  percentage={item.percentage}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <div className="glass-card p-8">
              {nutritionData.slice(4).map((item, index) => (
                <NutritionBar
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  percentage={item.percentage}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          <ScrollReveal delay={0.5}>
            <p className="text-center text-sm text-muted-foreground mt-8 italic">
              {t('nutrition.note')}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
