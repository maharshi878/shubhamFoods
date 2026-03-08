import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import B2BSection from '@/components/B2BSection';
import { Thermometer, Package, Truck, Clock, Shield, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const FreezeDried: React.FC = () => {
  const { t } = useLanguage();

  const processSteps = [
    { step: '01', title: t('freeze.step1.title'), desc: t('freeze.step1.desc') },
    { step: '02', title: t('freeze.step2.title'), desc: t('freeze.step2.desc') },
    { step: '03', title: t('freeze.step3.title'), desc: t('freeze.step3.desc') },
    { step: '04', title: t('freeze.step4.title'), desc: t('freeze.step4.desc') },
    { step: '05', title: t('freeze.step5.title'), desc: t('freeze.step5.desc') },
    { step: '06', title: t('freeze.step6.title'), desc: t('freeze.step6.desc') },
  ];

  const specs = [
    { icon: Thermometer, label: t('freeze.spec1.label'), value: t('freeze.spec1.value') },
    { icon: Clock, label: t('freeze.spec2.label'), value: t('freeze.spec2.value') },
    { icon: Package, label: t('freeze.spec3.label'), value: t('freeze.spec3.value') },
    { icon: Truck, label: t('freeze.spec4.label'), value: t('freeze.spec4.value') },
    { icon: Shield, label: t('freeze.spec5.label'), value: t('freeze.spec5.value') },
    { icon: CheckCircle2, label: t('freeze.spec6.label'), value: t('freeze.spec6.value') },
  ];

  const products = [
    { name: t('freeze.product1.name'), desc: t('freeze.product1.desc') },
    { name: t('freeze.product2.name'), desc: t('freeze.product2.desc') },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Freeze Dried Garlic & Banana — Shubham Foods</title>
        <meta
          name="description"
          content="Freeze dried garlic and banana in granule, powder, flake, and slice formats. Ambient-stable shelf life up to 24 months. B2B supply from Gujarat."
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
                Freeze Dried Products
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/src/assets/image3.webp)' }}
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
              <span className="badge-research mb-6 inline-block">{t('freeze.badge')}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                {t('freeze.title1')} <span className="text-gradient">{t('freeze.title2')}</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('freeze.description')}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Product variants */}
        <section className="py-24">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="section-title text-center mb-16">{t('freeze.variants.title')}</h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6">
                {products.map((product, i) => (
                  <ScrollReveal key={product.name} delay={i * 0.1}>
                    <div className="glass-card p-8">
                      <h3 className="font-display text-2xl font-semibold mb-4 text-gradient">{product.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{product.desc}</p>
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
                <h2 className="section-title text-center mb-4">{t('freeze.howMade.title')}</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="section-subtitle text-center mx-auto mb-16">
                  {t('freeze.howMade.subtitle')}
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
                <h2 className="section-title text-center mb-16">{t('freeze.specs.title')}</h2>
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

export default FreezeDried;
