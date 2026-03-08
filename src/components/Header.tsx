import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'gu', label: 'GU' },
    { code: 'hi', label: 'HI' },
  ];

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Black Garlic', href: '/products/black-garlic' },
    { label: 'Peeled Garlic', href: '/products/peeled-garlic' },
    { label: 'Freeze Dried', href: '/products/freeze-dried' },
    { label: 'Vacuum Fried', href: '/products/vacuum-fried' },
    { label: 'Roasted Masala', href: '/products/roasted-masala' },
    { label: 'Process', href: '/#process' },
    { label: 'B2B', href: '/#bulk-enquiry' },
    { label: 'Contact', href: '/#contact' },
  ];

  const [visible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: visible ? 0 : -20,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-[9999] pointer-events-auto"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 relative">
        <div className="glass-card px-6 py-3 pointer-events-auto">
          <div className="flex items-center justify-between gap-6 mb-3">
            <a
              href="#home"
              className="flex items-center gap-3 cursor-pointer pointer-events-auto"
            >
              <img src="/logo.png" alt="Shubham Foods" className="h-10 w-auto object-contain" />
              <div>
                <span className="font-display text-xl font-semibold block leading-tight">
                  Shubham Foods
                </span>
                <span className="text-xs text-muted-foreground hidden sm:block">
                  Garlic Products Manufacturer
                </span>
              </div>
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(prev => !prev)}
              className="lg:hidden pointer-events-auto p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-6 pointer-events-auto flex-wrap">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="nav-link text-sm font-medium cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="lg:hidden mt-2 rounded-2xl overflow-hidden pointer-events-auto"
              style={{
                background: 'hsl(20 10% 8% / 0.75)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid hsl(40 20% 30% / 0.25)',
                boxShadow: '0 8px 32px hsl(0 0% 0% / 0.4), inset 0 1px 0 hsl(40 20% 95% / 0.05)',
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, hsl(40 20% 95% / 0.04) 0%, transparent 60%)',
                }}
              />

              <nav className="relative px-4 py-3 flex flex-col">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03, duration: 0.2 }}
                  >
                    <Link
                      to={item.href}
                      className="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-200 group"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>{item.label}</span>
                      <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs">→</span>
                    </Link>
                    {index < navItems.length - 1 && (
                      <div className="mx-3 h-px bg-border/20" />
                    )}
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

