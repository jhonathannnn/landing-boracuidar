const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
const app = express();

// Substitua pela sua chave secreta do Stripe
const stripe = Stripe('sk_test_SUA_CHAVE_SECRETA');

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'brl',
          product_data: {
            name: 'Livro Bora Cuidar',
            images: ['https://seusite.com/capa.png'], // URL da capa do livro
          },
          unit_amount: 5990, // R$ 59,90 em centavos
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'http://localhost:3000/sucesso',
      cancel_url: 'http://localhost:3000/checkout',
    });
    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(4242, () => console.log('Servidor Stripe rodando na porta 4242')); 