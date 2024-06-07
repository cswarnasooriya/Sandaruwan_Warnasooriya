import Aos from 'aos';
import { useEffect } from 'react';
import './App.css'
// import Footer from './assets/Components/Footer/Footer'
import Header from './assets/Components/Header/Header'
import Hero from './assets/Components/UI/Hero';
import Services from './assets/Components/UI/Services';

function App() {

  useEffect(()=>{
    Aos.init();
  }, []);


  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      {/* <Footer/> */}
    </>
  )
}

export default App
