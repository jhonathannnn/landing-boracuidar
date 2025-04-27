import { motion } from 'framer-motion';
import { UserIcon } from '@heroicons/react/24/outline';

const Author = () => {
  return (
    <section id="author" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre o Autor
          </h2>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            Conheça a história e a trajetória do autor por trás de "Bora Cuidar".
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="/author.jpg"
                alt="Autor do livro Bora Cuidar"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full opacity-20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-full">
                <UserIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Jhonathan Santos</h3>
            </div>
            <p className="text-dark/80 mb-6">
              Jhonathan Santos é um apaixonado por desenvolvimento pessoal e 
              bem-estar. Com anos de experiência em coaching e mentoria, ele 
              dedica sua vida a ajudar pessoas a alcançarem seu potencial máximo.
            </p>
            <p className="text-dark/80 mb-6">
              Sua jornada de autoconhecimento e transformação pessoal o levou 
              a escrever "Bora Cuidar", um guia prático que combina teoria e 
              experiência pessoal para inspirar mudanças positivas na vida dos 
              leitores.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Formação:</span>
                <span className="text-dark/80">Coach e Mentor em Desenvolvimento Pessoal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Experiência:</span>
                <span className="text-dark/80">+10 anos ajudando pessoas a transformarem suas vidas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Missão:</span>
                <span className="text-dark/80">Inspirar e guiar pessoas em sua jornada de autoconhecimento</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Author; 