import './index.css'
import Header from './components/Header'
import Home from './components/Home'
import { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Footer from './components/Footer'
import HomeCarrusel from './components/HomeCarrusel'
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
      <main className='  bg-blue1 bg-opacity-10 bg-center'>
        <Header />
        <Home />
        <HomeCarrusel />

        <Nosotros />
      </main>
      <FloatingWhatsApp
        phoneNumber='584245989755'
        accountName='Representaciones Am 1995 C.A.'
        {/*avatar='/logorep.png'*/}
        statusMessage='En Línea'
        placeholder='Mensaje'
        chatMessage='Hola! Gracias por escribirnos, ¿Cómo podemos ayudarte?'
        
      />
      <Footer />

    </>
  )
}

export default App
