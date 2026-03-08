import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import CompanyAboutSection from '@/components/CompanyAboutSection';
import ProcessSection from '@/components/ProcessSection';
import ProductsOverviewSection from '@/components/ProductsOverviewSection';
import B2BSection from '@/components/B2BSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Shubham Foods — Garlic Products Manufacturer, Gujarat</title>
        <meta
          name="description"
          content="Value-added garlic processing unit based in Bharuch, Gujarat. Black Garlic, Peeled Frozen Garlic, Freeze Dried, Vacuum Fried, and Roasted Masala products for bulk and retail markets."
        />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <CompanyAboutSection />
        <ProcessSection />
        <ProductsOverviewSection />
        <B2BSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;




