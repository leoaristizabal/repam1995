import React from 'react'
import { CiCamera, CiHeart } from 'react-icons/ci';
import { IoVideocamOutline } from 'react-icons/io5';
import { LiaDollarSignSolid } from 'react-icons/lia';
import { MdArrowRightAlt, MdLocationPin, MdPeopleOutline, MdStar } from 'react-icons/md';
import { WiTime3 } from 'react-icons/wi';
import Carousel from 'react-multi-carousel';


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


const Product = ({ image, name }) => {
    return (
        <div>
            <div className='bg-blue1 relative overflow-hidden rounded-t-lg'>
                <img className="rounded-t-lg hoverImg" src={image} alt='' />
                <div className='absolute flex justify-between top-4 left-4 right-4'>
                    <p className='bg-[#14b8c3] rounded-md px-4 py-1 text-white text-sm'>Catalogo</p>
                    <button className='bg-[#000006] rounded-md pl-1 '>
                        <CiHeart className='text-gray-800 text-xl' />
                    </button>
                </div>
            </div>
            <div className='border border-[#ebe6de] rounded-b-lg relative'>
                <div className='absolute w-full h-5 -top-5 bg-white rounded-t-[20px]'></div>
                <div className='px-6'>
                    <div className='flex items-center gap-4 justify-between relative'>
                        <span className='flex justify-center'>
                            {[...Array(5)].map((_, index) => (
                                <MdStar key={index} className='text-orange1 text-xl' />
                            ))}
                        </span>
                        <span className='flex gap-2 shadow px-4 py-1 absolute -top-8 right-0 z-10 bg-white rounded-lg'>
                            <div className='relative'>
                                <CiCamera size={24} />
                                <button className='bg-blue1 text-xs rounded-full text-white w-4 h-4 flex items-center justify-center absolute top-0 right-0'>5</button>
                            </div>
                            <IoVideocamOutline size={24} />
                        </span>
                    </div>
                    <h4 className='text-xl font-semibold py-2 hover:text-blue1'>{name}</h4>
                    <span className='flex items-center gap-2'>
                        <MdLocationPin className='text-blue1 text-xl' />
                        <p className='text-gray-800 text-sm font-semibold'>Termo Acero 16 Oz</p>
                    </span>
                    <span className='text-gray-600 flex py-4'>
                        <LiaDollarSignSolid className='text-blue1 text-xl' />
                        <p className='text-blue1'>$14.99</p>
                    </span>
                    <div className='flex justify-between border-t py-2'>
                        <div className='flex items-center gap-4'>
                            <span className='flex items-center gap-1'>
                                <WiTime3 className='text-blue1 ' /> 750ml
                            </span>
                            <span className='flex items-center gap-1'>
                                <MdPeopleOutline className='text-blue1 ' />50
                            </span>
                        </div>
                        <a href="#" className='flex items-center gap-2 text-sm mt-2'>Ver Mas <MdArrowRightAlt /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Products = ({ }) => {
    return (
        <section className='container max-w-[1320px] mx-auto py-12' >
            <div className="relative w-fit px-8 py-2 flex items-center justify-center">
                <span className='bg-orange1 rounded-md bg-opacity-25 absolute w-full h-full z-10'>
                </span>
                <h6 className='text-gray-600 relative font-semibold'>Catalogo</h6>
            </div>
            <h3 className='lg:text-5xl text-3xl font-bold pb-8 py-4'>Nuestros Productos</h3>
            <div>
                <Carousel 
                responsive={responsives}
                infinite 
                autoPlay= {true}
                itemClass='px-2 pb-4'>

                <Product image='image1.jpeg' alt="Termo Acero 16 Oz " />
                <Product image='image2.jpeg' alt="Termo Acero 16 Oz " />
                <Product image='image3.jpeg' alt="Termo Acero 16 Oz " />
                <Product image='image4.jpeg' alt="Termo Acero 16 Oz " />
                </Carousel>

            </div>
        </section>
    )
}

export default Products