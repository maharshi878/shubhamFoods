import React from 'react';
import ScrollReveal from './ScrollReveal';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductDetailsSection: React.FC = () => {
  const { t } = useLanguage();

  const productDetails = [
    {
      id: 'peeled-garlic',
      name: t('productDetails.peeled.name'),
      points: [t('productDetails.peeled.p1'), t('productDetails.peeled.p2'), t('productDetails.peeled.p3')],
    },
    {
      id: 'freeze-dried',
      name: t('productDetails.freeze.name'),
      points: [t('productDetails.freeze.p1'), t('productDetails.freeze.p2'), t('productDetails.freeze.p3')],
    },
    {
      id: 'vacuum-fried',
      name: t('productDetails.vacuum.name'),
      points: [t('productDetails.vacuum.p1'), t('productDetails.vacuum.p2'), t('productDetails.vacuum.p3')],
    },
    {
      id: 'roasted-masala',
      name: t('productDetails.roasted.name'),
      points: [t('productDetails.roasted.p1'), t('productDetails.roasted.p2'), t('productDetails.roasted.p3')],
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {productDetails.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.1}>
              <div id={product.id} className="glass-card p-8 md:p-10">
                <h3 className="font-display text-3xl font-semibold mb-6">{product.name}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {product.points.map((point) => (
                    <div key={point} className="bg-secondary/30 rounded-xl p-5 border border-border/30">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <p className="text-muted-foreground leading-relaxed">{point}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSection;
