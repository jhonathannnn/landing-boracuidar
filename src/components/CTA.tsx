import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const CTA = () => {
  return (
    <section id="buy" className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Pronto para transformar sua vida?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Adquira agora o livro "Bora Cuidar" e comece sua jornada de 
            autoconhecimento e desenvolvimento pessoal.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Comprar Agora
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </motion.div>
          <p className="mt-6 text-white/80">
            Garantia de 7 dias ou seu dinheiro de volta
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 