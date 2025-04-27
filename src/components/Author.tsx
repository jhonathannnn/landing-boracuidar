import { motion } from 'framer-motion';
import { UserIcon } from '@heroicons/react/24/outline';
import capaLivro from '../assets/capa.png';
import autorFoto from '../assets/autor.png';

const Author = () => {
  return (
    <section id="author" className="py-20 bg-white text-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Sobre o Autor
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-56 h-56 rounded-full bg-primary/10 blur-2xl" style={{ zIndex: 0 }}></span>
                <img
                  src={autorFoto}
                  alt="Foto do autor Jhonathan Santos"
                  className="rounded-full shadow-2xl w-48 h-48 object-cover bg-white mx-auto relative z-10"
                />
              </div>
            </div>
            <div className="max-w-xl text-left">
              <h3 className="text-2xl font-bold text-primary mb-2">Jhonathan Santos</h3>
              <p className="text-black/80 mb-4">
                Engenheiro, empreendedor e escritor apaixonado por transformação digital, tecnologia e sustentabilidade. Fundador de empresas inovadoras nos setores de energia e tecnologia, destaca-se por promover o princípio do <span className="text-primary font-semibold">básico bem feito</span>, impulsionando inovação e impacto real.
              </p>
              <p className="text-black/70">
                Sua trajetória é marcada pela busca constante de soluções práticas e pelo compromisso em transformar desafios em oportunidades, sempre com foco em resultados e propósito.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bloco dos 5 Pilares com numerais em madeira */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Os 5 Pilares do Método GoFive</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {/* I */}
            <div>
              <div className="flex justify-center mb-2 h-8 items-end">
                <span className="step-bar" style={{ height: 32, width: 8, display: 'inline-block' }} />
              </div>
              <span className="block font-semibold mb-1">Idealize</span>
              <span className="text-black/70 text-sm">Sonhe grande e defina objetivos claros.</span>
            </div>
            {/* II */}
            <div>
              <div className="flex justify-center mb-2 h-8 items-end gap-1">
                <span className="step-bar" style={{ height: 32, width: 8, display: 'inline-block' }} />
                <span className="step-bar" style={{ height: 32, width: 8, display: 'inline-block' }} />
              </div>
              <span className="block font-semibold mb-1">Persista</span>
              <span className="text-black/70 text-sm">Supere desafios com resiliência e consistência.</span>
            </div>
            {/* III */}
            <div>
              <div className="flex justify-center mb-2 h-8 items-end gap-1">
                <span className="step-bar" style={{ height: 32, width: 8, display: 'inline-block' }} />
                <span className="step-bar" style={{ height: 32, width: 8, display: 'inline-block' }} />
                <span className="step-bar" style={{ height: 32, width: 8, display: 'inline-block' }} />
              </div>
              <span className="block font-semibold mb-1">Conecte-se</span>
              <span className="text-black/70 text-sm">Construa redes e colabore para crescer.</span>
            </div>
            {/* IV */}
            <div>
              <div className="flex justify-center mb-2 h-8 items-end gap-2 relative" style={{ minWidth: 48 }}>
                {/* Barra vertical (I) */}
                <span
                  className="step-bar"
                  style={{
                    height: 32,
                    width: 8,
                    display: 'inline-block',
                    position: 'relative',
                    left: 0,
                    zIndex: 2,
                  }}
                />
                {/* Barras inclinadas (V) */}
                <span
                  className="step-bar"
                  style={{
                    height: 32,
                    width: 8,
                    display: 'inline-block',
                    transform: 'rotate(-25deg)',
                    marginLeft: 10,
                    marginRight: 2,
                    zIndex: 1,
                  }}
                />
                <span
                  className="step-bar"
                  style={{
                    height: 32,
                    width: 8,
                    display: 'inline-block',
                    transform: 'rotate(25deg)',
                    marginLeft: 2,
                    marginRight: 10,
                    zIndex: 1,
                  }}
                />
              </div>
              <span className="block font-semibold mb-1">Evolua</span>
              <span className="text-black/70 text-sm">Aprenda continuamente e adapte-se.</span>
            </div>
            {/* V */}
            <div>
              <div className="flex justify-center mb-2 h-8 items-end gap-1">
                <span className="step-bar -rotate-45" style={{ height: 32, width: 8, display: 'inline-block' }} />
                <span className="step-bar rotate-45" style={{ height: 32, width: 8, display: 'inline-block' }} />
              </div>
              <span className="block font-semibold mb-1">Não pare</span>
              <span className="text-black/70 text-sm">Aja com propósito e nunca desista dos seus sonhos.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Author; 