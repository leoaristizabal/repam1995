import React, { useState } from 'react';
import { FaBiking } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import { GiTennisRacket } from 'react-icons/gi';
import { LiaWarehouseSolid } from 'react-icons/lia';
import { RiPlanetLine } from 'react-icons/ri';
import { TbBeach } from 'react-icons/tb';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsives = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TiposAventuras = [
  { title: "Playa", icon: <TbBeach /> },
  { title: "Deportes", icon: <GiTennisRacket /> },
  { title: "Aventuras", icon: <LiaWarehouseSolid /> },
  { title: "Road", icon: <FaBiking /> },
  { title: "Sol", icon: <FaSun /> },
  { title: "Descubrir", icon: <RiPlanetLine /> },
];

const HomeCarrusel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAfterChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className='bg-blue1 bg-opacity-80 bg-[url(/paletabg.jpg)] bg-cover bg-center'>
      <div className='relative z-10 max-w-[1320px] px-6 mx-auto xl:-mt-28 -mt-12'>
        <Carousel 
          responsive={responsives} 
          infinite 
          autoPlay={true} 
          itemClass="px-2"
          afterChange={handleAfterChange}  // Usa afterChange para actualizar el slide actual
        >
          {TiposAventuras.map((item, index) => (
            <div key={index} className="group">
              <div className={`cursor-pointer p-8 rounded-lg flex flex-col justify-center items-start gap-4 ${
                currentSlide % TiposAventuras.length === index 
                  ? 'bg-blue1 bg-opacity-40 text-white' 
                  : 'bg-white text-blue1 group-hover:bg-blue1 group-hover:bg-opacity-40 group-hover:text-white'
              }`}>
                <p className={`font-bold text-lg ${
                  currentSlide % TiposAventuras.length === index
                    ? 'text-white'
                    : 'text-blue1 group-hover:text-white'
                }`}>
                  {item.title}
                </p>

                <span className={`text-6xl ${
                  currentSlide % TiposAventuras.length === index
                    ? 'text-white'
                    : 'text-blue1 group-hover:text-white'
                }`}>
                  {item.icon}
                </span>

                <p className={`${
                  currentSlide % TiposAventuras.length === index
                    ? 'text-white'
                    : 'text-blue1 group-hover:text-white'
                }`}>
                  Lorem ipsum dolor sit, amet consectetur
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HomeCarrusel;
