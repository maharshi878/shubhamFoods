import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import B2BSection from '@/components/B2BSection';
import { Thermometer, Package, Truck, Clock, Shield, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PeeledGarlic: React.FC = () => {
  const { t } = useLanguage();

  const processSteps = [
    { step: '01', title: t('peeled.step1.title'), desc: t('peeled.step1.desc') },
    { step: '02', title: t('peeled.step2.title'), desc: t('peeled.step2.desc') },
    { step: '03', title: t('peeled.step3.title'), desc: t('peeled.step3.desc') },
    { step: '04', title: t('peeled.step4.title'), desc: t('peeled.step4.desc') },
  ];

  const specs = [
    { icon: Thermometer, label: t('peeled.spec1.label'), value: t('peeled.spec1.value') },
    { icon: Clock, label: t('peeled.spec2.label'), value: t('peeled.spec2.value') },
    { icon: Package, label: t('peeled.spec3.label'), value: t('peeled.spec3.value') },
    { icon: Truck, label: t('peeled.spec4.label'), value: t('peeled.spec4.value') },
    { icon: Shield, label: t('peeled.spec5.label'), value: t('peeled.spec5.value') },
    { icon: CheckCircle2, label: t('peeled.spec6.label'), value: t('peeled.spec6.value') },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Peeled Frozen Garlic — Shubham Foods</title>
        <meta
          name="description"
          content="Clean, consistently processed peeled garlic cloves for horeca kitchens, food processors, and bulk repackers. Colour sorted and manually inspected."
        />
      </Helmet>
      <Header />
      <main>
        <nav aria-label="breadcrumb" className="pt-28 pb-0 px-6">
          <div className="container mx-auto">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-border">/</li>
              <li className="text-foreground font-medium">
                Peeled Frozen Garlic
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/src/assets/image2.webp)' }}
          />
          <div
            className="absolute inset-x-0 top-0 h-32 z-10"
            style={{ background: 'linear-gradient(to bottom, hsl(20 10% 6%), transparent)' }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-32 z-10"
            style={{ background: 'linear-gradient(to top, hsl(20 10% 6%), transparent)' }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
          <div className="container relative z-10 px-6 text-center">
            <ScrollReveal>
              <span className="badge-research mb-6 inline-block">{t('peeled.badge')}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                {t('peeled.title1')} <span className="text-gradient">{t('peeled.title2')}</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('peeled.description')}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Process */}
        <section className="py-24">
          <div className="container px-6">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <h2 className="section-title text-center mb-4">{t('peeled.howMade.title')}</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="section-subtitle text-center mx-auto mb-16">
                  {t('peeled.howMade.subtitle')}
                </p>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6">
                {processSteps.map((step, i) => (
                  <ScrollReveal key={step.step} delay={i * 0.1}>
                    <div className="glass-card p-6">
                      <span className="text-4xl font-bold text-primary/30 font-display">{step.step}</span>
                      <h3 className="text-lg font-semibold mt-2 mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specs */}
        <section className="py-24 bg-secondary/10">
          <div className="container px-6">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <h2 className="section-title text-center mb-16">{t('peeled.specs.title')}</h2>
              </ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {specs.map((spec, i) => (
                  <ScrollReveal key={spec.label} delay={i * 0.08}>
                    <div className="glass-card p-6 text-center">
                      <spec.icon className="w-7 h-7 text-primary mx-auto mb-3" />
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{spec.label}</p>
                      <p className="text-sm font-semibold">{spec.value}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <B2BSection />
      </main>
      <Footer />
    </div>
  );
};

export default PeeledGarlic;
