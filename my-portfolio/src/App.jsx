import Aos from 'aos';
import { useEffect } from 'react';
import './App.css'
// import Footer from './assets/Components/Footer/Footer'
import Header from './assets/Components/Header/Header'
import Hero from './assets/Components/UI/Hero';

function App() {

  useEffect(()=>{
    Aos.init();
  }, []);


  return (
    <>
      <Header/>
      <Hero/>
      {/* <Footer/> */}
    </>
  )
}

export default App
