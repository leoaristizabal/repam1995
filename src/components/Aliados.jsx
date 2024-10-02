import React from 'react'
import Carousel from 'react-multi-carousel';
import Footer from './Footer';

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
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
const Aliados = () => {
    return (
        <section className=' max-w-[1320px] mx-auto pt-22'>
        <div className='py-16'>
            <div className='flex flex-col items-center'>
                <div className='relative w-fit px-8 py-2 flex items-center justify-center'>
                    <span className='bg-orange1 rounded-md bg-opacity-70 absolute w-full h-full '></span>
                    <h6 className='text-white relative font-semibold '>¿Dónde encontrar nuestros productos?</h6>
                </div>
                <h3 className='lg:text-5xl text-3xl font-bold pb-8 text-center py-4 '>Aliados Comerciales</h3>
            </div>
                <Carousel responsive={responsives} infinite autoPlay={true} itemClass='px-4'>
                    <div className='h-[298px] relative overflow-hidden cursor-pointer'>
                        <img src='/aliados1.jpg' className='rounded-lg h-full object-cover hoverImg' alt="" />
                    </div>
                    <div className='h-[298px] relative overflow-hidden cursor-pointer'>
                        <img src='/aliados2.jpg' className='rounded-lg h-full object-cover hoverImg' alt="" />
                    </div>
                    <div className='h-[298px] relative overflow-hidden cursor-pointer'>
                        <img src='/aliados3.jpg' className='rounded-lg h-full object-cover hoverImg' alt="" />
                    </div>
                    <div className='h-[298px] relative overflow-hidden cursor-pointer'>
                        <img src='/aliados4.jpg' className='rounded-lg h-full object-cover hoverImg' alt="" />
                    </div>
                    <div className='h-[298px] relative overflow-hidden cursor-pointer'>
                        <img src='/aliados5.jpg' className='rounded-lg h-full object-cover hoverImg' alt="" />
                    </div>
                </Carousel>
            </div>
            <Footer/>
        </section>
    )
}

export default Aliados