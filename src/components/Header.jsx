import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { BsPersonCircle } from 'react-icons/bs';

const Header = () => {
    const [dropdown, setDropdown] = useState(false);

    const showDropdown = () => {
        setDropdown(!dropdown);
    };
    return (
        <nav className='bg-blue1 bg-opacity-85 w-full h-24  flex flex-col justify-center items-center  fixed top-0 left-0 z-50'>

            <div className='container m-auto lg:px-3 w-full'>
                <div className='lg:w-full w-11/12 mx-auto h-full flex lg:justify-center items-center lg:gap-16 justify-between'>
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex items-center gap-x-2'>
                            <img className='w-20' src="./logoHOME.png" alt="LOGO REPRESENTACIONES AM 1995" />
                        </div>
                    </div>
                    <ul className='flex items-center xl:gap-12 gap-x-4 max-lg:hidden'>
                        <a href="#home" className='leading-normal no-underline text-white text-lg hover:text-hover'>Inicio</a>
                        <a href="#nosotros" className='leading-normal no-underline text-white text-lg hover:text-hover'>Nosotros</a>
                        <a href="#Productos" className='leading-normal no-underline text-white text-lg hover:text-hover'>Nuestros Productos</a>
                        <a href="#Contacto" className='leading-normal no-underline text-white text-lg hover:text-hover'>Contácto</a>

                    </ul>
                    <div className='flex gap-4 max-lg:hidden w-40 justify-center'>
                        <button className='rounded-full text-white w-10 h-10 flex items-center justify-center hover:text-hover'>
                            <CiSearch size={32} />
                        </button>
                        <button className='rounded-full text-white w-10 h-10 flex items-center justify-center hover:bg-white hover:text-blue1'>
                            <BsPersonCircle size={24} />
                        </button>
                    </div>
                    {dropdown ? (
                        
                        <div className='lg:hidden text-lg cursor-pointer text-white' onClick={showDropdown}>
                            <MdClose />
                        </div>
                    ) : (
                        <div className='lg:hidden text-xl cursor-pointer text-white' onClick={showDropdown}>
                            <HiMenuAlt3 />
                        </div>
                    )}
                </div>
                {dropdown && (
                    <div className='lg:hidden w-full fixed top-24 bg-blue1 bg-opacity-85 transition-all'>
                        <div className="w-full flex flex-col items-baseline gap-4">
                            <ul className='w-full flex flex-col justify-center'>
                                <a href="#home" className='hover:text-[16px] text-white px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[10px] border-0  lue1 border-solid'>Inicio</a>
                                <a href="#nosotros" className='hover:text-[16px] text-white px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[10px] border-0  lue1 border-solid'>Nosotros</a>
                                <a href="#Productos" className='hover:text-[16px] text-white px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[10px] border-0  lue1 border-solid'>Nuestros Productos</a>
                                <a href="#Contacto" className='hover:text-[16px] text-white px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[10px] border-0  lue1 border-solid'>Contácto</a>
                            </ul>

                        </div>
                    </div>
                )}
            </div>

        </nav>
    )
}

export default Header