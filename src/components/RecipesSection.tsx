import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { Clock, Users, ChefHat } from 'lucide-react';

interface Recipe {
  key: string;
  imageUrl: string;
  prepTime: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

const recipes: Recipe[] = [
  {
    key: 'recipe1',
    imageUrl: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80',
    prepTime: 25,
    servings: 4,
    difficulty: 'easy',
  },
  {
    key: 'recipe2',
    imageUrl: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=800&q=80',
    prepTime: 45,
    servings: 6,
    difficulty: 'medium',
  },
  {
    key: 'recipe3',
    imageUrl: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80',
    prepTime: 30,
    servings: 2,
    difficulty: 'easy',
  },
  {
    key: 'recipe4',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    prepTime: 60,
    servings: 4,
    difficulty: 'hard',
  },
];

const RecipesSection: React.FC = () => {
  const { t } = useLanguage();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-amber-400';
      case 'hard': return 'text-red-400';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section id="recipes" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent/5 to-transparent" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="badge-research mb-6 inline-block">{t('recipes.badge')}</span>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="section-title mb-6">{t('recipes.title')}</h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="section-subtitle mx-auto">
                {t('recipes.subtitle')}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recipes.map((recipe, index) => (
              <ScrollReveal key={recipe.key} delay={index * 0.1}>
                <div className="glass-card overflow-hidden group hover:border-primary/40 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={recipe.imageUrl} 
                      alt={t(`${recipe.key}.name`)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    
                    {/* Difficulty badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`glass-card px-3 py-1 text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                        {t(`recipes.${recipe.difficulty}`)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-gradient transition-all duration-300">
                      {t(`${recipe.key}.name`)}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {t(`${recipe.key}.description`)}
                    </p>

                    {/* Ingredients preview */}
                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        {t('recipes.ingredients')}
                      </p>
                      <p className="text-sm text-foreground/80">
                        {t(`${recipe.key}.ingredients`)}
                      </p>
                    </div>

                    {/* Meta info */}
                    <div className="flex items-center gap-6 pt-4 border-t border-border/30">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{recipe.prepTime} {t('recipes.minutes')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{recipe.servings} {t('recipes.servings')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ChefHat className="w-4 h-4 text-primary" />
                        <span className={getDifficultyColor(recipe.difficulty)}>
                          {t(`recipes.${recipe.difficulty}`)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
