import React from 'react';
import Video from '../assets/videobg11.mp4';
import Buscador from './Buscador';

const Home = () => {
  return (
    <div>
      <section className='relative top-0 bg-black lg:h-[100vh]' > {/**data-aos='fade-down' data-aos-delay="300" data-aos-duration='3000' */}
        <video className='absolute z-0 h-full w-full object-cover' src={Video} autoPlay loop muted></video>
        <div className='flex flex-col justify-center items-center relative z-10 lg:h-full h-screen max-w-[1320px] px-6 lg:pt-0 pt-0 mx-auto '>
          <img src="./logoblanco.svg" className=' w-45 max-w-[260px]' alt="" />
          <span className='lg:text-3xl md:text-2xl text-xl text-white text-center py-2 pb-8 px-8 font-bold relative'>
            !Te acompaña en todas tus aventuras!
          </span>
        {/*}  <p className='text-black text-center text-2xl my-8'>Mira nuestros productos mas vendidos!</p>*/}
          <Buscador/>
          <img src="/.line-arrow.png" className='lg:block hidden my-4 -ml-96' alt="" />
          <div className="text-gray-600 font-semibold lg:text-1xl lg:py-0 py-4">Estamos contigo en:</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
