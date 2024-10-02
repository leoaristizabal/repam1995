import './index.css'
import Header from './components/Header'
import Home from './components/Home'
import { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Products from './components/Products'
import Aliados from './components/Aliados'
import Footer from './components/Footer'


function App() {
  useEffect(()=> {
    AOS.init({
      duration:1500,
  })
  }
  )
  return (
    <>
    <main>
      <Header/>
      <Home/> 
      <FloatingWhatsApp
     phoneNumber='50762748970'
     accountName='Awuas Ve'
     avatar='/logowa.svg'
     statusMessage='En Línea'
     placeholder='Mensaje'
     chatMessage='Hola! Gracias por escribir a Awuas, ¿Cómo podemos ayudarte?'
   />
    </main>
    </>
  )
}

export default App
