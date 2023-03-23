import Head from 'next/head';
import Home from '@/components/Home';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const App = () => {
  return (
    <>
      <Head>
        <title>AC Government Contracting</title>
      </Head>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;