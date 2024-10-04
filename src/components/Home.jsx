import React from 'react';
import Buscador from './Buscador';
import TypewriterComponent from 'typewriter-effect';

export const Slogan = {
  slogan: [
    "¡La mayor diferencia con la mejor calidad!",
    "¡Tu compañía Ecochic en todos tus momentos",
    "El plan lo pones tu, nosotros el estilo",
    "En todas tus aventuras!"
  ]
}

const Home = () => {
  return (
    <div>
      <section className='relative top-0 h-[110vh]' data-aos='fade-down' data-aos-delay="300" data-aos-duration='3000' > {/** */}
        <video className='absolute z-0 h-full w-full object-cover' src='/videobg11.mp4' autoPlay loop muted></video>
        <div className='flex flex-col justify-center items-center relative z-10 lg:h-full h-screen max-w-[1320px] px-6 xl:pt-0 pt-16 mx-auto '>
          <img src="./logoblanco.svg" className=' md:w-45 xl:max-w-[280px] max-w-[200px]' alt="" />
          <span className='lg:text-xl text-sm text-white text-center py-2 pb-8 px-8 font-bold relative'>
          ¡Te acompañamos en todas tus aventuras!
            
          </span>
          {/*}  <p className='text-black text-center text-2xl my-8'>Mira nuestros productos mas vendidos!</p>*/}
          <Buscador />
          <div className="text-white text-center font-bold lg:text-lg pt-8 pb-0">
          <TypewriterComponent options={{
              strings: Slogan.slogan,
              autoStart: true,
              loop: true,
            }}
            />
            </div>
          <img src="/heartharrow.png" className='lg:block hidden w-32 mt-0 lg:mt-2 pb-0 mb-0 -ml-18' alt="" />
        </div>

      </section>
    </div>
  );
};

export default Home;
