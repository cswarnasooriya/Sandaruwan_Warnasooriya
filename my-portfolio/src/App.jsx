import Aos from 'aos';
import { useEffect } from 'react';
import './App.css'
import Footer from './assets/Components/Footer/Footer'
import Header from './assets/Components/Header/Header'
import Hero from './assets/Components/UI/Hero';
import Services from './assets/Components/UI/Services';
import Projects from './assets/Components/UI/Projects';
import Contact from './assets/Components/UI/Contact';

function App() {

  useEffect(()=>{
    Aos.init();
  }, []);


  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
