import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Content from './components/Content';
import Author from './components/Author';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
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

export default App; 