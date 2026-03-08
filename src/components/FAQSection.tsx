import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqKeys = [
  'storage',
  'usage',
  'taste',
  'safety',
  'purchasing',
  'shelfLife',
];

const FAQSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      
      {/* Background decorations — VISUAL ONLY */}
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-6 relative z-10 pointer-events-auto">
        <div className="max-w-4xl mx-auto pointer-events-auto">
          <div className="text-center mb-16 pointer-events-auto">
            <ScrollReveal>
              <span className="badge-research mb-6 inline-block pointer-events-auto">
                {t('faq.badge')}
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="section-title mb-6 pointer-events-auto">
                {t('faq.title')}
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="section-subtitle mx-auto pointer-events-auto">
                {t('faq.subtitle')}
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            {/* Glass container — VISUAL ONLY */}
            <div className="glass-card p-6 md:p-8 pointer-events-none">
              
              {/* Accordion — INTERACTIVE */}
              <Accordion
                type="single"
                collapsible
                className="w-full pointer-events-auto"
              >
                {faqKeys.map((key) => (
                  <AccordionItem
                    key={key}
                    value={key}
                    className="border-b border-border/30 last:border-0 pointer-events-auto"
                  >
                    <AccordionTrigger
                      className="text-left font-display text-lg py-6 transition-colors hover:text-primary cursor-pointer pointer-events-auto [&[data-state=open]>svg]:text-primary"
                    >
                      {t(`faq.${key}.question`)}
                    </AccordionTrigger>

                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pointer-events-auto">
                      {t(`faq.${key}.answer`)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
