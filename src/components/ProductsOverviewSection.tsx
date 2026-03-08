import React from 'react';
import ScrollReveal from './ScrollReveal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductsOverviewSection: React.FC = () => {
  const { t } = useLanguage();
  const products = [
    {
      id: 'black-garlic',
      route: '/products/black-garlic',
      name: t('products.blackGarlic.name'),
      method: t('products.blackGarlic.method'),
      formats: t('products.blackGarlic.formats'),
    },
    {
      id: 'peeled-garlic',
      route: '/products/peeled-garlic',
      name: t('products.peeled.name'),
      method: t('products.peeled.method'),
      formats: t('products.peeled.formats'),
    },
    {
      id: 'freeze-dried',
      route: '/products/freeze-dried',
      name: t('products.freeze.name'),
      method: t('products.freeze.method'),
      formats: t('products.freeze.formats'),
    },
    {
      id: 'vacuum-fried',
      route: '/products/vacuum-fried',
      name: t('products.vacuum.name'),
      method: t('products.vacuum.method'),
      formats: t('products.vacuum.formats'),
    },
    {
      id: 'roasted-masala',
      route: '/products/roasted-masala',
      name: t('products.roasted.name'),
      method: t('products.roasted.method'),
      formats: t('products.roasted.formats'),
    },
  ];

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="badge-research mb-6 inline-block">{t('products.badge')}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="section-title mb-6">{t('products.title')}</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="section-subtitle mx-auto">
                {t('products.subtitle')}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.08}>
                <Link
                  to={product.route}
                  className="glass-card p-8 h-full flex flex-col group cursor-pointer no-underline text-inherit hover:border-primary/40 transition-colors duration-300"
                >
                  <h3 className="font-display text-2xl font-semibold mb-4">{product.name}</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Processing method</p>
                  <p className="text-foreground/90 leading-relaxed mb-5">{product.method}</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Formats available</p>
                  <p className="text-foreground/90 leading-relaxed mb-6">{product.formats}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300 mt-auto">
                    {t('products.viewDetails')} <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsOverviewSection;








