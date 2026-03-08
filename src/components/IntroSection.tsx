import React from 'react';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const IntroSection: React.FC = () => {
  const { t } = useLanguage();

  const productLines = [
    { label: t('intro.line1.label'), sub: t('intro.line1.sub'), route: '/products/black-garlic' },
    { label: t('intro.line2.label'), sub: t('intro.line2.sub'), route: '/products/peeled-garlic' },
    { label: t('intro.line3.label'), sub: t('intro.line3.sub'), route: '/products/freeze-dried' },
    { label: t('intro.line4.label'), sub: t('intro.line4.sub'), route: '/products/vacuum-fried' },
    { label: t('intro.line5.label'), sub: t('intro.line5.sub'), route: '/products/roasted-masala' },
  ];

  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background ambient elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(38 90% 50% / 0.04) 0%, transparent 70%)' }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[400px]"
          style={{ background: 'radial-gradient(circle, hsl(127 46% 33% / 0.05) 0%, transparent 70%)' }}
        />
        {/* Large ambient number */}
        <div className="absolute -bottom-8 -left-4 font-display font-bold select-none pointer-events-none"
          style={{ fontSize: 'clamp(120px, 20vw, 280px)', color: 'hsl(38 90% 50% / 0.04)', lineHeight: 1 }}
        >
          {t('intro.stat2.value')}
        </div>
      </div>

      <div className="container px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Top divider */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-20">
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
              <span className="text-xs text-primary uppercase tracking-[0.3em] font-medium whitespace-nowrap">
                {t('intro.badge')}
              </span>
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </div>
          </ScrollReveal>

          {/* Main two-column layout */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left — brand statement */}
            <div>
              <ScrollReveal>
                <span className="badge-research mb-8 inline-block">
                  {t('intro.badge')}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="font-display text-5xl md:text-6xl font-bold leading-[1.1] mb-8">
                  {t('intro.heading1')}{' '}
                  <span className="text-gradient">{t('intro.heading2')}</span>{' '}
                  {t('intro.heading3')}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {t('intro.p1')}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-muted-foreground leading-relaxed mb-10">
                  {t('intro.p2')}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <div className="flex items-center gap-10">
                  <div>
                    <p className="text-4xl font-bold font-display text-gradient">{t('intro.stat1.value')}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{t('intro.stat1.label')}</p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div>
                    <p className="text-4xl font-bold font-display text-gradient">{t('intro.stat2.value')}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{t('intro.stat2.label')}</p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div>
                    <p className="text-4xl font-bold font-display text-gradient">{t('intro.stat3.value')}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{t('intro.stat3.label')}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — product lines */}
            <div className="flex flex-col gap-3">
              <ScrollReveal delay={0.1}>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.25em] mb-4">
                  {t('intro.products.label')}
                </p>
              </ScrollReveal>
              {productLines.map((product, i) => (
                <ScrollReveal key={product.label} delay={0.15 + i * 0.08}>
                  <Link
                    to={product.route}
                    className="group flex items-center justify-between p-5 rounded-2xl border border-border/30 hover:border-primary/40 bg-secondary/20 hover:bg-primary/5 transition-all duration-300"
                  >
                    <div>
                      <p className="font-display text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                        {product.label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{product.sub}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </ScrollReveal>
              ))}
            </div>

          </div>

          {/* Bottom divider */}
          <ScrollReveal delay={0.2}>
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-border to-transparent mt-20"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default IntroSection;

