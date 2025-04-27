import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const CTA = () => {
  return (
    <section id="buy" className="py-20 bg-black text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-neonPurple drop-shadow-lg">
            Pronto para transformar sua vida?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Adquira agora o livro "Bora Cuidar" e comece sua jornada de 
            autoconhecimento e desenvolvimento pessoal.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              className="btn btn-primary text-lg shadow-xl"
            >
              Comprar Agora
              <ArrowRightIcon className="h-5 w-5 ml-2" />
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