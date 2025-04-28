import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Content from './components/Content';
import Author from './components/Author';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Checkout from './pages/Checkout';
import Success from './pages/Success';

function Landing() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Content />
        <Author />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sucesso" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App; 