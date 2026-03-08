import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlackGarlicSection from '@/components/BlackGarlicSection';
import AboutSection from '@/components/AboutSection';
import BenefitsSection from '@/components/BenefitsSection';
import ComparisonSection from '@/components/ComparisonSection';
import NutritionSection from '@/components/NutritionSection';
import ResearchSection from '@/components/ResearchSection';
import RecipesSection from '@/components/RecipesSection';
import WhyUsSection from '@/components/WhyUsSection';
import B2BSection from '@/components/B2BSection';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const BlackGarlic: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Black Garlic — Shubham Foods</title>
        <meta
          name="description"
          content="Slow-fermented black garlic produced under controlled temperature and humidity. Single ingredient, no additives. Supplied in bulk and retail formats from Gujarat."
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
                Black Garlic
              </li>
            </ol>
          </div>
        </nav>
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/src/assets/image1.webp)' }}
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
          {/* decorative radial bg */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{
                background: 'radial-gradient(circle, hsl(38 90% 50% / 0.06) 0%, transparent 70%)',
              }}
            />
          </div>

          <div className="container px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="badge-research mb-6 inline-block">Fermented Garlic — Single Ingredient</span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight mb-6">
                <span className="text-white">Black</span>{' '}
                <span className="text-gradient">Garlic</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Whole garlic bulbs fermented under controlled temperature and humidity for 30–40 days. No additives.
                No shortcuts. One ingredient, fully transformed.
              </p>
              <a
                href="#about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg transition-all duration-300 hover:scale-105"
              >
                Explore the Science
              </a>
            </div>
          </div>
        </section>
        <BlackGarlicSection />
        <AboutSection />
        <BenefitsSection />
        <ComparisonSection />
        <NutritionSection />
        <ResearchSection />
        <RecipesSection />
        <WhyUsSection /> 
        <B2BSection />
      </main>
      <Footer />
    </div>
  );
};

export default BlackGarlic;
