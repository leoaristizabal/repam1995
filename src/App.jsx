import './index.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";

function App() {
  useEffect(()=> {
    AOS.init({
      duration:1500,
  })
  }
  )
  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
