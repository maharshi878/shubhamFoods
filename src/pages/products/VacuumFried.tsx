import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import B2BSection from '@/components/B2BSection';
import { Thermometer, Package, Truck, Clock, Shield, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const VacuumFried: React.FC = () => {
  const { t } = useLanguage();

  const processSteps = [
    { step: '01', title: t('vacuum.step1.title'), desc: t('vacuum.step1.desc') },
    { step: '02', title: t('vacuum.step2.title'), desc: t('vacuum.step2.desc') },
    { step: '03', title: t('vacuum.step3.title'), desc: t('vacuum.step3.desc') },
    { step: '04', title: t('vacuum.step4.title'), desc: t('vacuum.step4.desc') },
    { step: '05', title: t('vacuum.step5.title'), desc: t('vacuum.step5.desc') },
    { step: '06', title: t('vacuum.step6.title'), desc: t('vacuum.step6.desc') },
  ];

  const specs = [
    { icon: Thermometer, label: t('vacuum.spec1.label'), value: t('vacuum.spec1.value') },
    { icon: Clock, label: t('vacuum.spec2.label'), value: t('vacuum.spec2.value') },
    { icon: Package, label: t('vacuum.spec3.label'), value: t('vacuum.spec3.value') },
    { icon: Truck, label: t('vacuum.spec4.label'), value: t('vacuum.spec4.value') },
    { icon: Shield, label: t('vacuum.spec5.label'), value: t('vacuum.spec5.value') },
    { icon: CheckCircle2, label: t('vacuum.spec6.label'), value: t('vacuum.spec6.value') },
  ];

  const products = [
    { name: t('vacuum.product1.name'), desc: t('vacuum.product1.desc') },
    { name: t('vacuum.product2.name'), desc: t('vacuum.product2.desc') },
    { name: t('vacuum.product3.name'), desc: t('vacuum.product3.desc') },
    { name: t('vacuum.product4.name'), desc: t('vacuum.product4.desc') },
    { name: t('vacuum.product5.name'), desc: t('vacuum.product5.desc') },
    { name: t('vacuum.product6.name'), desc: t('vacuum.product6.desc') },
    { name: t('vacuum.product7.name'), desc: t('vacuum.product7.desc') },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Vacuum Fried Products — Shubham Foods</title>
        <meta
          name="description"
          content="Seven vacuum fried products including garlic, okra, potatoes, chickpeas, kidney beans, sweet potatoes, and banana. Lower oil content, crisp texture, vibrant colour."
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
                Vacuum Fried Products
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/src/assets/image4.webp)' }}
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
              <span className="badge-research mb-6 inline-block">{t('vacuum.badge')}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                {t('vacuum.title1')} <span className="text-gradient">{t('vacuum.title2')}</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('vacuum.description')}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Product variants */}
        <section className="py-24">
          <div className="container px-6">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <h2 className="section-title text-center mb-4">{t('vacuum.range.title')}</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="section-subtitle text-center mx-auto mb-16">
                  {t('vacuum.range.subtitle')}
                </p>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, i) => (
                  <ScrollReveal key={product.name} delay={i * 0.07}>
                    <div className="glass-card p-6 h-full">
                      <h3 className="font-display text-xl font-semibold mb-3 text-gradient">{product.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{product.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-secondary/10">
          <div className="container px-6">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <h2 className="section-title text-center mb-4">{t('vacuum.howMade.title')}</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="section-subtitle text-center mx-auto mb-16">
                  {t('vacuum.howMade.subtitle')}
                </p>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {processSteps.map((step, i) => (
                  <ScrollReveal key={step.step} delay={i * 0.08}>
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
        <section className="py-24">
          <div className="container px-6">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <h2 className="section-title text-center mb-16">{t('vacuum.specs.title')}</h2>
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

export default VacuumFried;
