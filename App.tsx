
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Products } from './components/Products.tsx';
import { TechnicalSpecs } from './components/TechnicalSpecs.tsx';
import { Cases } from './components/Cases.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'cases', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        <Hero id="home" />
        <About id="about" />
        <Products id="products" />
        <TechnicalSpecs />
        <Cases id="cases" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default App;
