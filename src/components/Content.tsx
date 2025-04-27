import { motion } from 'framer-motion';
import { BookOpenIcon } from '@heroicons/react/24/outline';

const Content = () => {
  const chapters = [
    {
      title: 'Capítulo 1: Autoconhecimento',
      description: 'Entenda a importância de se conhecer e como isso impacta sua vida.',
    },
    {
      title: 'Capítulo 2: Hábitos Saudáveis',
      description: 'Aprenda a desenvolver e manter hábitos que transformam sua vida.',
    },
    {
      title: 'Capítulo 3: Equilíbrio Emocional',
      description: 'Descubra estratégias para manter o equilíbrio emocional no dia a dia.',
    },
    {
      title: 'Capítulo 4: Saúde Física',
      description: 'Conheça práticas essenciais para cuidar do seu corpo.',
    },
    {
      title: 'Capítulo 5: Relacionamentos',
      description: 'Aprenda a construir e manter relacionamentos saudáveis.',
    },
    {
      title: 'Capítulo 6: Propósito',
      description: 'Encontre seu propósito e viva uma vida mais significativa.',
    },
  ];

  return (
    <section id="content" className="py-20 bg-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conteúdo do Livro
          </h2>
          <p className="text-lg text-dark/80 max-w-3xl mx-auto">
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
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <BookOpenIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{chapter.title}</h3>
              </div>
              <p className="text-dark/80">{chapter.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content; 