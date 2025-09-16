import React from 'react';
import TypewriterComponent from 'typewriter-effect';

export const Slogan = {
  slogan: [
    "¡Todo lo que necesitas, en un solo lugar!",
    "Variedad, calidad y servicio.",
    "Servicios que ayudan. Productos que responden.",
    "!Cuando lo necesitas, lo tenemos.!"
  ]
}

const Home = () => {
  return (
    <div>
      <section className='relative top-0 h-[110vh]' data-aos='fade-down' data-aos-delay="300" data-aos-duration='3000' > {/** */}
        <video className='absolute z-0 h-full w-full object-cover' src='./videobg1111.mp4' autoPlay loop muted></video>
        <div className='flex flex-col justify-center items-center relative z-10 lg:h-full h-screen max-w-[1320px] px-6 xl:pt-0 pt-16 mx-auto '>
          <img src="./logoHOME.png" className=' md:w-45  xl:max-w-[470px] max-w-[370px]' alt="" />
          {/*<span className='lg:text-xl text-sm text-white text-center py-2 pb-8 px-8 font-bold relative'>
          ¡Todo lo que necesitas, en un solo lugar!
            
          </span>/*}
          {/*}  <p className='text-black text-center text-2xl my-8'>Mira nuestros productos mas vendidos!</p>*/}

          <div className="text-white text-center uppercase font-bold lg:text-lg pt-0 pb-0">
            <TypewriterComponent options={{
              strings: Slogan.slogan,
              autoStart: true,
              loop: true,
            }}
            />
          </div>
          
        </div>

      </section>
    </div>
  );
};

export default Home;
