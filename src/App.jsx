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
import HomeCarrusel from './components/HomeCarrusel'
import Actividades from './components/Actividades'
import Nosotros from './components/Nosotros'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    })
  }
  )
  return (
    <>
      <main className=' bg-[url(/patronbg4.svg)] bg-orange1 bg-opacity-10 bg-center'>
        <Header />
        <Home />
        <HomeCarrusel />
        <Actividades />

        <Nosotros />
        <Products />
      </main>
      <Aliados />
      <FloatingWhatsApp
        phoneNumber='50762748970'
        accountName='Awuas Ve'
        avatar='/logowa.svg'
        statusMessage='En Línea'
        placeholder='Mensaje'
        chatMessage='Hola! Gracias por escribir a Awuas, ¿Cómo podemos ayudarte?'
        
      />
      <Footer />

    </>
  )
}

export default App
