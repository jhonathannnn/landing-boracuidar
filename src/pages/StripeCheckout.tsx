import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_SUA_CHAVE_PUBLICA'); // Substitua pela sua chave pública do Stripe

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    // Crie o PaymentIntent no backend Ruby
    const response = await fetch('http://localhost:4242/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [{ id: 'livro-bora-cuidar', amount: 5990 }], // R$ 59,90 em centavos
      }),
    });
    const { clientSecret } = await response.json();

    // Confirme o pagamento no frontend
    const result = await stripe?.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements?.getElement(CardElement)!,
        billing_details: {
          name: 'Nome do Cliente', // Pegue do seu formulário se desejar
        },
      },
    });

    setLoading(false);

    if (result?.error) {
      setError(result.error.message || 'Erro ao processar pagamento.');
    } else if (result?.paymentIntent?.status === 'succeeded') {
      setSuccess(true);
    }
  };

  if (success) {
    return <div className="text-green-600 font-bold text-xl">Pagamento realizado com sucesso!</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg flex flex-col gap-6">
      <label className="font-semibold text-lg mb-2">Cartão de crédito</label>
      <div className="border rounded-lg p-4 mb-4">
        <CardElement options={{ style: { base: { fontSize: '18px' } } }} />
      </div>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full py-3 rounded-full bg-primary text-white text-lg font-bold shadow-xl hover:bg-white hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        {loading ? 'Processando...' : 'Pagar R$ 59,90'}
      </button>
    </form>
  );
};

export default function StripeCheckout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
} 