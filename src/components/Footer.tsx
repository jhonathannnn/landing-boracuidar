import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-extrabold mb-4 text-neonPurple drop-shadow-lg">Bora Cuidar</h3>
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
            <h4 className="text-lg font-semibold mb-4 text-magenta">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="link transition-all duration-300 rounded-xl px-4 py-2 hover:bg-white hover:text-black">
                  Sobre o Livro
                </a>
              </li>
              <li>
                <a href="#content" className="link transition-all duration-300 rounded-xl px-4 py-2 hover:bg-white hover:text-black">
                  Conteúdo
                </a>
              </li>
              <li>
                <a href="#author" className="link transition-all duration-300 rounded-xl px-4 py-2 hover:bg-white hover:text-black">
                  Autor
                </a>
              </li>
              <li>
                <a href="#testimonials" className="link transition-all duration-300 rounded-xl px-4 py-2 hover:bg-white hover:text-black">
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
            <h4 className="text-lg font-semibold mb-4 text-magenta">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/jhonathan_santoss/"
                className="link group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-red-600 transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-lg">
                  <rect width="18" height="18" x="3" y="3" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="17" cy="7" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/Jhonathan.santosss"
                className="link group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-red-600 transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-lg">
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/jhonathan-santos/"
                className="link group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-red-600 transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-lg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z" />
                </svg>
              </a>
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