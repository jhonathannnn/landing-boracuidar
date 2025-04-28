import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import capaLivro from '../assets/capa.png';

const CTA = () => {
  const navigate = useNavigate();
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary drop-shadow-lg">
            Pronto para transformar sua vida?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Adquira agora o livro "Bora Cuidar" e comece sua jornada de autoconhecimento e desenvolvimento pessoal.
          </p>

          {/* Box de Oferta */}
          <div className="mx-auto max-w-md bg-black rounded-2xl shadow-2xl border border-white/10 p-8 mb-8 flex flex-col items-center">
            {/* Capa do Livro */}
            <img
              src={capaLivro}
              alt="Capa do livro Bora Cuidar"
              className="w-32 h-44 object-cover rounded-lg shadow-lg mb-4"
            />
            <div className="mb-2">
              <span className="block text-lg text-red-600 font-bold line-through">R$ 69,90</span>
            </div>
            <div className="mb-1">
              <span className="text-white text-sm font-semibold">POR</span>
            </div>
            <div className="mb-1">
              <span className="text-white text-xs font-semibold">3X DE</span>
            </div>
            <div className="mb-2">
              <span className="text-5xl font-extrabold text-white">19,96</span>
            </div>
            <div className="mb-4">
              <span className="text-white text-base font-semibold">OU R$ 59,90 À VISTA.</span>
            </div>
            <button
              className="w-full py-4 rounded-full bg-primary text-white text-lg font-bold shadow-xl hover:bg-white hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              style={{ boxShadow: '0 0 32px 0 #d9042955' }}
              onClick={() => navigate('/checkout')}
            >
              QUERO CUIDAR DA MINHA VIDA!
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 