import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import capaLivro from '../assets/capa.png';

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full flex flex-col items-center">
        <CheckCircleIcon className="w-16 h-16 text-primary mb-4" />
        <h1 className="text-3xl font-bold text-primary mb-2 text-center">Compra realizada com sucesso!</h1>
        <p className="text-lg text-black/80 mb-4 text-center">Obrigado por adquirir o <span className="font-bold">Bora Cuidar</span>!</p>
        <img src={capaLivro} alt="Capa do livro Bora Cuidar" className="w-32 h-44 object-cover rounded-lg shadow mb-4" />
        <p className="text-black/70 text-center mb-4">
          Em breve você receberá um e-mail com todas as instruções de acesso ao seu produto.<br />
          <span className="font-semibold">Atenção:</span> Verifique também sua caixa de spam ou lixo eletrônico.
        </p>
        <p className="text-black/60 text-center mb-6 text-sm">
          Se tiver qualquer dúvida, entre em contato pelo e-mail <a href="mailto:suporte@boracuidar.com.br" className="text-primary underline">suporte@boracuidar.com.br</a>.
        </p>
        <Link to="/" className="w-full py-3 rounded-full bg-primary text-white text-lg font-bold shadow-xl hover:bg-white hover:text-primary transition-all duration-300 text-center">
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
};

export default Success; 