import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import capaLivro from '../assets/capa.png';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-white text-black">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-primary drop-shadow-lg">
              Transforme sua vida com <span className="text-black">Bora Cuidar</span>
            </h1>
            <p className="text-xl text-black/80 mb-8">
              Um guia prático para cuidar da sua saúde física e mental, com hábitos vibrantes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#buy"
                className="btn btn-primary flex items-center justify-center gap-2"
              >
                Comprar Agora
                <ArrowRightIcon className="h-5 w-5" />
              </a>
              <a
                href="#about"
                className="btn btn-secondary"
              >
                Saiba Mais
              </a>
            </div>
            <div className="flex gap-2 mt-8">
              <span className="step-bar" style={{ height: 8, width: 32, display: 'inline-block' }} />
              <span className="step-bar" style={{ height: 8, width: 32, display: 'inline-block' }} />
              <span className="step-bar" style={{ height: 8, width: 32, display: 'inline-block' }} />
              <span className="step-bar" style={{ height: 8, width: 32, display: 'inline-block' }} />
              <span className="step-bar" style={{ height: 8, width: 32, display: 'inline-block' }} />
            </div>
            <div className="mt-8 bg-white/90 border-l-4 border-primary shadow-lg rounded-lg p-4 max-w-xl mx-auto">
              <h4 className="text-lg font-bold text-primary mb-2">Prefácio de Flávio Augusto</h4>
              <p className="italic text-black/80 mb-2">
                “Por meio de sua própria experiência, Jhonathan Santos oferece um método autêntico para transformar o medo em movimento, o desejo em plano e a ação em conquista.”
              </p>
              <span className="block text-xs text-black/60">Sobre o método GoFive</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={capaLivro}
                alt="Capa do livro Bora Cuidar"
                className="rounded-2xl shadow-2xl border-4 border-primary w-full max-w-md mx-auto bg-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 