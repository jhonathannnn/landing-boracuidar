import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Bora Cuidar</h3>
            <p className="text-white/80 mb-4">
              Um guia prático para transformar sua vida através do 
              autoconhecimento e desenvolvimento pessoal.
            </p>
            <div className="flex items-center gap-2 text-white/80">
              <EnvelopeIcon className="h-5 w-5" />
              <span>contato@boracuidar.com</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 mt-2">
              <PhoneIcon className="h-5 w-5" />
              <span>(11) 99999-9999</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  Sobre o Livro
                </a>
              </li>
              <li>
                <a href="#content" className="text-white/80 hover:text-white transition-colors">
                  Conteúdo
                </a>
              </li>
              <li>
                <a href="#author" className="text-white/80 hover:text-white transition-colors">
                  Autor
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <button
                className="text-white/80 hover:text-white transition-colors"
                type="button"
                aria-label="Instagram"
              >
                Instagram
              </button>
              <button
                className="text-white/80 hover:text-white transition-colors"
                type="button"
                aria-label="Facebook"
              >
                Facebook
              </button>
              <button
                className="text-white/80 hover:text-white transition-colors"
                type="button"
                aria-label="LinkedIn"
              >
                LinkedIn
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10 text-center text-white/60"
        >
          <p>&copy; {new Date().getFullYear()} Bora Cuidar. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 