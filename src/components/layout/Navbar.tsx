'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSelector from '../ui/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/locales/translations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const pathname = usePathname();
  const { language } = useLanguage();

  const navItems = [
    { name: getTranslation(language, 'nav.home'), path: '/' },
    { name: getTranslation(language, 'nav.about'), path: '/about' },
    {
      name: getTranslation(language, 'nav.portfolio'),
      path: '/portfolio',
      dropdown: [
        {
          name: getTranslation(language, 'portfolio_categories.software'),
          path: '/portfolio/software-web',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          ),
          description: getTranslation(language, 'portfolio_categories.software_desc')
        },
        {
          name: getTranslation(language, 'portfolio_categories.design'),
          path: '/portfolio/3d-design',
          icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
          ),
          description: getTranslation(language, 'portfolio_categories.design_desc')
        }
      ],
    },
    { name: getTranslation(language, 'nav.resume'), path: '/resume' },
    { name: getTranslation(language, 'nav.contact'), path: '/contact' },
  ];

  const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full bg-current transition ease transform duration-300`;

  return (
    <header>
      <nav className="fixed w-full z-50 bg-primary/90 backdrop-blur-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 w-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-white text-xl font-bold">
                Deniz Barçak
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.dropdown && setIsPortfolioOpen(true)}
                    onMouseLeave={() => item.dropdown && setIsPortfolioOpen(false)}
                  >
                    {item.dropdown ? (
                      <button
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-default ${
                          pathname?.startsWith('/portfolio')
                            ? 'text-accent'
                            : 'text-gray-300'
                        }`}
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        href={item.path}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                          pathname === item.path
                            ? 'text-accent'
                            : 'text-gray-300 hover:text-accent'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Language Selector & Mobile Navigation Button */}
            <div className="flex items-center justify-end gap-2">
              <LanguageSelector />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex flex-col h-10 w-10 rounded justify-center items-center group"
                aria-label="Toggle navigation menu"
              >
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "rotate-45 translate-y-1.5 opacity-100 group-hover:opacity-100"
                      : "opacity-100 group-hover:opacity-100"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "opacity-0"
                      : "opacity-100 group-hover:opacity-100"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "-rotate-45 -translate-y-1.5 opacity-100 group-hover:opacity-100"
                      : "opacity-100 group-hover:opacity-100"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Portfolio Dropdown */}
      <AnimatePresence>
        {isPortfolioOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-16 left-0 w-full bg-primary/95 backdrop-blur-sm border-t border-accent/10 z-40"
            onMouseEnter={() => setIsPortfolioOpen(true)}
            onMouseLeave={() => setIsPortfolioOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {navItems.find(item => item.name === getTranslation(language, 'nav.portfolio'))?.dropdown?.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`group p-6 rounded-2xl transition-all duration-300 ${
                      pathname === item.path
                        ? 'bg-accent/20 border-accent'
                        : 'bg-secondary/50 hover:bg-accent/10'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`text-accent transition-transform duration-300 group-hover:scale-110 ${
                        pathname === item.path ? 'scale-110' : ''
                      }`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white group-hover:text-accent">
                          {item.name}
                        </h3>
                        <p className="text-gray-400 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 bg-primary z-40 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col items-center pt-6"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="w-full text-center flex flex-col items-center"
                >
                  {item.dropdown ? (
                    <button
                      className={`block py-4 text-3xl font-medium tracking-wide ${
                        pathname?.startsWith('/portfolio')
                          ? 'text-accent'
                          : 'text-gray-300 hover:text-accent'
                      }`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.path}
                      className={`block py-4 text-3xl font-medium tracking-wide ${
                        pathname === item.path
                          ? 'text-accent'
                          : 'text-gray-300 hover:text-accent'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.dropdown && (
                    <div className="grid grid-cols-2 gap-3 px-4 py-4 w-full max-w-md mx-auto">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.path}
                          className={`p-3 rounded-lg border ${
                            pathname === dropdownItem.path
                              ? 'bg-accent/20 border-accent text-accent'
                              : 'border-gray-700 text-gray-400 hover:border-accent hover:text-accent'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex flex-col items-center text-center">
                            <div className="mb-1.5">
                              {dropdownItem.icon}
                            </div>
                            <div className="text-base font-medium">
                              {dropdownItem.name}
                            </div>
                            <p className="text-xs mt-0.5 opacity-75">
                              {dropdownItem.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                    className={`h-px w-24 ${
                      pathname === item.path
                        ? 'bg-accent'
                        : 'bg-gray-700'
                    }`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;