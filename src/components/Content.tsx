import { motion } from 'framer-motion';
import { BookOpenIcon } from '@heroicons/react/24/outline';

const Content = () => {
  const chapters = [
    {
      title: 'Capítulo 1: Virada Inesperada',
      description: 'Como uma demissão pode ser o ponto de partida para uma transformação profunda e cheia de propósito.'
    },
    {
      title: 'Capítulo 2: Sabotadores Internos',
      description: 'Identifique e vença os pensamentos e hábitos que bloqueiam seus resultados e sua evolução.'
    },
    {
      title: 'Capítulo 3: Crises e Oportunidades',
      description: 'Descubra como transformar cada crise em uma oportunidade real de crescimento pessoal e profissional.'
    },
    {
      title: 'Capítulo 4: O Método GoFive',
      description: 'Destrave seu propósito e conquiste resultados reais aplicando os 5 pilares do método GoFive.'
    },
    {
      title: 'Capítulo 5: Resiliência e Persistência',
      description: 'A maioria desiste diante dos obstáculos. Aprenda a não parar e a seguir em frente com consistência.'
    },
    {
      title: 'Capítulo 6: Conexão e Propósito',
      description: 'Construa uma rede de apoio, fortaleça seu propósito e viva uma vida de realizações.'
    },
  ];

  return (
    <section id="content" className="py-20 bg-black text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neonPurple">
            Conteúdo do Livro
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Uma jornada completa de transformação através de 6 capítulos 
            fundamentais para sua evolução pessoal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-lg shadow-lg border border-magenta/30 hover:border-neonPurple/60 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-neonPurple/10 p-2 rounded-full">
                  <BookOpenIcon className="h-6 w-6 text-neonPurple" />
                </div>
                <h3 className="text-xl font-bold text-magenta">{chapter.title}</h3>
              </div>
              <p className="text-white/80">{chapter.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content; 