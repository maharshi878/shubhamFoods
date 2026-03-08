import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

interface ComparisonItem {
  key: string;
  blackGarlic: string;
  freshGarlic: string;
  direction: 'higher' | 'lower' | 'similar';
}

// Note: Values represent general directional trends, not absolute figures
// Actual values vary significantly based on source and processing
const comparisonData: ComparisonItem[] = [
  { key: 'sac', blackGarlic: 'Higher', freshGarlic: 'Lower', direction: 'higher' },
  { key: 'polyphenols', blackGarlic: 'Generally Higher', freshGarlic: 'Baseline', direction: 'higher' },
  { key: 'antioxidant', blackGarlic: 'Elevated*', freshGarlic: 'Baseline', direction: 'higher' },
  { key: 'calories', blackGarlic: 'Similar', freshGarlic: '~149 kcal', direction: 'similar' },
  { key: 'sugar', blackGarlic: 'Higher', freshGarlic: '~1 g', direction: 'higher' },
  { key: 'allicin', blackGarlic: 'Minimal', freshGarlic: 'Present', direction: 'lower' },
];

const ComparisonSection: React.FC = () => {
  const { t } = useLanguage();

  const getDirectionIcon = (direction: 'higher' | 'lower' | 'similar') => {
    if (direction === 'higher') return <ArrowUp className="w-4 h-4 text-green-500" />;
    if (direction === 'lower') return <ArrowDown className="w-4 h-4 text-amber-500" />;
    return <Minus className="w-4 h-4 text-muted-foreground" />;
  };

  const getDirectionText = (direction: 'higher' | 'lower' | 'similar') => {
    if (direction === 'higher') return 'Increased';
    if (direction === 'lower') return t('comparison.lower');
    return 'Similar';
  };

  return (
    <section id="comparison" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="badge-research mb-6 inline-block">{t('comparison.badge')}</span>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="section-title mb-6">{t('comparison.title')}</h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="section-subtitle mx-auto">
                {t('comparison.subtitle')}
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="w-full overflow-x-auto rounded-2xl">
            <div className="glass-card overflow-hidden min-w-[560px]">
              {/* Header */}
              <div className="grid grid-cols-4 gap-2 md:gap-4 p-4 md:p-6 border-b border-border/50 bg-secondary/30">
                <div className="font-display font-semibold text-foreground">
                  {t('comparison.nutrient')}
                </div>
                <div className="text-center font-display font-semibold text-gradient">
                  {t('comparison.blackGarlic')}
                </div>
                <div className="text-center font-display font-semibold text-muted-foreground">
                  {t('comparison.freshGarlic')}
                </div>
                <div className="text-center font-display font-semibold text-foreground">
                  {t('comparison.change')}
                </div>
              </div>

              {/* Rows */}
              {comparisonData.map((item, index) => (
                <div 
                  key={item.key}
                  className={`grid grid-cols-4 gap-2 md:gap-4 p-4 md:p-6 items-center transition-colors hover:bg-secondary/20 ${
                    index !== comparisonData.length - 1 ? 'border-b border-border/30' : ''
                  }`}
                >
                  <div className="font-medium text-foreground">
                    {t(`comparison.${item.key}`)}
                  </div>
                  <div className="text-center">
                    <span className="text-lg md:text-xl font-display font-bold text-gradient">
                      {item.blackGarlic}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-lg md:text-xl font-display text-muted-foreground">
                      {item.freshGarlic}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    {getDirectionIcon(item.direction)}
                    <span className="text-sm font-medium">
                      {getDirectionText(item.direction)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p className="text-center text-sm text-muted-foreground mt-8 italic">
              {t('comparison.note')}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
