import { useState } from 'react';
import capaLivro from '../assets/capa.png';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({ ...dadosDoPedido }) // Adapte se quiser enviar dados pessoais
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError('Erro ao criar sessão de pagamento.');
      }
    } catch (err: any) {
      setError('Erro ao conectar com o servidor de pagamento.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 bg-white rounded-2xl shadow-lg p-8">
        {/* Formulário */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="inline-block bg-primary/10 p-2 rounded-full">
              {/* Ícone de usuário */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118A7.5 7.5 0 0112 15.75a7.5 7.5 0 017.5 4.368" /></svg>
            </span>
            Dados pessoais
          </h2>
          <form className="space-y-6" onSubmit={handleCheckout}>
            {/* País */}
            <div>
              <label className="block text-sm font-semibold mb-1">País</label>
              <input type="text" value="Brasil" readOnly className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-gray-100" />
            </div>
            {/* Nome completo */}
            <div>
              <label className="block text-sm font-semibold mb-1">Nome completo</label>
              <input type="text" placeholder="Nome completo" className="w-full rounded-lg border border-gray-300 px-4 py-3" />
            </div>
            {/* E-mail e confirmação */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">E-mail</label>
                <input type="email" placeholder="E-mail" className="w-full rounded-lg border border-gray-300 px-4 py-3" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Confirme seu e-mail</label>
                <input type="email" placeholder="Confirme seu e-mail" className="w-full rounded-lg border border-gray-300 px-4 py-3" />
              </div>
            </div>
            {/* Telefone */}
            <div>
              <label className="block text-sm font-semibold mb-1">Número de Telefone</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-lg bg-primary/10 text-primary font-bold border border-r-0 border-gray-300">+55</span>
                <input type="tel" placeholder="Número de Telefone" className="w-full rounded-r-lg border border-gray-300 px-4 py-3" />
              </div>
            </div>
            {error && <div className="text-red-600 mb-2">{error}</div>}
            <button type="submit" className="w-full mt-8 py-4 rounded-full bg-primary text-white text-lg font-bold shadow-xl hover:bg-white hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" disabled={loading}>
              {loading ? 'Processando...' : 'Finalizar Compra'}
            </button>
          </form>
        </div>
        {/* Resumo do pedido */}
        <div className="bg-gray-50 rounded-xl p-6 shadow flex flex-col items-center">
          <img src={capaLivro} alt="Capa do livro Bora Cuidar" className="w-24 h-32 rounded-lg mb-4" />
          <h3 className="font-bold text-lg mb-2">Bora Cuidar</h3>
          <p className="text-sm text-gray-700 mb-4">Livro físico + digital</p>
          <div className="text-center mb-4">
            <span className="block text-lg text-red-600 line-through">R$ 97,00</span>
            <span className="block text-2xl font-bold text-primary">3x de R$ 19,96</span>
            <span className="block text-sm text-gray-700">ou R$ 59,90 à vista</span>
          </div>
          <div className="text-xs text-gray-500 mb-2">Suporte: suporte@boracuidar.com.br</div>
          <div className="text-xs text-gray-400">Oferecido por: MLD 01 TREINAMENTOS LTDA</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 