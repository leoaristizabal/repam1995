import React from 'react';
import Buscador from './Buscador';
import HomeCarrusel from './HomeCarrusel';
import Actividades from './Actividades';
import Nosotros from './Nosotros';

const Home = () => {
  return (
    <div>
      <section className='relative top-0 h-[110vh]' data-aos='fade-down' data-aos-delay="300" data-aos-duration='3000' > {/** */}
        <video className='absolute z-0 h-full w-full object-cover' src='/videobg11.mp4' autoPlay loop muted></video>
        <div className='flex flex-col justify-center items-center relative z-10 lg:h-full h-screen max-w-[1320px] px-6 xl:pt-0 pt-16 mx-auto '>
          <img src="./logoblanco.svg" className=' md:w-45 xl:max-w-[280px] max-w-[200px]' alt="" />
          <span className='lg:text-xl text-sm text-white text-center py-2 pb-8 px-8 font-bold relative'>
            !Te acompaña en todas tus aventuras!
          </span>
        {/*}  <p className='text-black text-center text-2xl my-8'>Mira nuestros productos mas vendidos!</p>*/}
          <Buscador/>
          <div className="text-orange1 text-opacity-80 text-center font-bold lg:text-lg pt-12 pb-6">La mayor diferencia con la mejor calidad!</div>
          <img src="/heartharrow.png" className='lg:block w-32 hidden lg:my-0 -ml-9' alt="" />
        </div>
      <HomeCarrusel/>
      <Nosotros/>
      </section>
    </div>
  );
};

export default Home;
