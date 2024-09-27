import React, { useState } from 'react'
import { BiCategory } from 'react-icons/bi';
import { FaPeopleCarry } from 'react-icons/fa'
import { ImPriceTags } from 'react-icons/im';
import { IoMdOptions } from 'react-icons/io';
import { MdFormatSize, MdSearch } from 'react-icons/md'

const Buscador = () => {
    const [price, setPrice] = useState(20);

    const handleChange = (event) => {
        setPrice(event.target.value);
    }
    return (
        <div className="bg-white bg-opacity-75 border-blue1 p-6 rounded-lg shadow-lg lg:flex item-center justify-between w-full">
            <div className="flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4">
                <BiCategory className='text-gray-400 text-3xl mr-2' />
                <div className="flex flex-col w-full">
                    <select name="" id="" className="focus:outline-none text-xs bg-white text-gray-400 bg-opacity-30 rounded">
                        <option value="">Producto</option>
                    </select>
                </div>
            </div>
            <div className="flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4">
                <MdFormatSize className='text-gray-400 text-3xl mr-2' />
                <div className="flex flex-col w-full">

                    <select name="" id="" className="focus:outline-none bg-white text-gray-400 text-xs bg-opacity-30 rounded">
                        <option value="">Tamaño</option>
                    </select>
                </div>
            </div>
            <div className="flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4">
                <ImPriceTags className='text-gray-400 text-3xl mr-2' />
                <div className="flex flex-col w-full">
                    <label className="text-xs text-gray-400" htmlFor="price">Precio: ${price}</label>
                    <input className="w-full appearance-none bg-white bg-opacity-40 h-2 rounded-lg cursor-pointer"
                        id="price"
                        type="range"
                        min="1"
                        max="100"
                        value={price}
                        onChange={handleChange}
                    />
                    <style jsx>{`
                            input[type='range']::-webkit-slider-thumb {
                            -webkit-appearance: none;
                            appearance: none;
                            width: 12px;
                            height: 12px;
                            border-radius: 50%;
                            background: #61CAC6; /* Color del pulgar */
                            }
                        `}</style>

                </div>
            </div>
            <div className="flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4">
                <FaPeopleCarry className='text-gray-400 text-3xl mr-2' />
                <div className="flex flex-col w-full">

                    <select name="" id="" className="focus:outline-none text-gray-400 text-xs bg-white bg-opacity-30 rounded">
                        <option value="">Size</option>
                    </select>
                </div>
            </div>
            
            <div className='flex items-center mr-4 lg:mt-0 mt-4'>
                <IoMdOptions className='lg:block hidden text-blue1 text-xl mr-2'/>
                <button className='bg-blue1 bg-opacity-85 text-white flex items-center justify-center gap-2 px-1.5 py-2 outline-none border-none rounded-lg font-semibold text-sm w-full'>
                    <MdSearch size={26}/> BUSCAR
                </button>
            </div>
        </div>
    )
}

export default Buscador