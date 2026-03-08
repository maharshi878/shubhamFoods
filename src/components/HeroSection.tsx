import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Briefcase } from 'lucide-react';
import ShaderAnimation from '@/components/ui/shader-animation';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentY = useTransform(scrollY, [0, 500], [0, 50]);
  const orbY = useTransform(scrollY, [0, 500], [0, -100]);

  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-8">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/src/assets/image6.webp)' }}
      />
      <div
        className="absolute inset-x-0 top-0 h-32 z-10"
        style={{ background: 'linear-gradient(to bottom, hsl(20 10% 6%), transparent)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32 z-10"
        style={{ background: 'linear-gradient(to top, hsl(20 10% 6%), transparent)' }}
      />
      <div className="absolute inset-0 bg-black/70" />
      <motion.div className="absolute inset-0 z-0" style={{ y: imageY }}>
        <ShaderAnimation className="absolute inset-0" />
      </motion.div>
      <motion.div className="absolute inset-0 z-[1]" style={{ y: orbY }}>
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/84 to-background/92" />
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[2] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, hsl(20 10% 6%))' }}
      />
      <motion.div className="container relative z-10 px-6" style={{ y: contentY }}>
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8"
          >
            <span className="text-white">{t('home.hero.title')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {t('home.hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#products"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg transition-all duration-300 hover:shadow-[0_0_40px_hsl(38_90%_50%/0.4)] hover:scale-105"
            >
              {t('home.hero.cta.products')}
              <ArrowDown className="w-5 h-5" />
            </a>
            <a
              href="/#bulk-enquiry"
              className="inline-flex items-center gap-3 px-8 py-4 glass-card rounded-full font-medium text-lg transition-all duration-300 hover:border-primary/40"
            >
              {t('home.hero.cta.enquiry')}
              <Briefcase className="w-5 h-5 text-primary" />
            </a>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

