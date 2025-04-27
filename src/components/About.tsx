import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const About = () => {
  const features = [
    'Como uma demissão inesperada pode transformar o seu destino.',
    'Vença os sabotadores internos que bloqueiam seus resultados.',
    'Transforme cada crise em uma oportunidade de crescimento.',
    'Destrave seu propósito e conquiste resultados reais com o método GoFive.',
    'A maioria desiste diante os obstáculos. Não pare!',
  ];

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Sobre o Livro
          </h2>
          <p className="text-lg text-black/80 max-w-3xl mx-auto mb-8">
            "Bora Cuidar" é um chamado à ação para quem deseja dar uma virada na vida, superar crises, vencer sabotadores internos e conquistar resultados reais com propósito. Inspirado em experiências reais, o livro apresenta o método GoFive e mostra como transformar desafios em oportunidades de crescimento pessoal e profissional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">
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
                  <span className="text-white/90">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black p-8 rounded-lg shadow-lg border border-primary/30"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">Dedicação</h3>
            <p className="text-white/80 mb-6">
              "Aos meus pais, que me ensinaram o valor do cuidado e do amor próprio. 
              Aos meus amigos, que sempre me apoiaram em minha jornada. E a todos 
              aqueles que buscam uma vida mais saudável e equilibrada."
            </p>
            <h3 className="text-2xl font-bold mb-4 text-primary">Introdução</h3>
            <p className="text-white/80">
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