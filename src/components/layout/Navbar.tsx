'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSelector from '../ui/LanguageSelector';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full bg-current transition ease transform duration-300`;

  return (
    <nav className="fixed w-full z-50 bg-primary/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold">
              Deniz
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    pathname === item.path
                      ? 'text-accent'
                      : 'text-gray-300 hover:text-accent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Language Selector - Desktop */}
          <div className="hidden md:flex items-center justify-end">
            <LanguageSelector />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex flex-1 justify-end">
            <div className="flex items-center">
              <LanguageSelector />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-2 flex flex-col h-10 w-10 rounded justify-center items-center group"
                aria-label="Menu"
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

        {/* Mobile Navigation Menu */}
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
      </div>
    </nav>
  );
};

export default Navbar;