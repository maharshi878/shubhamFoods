import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, FlaskConical, Heart, Brain, Shield, Microscope } from 'lucide-react';

interface Citation {
  id: number;
  titleKey: string;
  findingKey: string;
  sourceKey: string;
  doiKey: string;
  icon: React.ElementType;
}

const citations: Citation[] = [
  { id: 1, titleKey: 'citation1.title', findingKey: 'citation1.finding', sourceKey: 'citation1.source', doiKey: 'citation1.doi', icon: FlaskConical },
  { id: 2, titleKey: 'citation2.title', findingKey: 'citation2.finding', sourceKey: 'citation2.source', doiKey: 'citation2.doi', icon: Heart },
  { id: 3, titleKey: 'citation3.title', findingKey: 'citation3.finding', sourceKey: 'citation3.source', doiKey: 'citation3.doi', icon: Shield },
  { id: 4, titleKey: 'citation4.title', findingKey: 'citation4.finding', sourceKey: 'citation4.source', doiKey: 'citation4.doi', icon: Brain },
  { id: 5, titleKey: 'citation5.title', findingKey: 'citation5.finding', sourceKey: 'citation5.source', doiKey: 'citation5.doi', icon: Shield },
  { id: 6, titleKey: 'citation6.title', findingKey: 'citation6.finding', sourceKey: 'citation6.source', doiKey: 'citation6.doi', icon: Microscope },
];

const CitationCard: React.FC<{ citation: Citation; index: number }> = ({ citation, index }) => {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const Icon = citation.icon;

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="citation-card h-full cursor-pointer"
        style={{
          '--mouse-x': '50%',
          '--mouse-y': '50%',
        } as React.CSSProperties}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
        }}
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-lg font-semibold mb-1">
              {t(citation.titleKey)}
            </h3>
            <p className="text-sm text-muted-foreground">{t(citation.sourceKey)}</p>
          </div>
        </div>

        <p className="text-foreground/80 leading-relaxed mb-4">
          {t(citation.findingKey)}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <span className="text-xs text-muted-foreground font-mono">
            {t(citation.doiKey)}
          </span>
          <motion.div
            animate={{ x: isHovered ? 4 : 0 }}
            className="text-primary"
          >
            <ExternalLink className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

const ResearchSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="research" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-1/3 h-96 bg-gradient-to-r from-primary/5 to-transparent blur-3xl" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="badge-research">{t('research.badge')}</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="section-title mb-6">{t('research.title')}</h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="section-subtitle mx-auto">
                {t('research.subtitle')}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {citations.map((citation, index) => (
              <CitationCard key={citation.id} citation={citation} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
