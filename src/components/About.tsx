import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const About = () => {
  const features = [
    'Guia prático para cuidar da saúde física e mental',
    'Desenvolvimento de hábitos saudáveis',
    'Estratégias para alcançar o equilíbrio',
    'Exercícios e reflexões para autoconhecimento',
    'Dicas para melhorar a qualidade de vida',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre o Livro
          </h2>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
            "Bora Cuidar" é mais que um livro, é um convite para transformar 
            sua vida através de hábitos saudáveis e autoconhecimento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">
              O que você vai encontrar
            </h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-dark/90">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-light p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Dedicação</h3>
            <p className="text-dark/80 mb-6">
              "Aos meus pais, que me ensinaram o valor do cuidado e do amor próprio. 
              Aos meus amigos, que sempre me apoiaram em minha jornada. E a todos 
              aqueles que buscam uma vida mais saudável e equilibrada."
            </p>
            <h3 className="text-2xl font-bold mb-4">Introdução</h3>
            <p className="text-dark/80">
              "Neste livro, compartilho minha jornada de autoconhecimento e 
              desenvolvimento pessoal. Através de experiências práticas e 
              reflexões profundas, você será guiado em uma transformação 
              que vai além do físico, alcançando o equilíbrio entre corpo, 
              mente e espírito."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 