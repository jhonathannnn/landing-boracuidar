import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-light to-secondary/10">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transforme sua vida com{' '}
              <span className="text-primary">Bora Cuidar</span>
            </h1>
            <p className="text-lg text-dark/80 mb-8">
              Um guia prático para cuidar da sua saúde física e mental, 
              desenvolvendo hábitos saudáveis e alcançando o equilíbrio 
              que você sempre desejou.
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
                className="btn bg-white text-dark border-2 border-primary hover:bg-primary/10"
              >
                Saiba Mais
              </a>
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
                src="/book-cover.jpg"
                alt="Capa do livro Bora Cuidar"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 