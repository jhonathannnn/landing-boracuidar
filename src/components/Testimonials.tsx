import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Empresária',
      content: 'Este livro mudou minha vida! As práticas e reflexões me ajudaram a encontrar um equilíbrio que eu nunca pensei ser possível.',
      rating: 5,
    },
    {
      name: 'João Oliveira',
      role: 'Professor',
      content: 'Uma leitura transformadora. O autor consegue transmitir conceitos complexos de forma simples e prática.',
      rating: 5,
    },
    {
      name: 'Ana Costa',
      role: 'Psicóloga',
      content: 'Recomendo fortemente! O livro traz uma abordagem completa e acessível sobre desenvolvimento pessoal.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neonPurple">
            O que dizem os leitores
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Depoimentos de pessoas que transformaram suas vidas com o livro 
            "Bora Cuidar".
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-6 rounded-lg shadow-lg border border-neonPurple/30 hover:border-magenta/60 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-magenta" />
                ))}
              </div>
              <p className="text-white/80 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-neonPurple">{testimonial.name}</p>
                <p className="text-white/60">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 