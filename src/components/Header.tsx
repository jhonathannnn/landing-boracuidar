import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Sobre o Livro', href: '#about' },
    { name: 'Conteúdo', href: '#content' },
    { name: 'Autor', href: '#author' },
    { name: 'Depoimentos', href: '#testimonials' },
  ];

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold text-white">Bora Cuidar</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white px-4 py-2 rounded-xl transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#buy"
              className="btn btn-primary"
            >
              Comprar Agora
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-4"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white hover:text-neonPurple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#buy"
              className="btn btn-primary block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Comprar Agora
            </a>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header; 