import Aos from 'aos';
import { useEffect } from 'react'
import './App.css'
// import Footer from './assets/Components/Footer/Footer'
import Header from './assets/Components/Header/Header'

function App() {

  useEffect(()=>{
    Aos.init();
  }, []);


  return (
    <>
      <Header/>
      {/* <Footer/> */}
    </>
  )
}

export default App
