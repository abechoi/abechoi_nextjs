import React, { useEffect, useRef } from 'react';
import Home from '@/components/Home';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import useScrollSpy from '@/hooks/useScrollSpy';

const App = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const activeSection = useScrollSpy([homeRef, servicesRef, aboutRef, contactRef]);

  useEffect(() => {
    switch (activeSection) {
      case 'services':
        document.title = 'AC | Services';
        break;
      case 'about':
        document.title = 'AC | About';
        break;
      case 'contact':
        document.title = 'AC | Contact';
        break;
      default:
        document.title = 'AC | Government Contracting';
    }
  }, [activeSection]);

  return (
    <>
      <Navbar />
      <Home ref={homeRef} />
      <Services ref={servicesRef} />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
};

export default App;
