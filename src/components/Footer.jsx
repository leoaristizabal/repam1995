import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const Footer = () => {
  return (
    <footer className='bg-blue1 pt-44'>
      <div className='max-w-[1320px] mx-auto px-3'>
        <div className='lg:flex gap-16 pb-20'>
          <div className='flex justify-between items-center lg:pb pb-8'>
            <span className='glex gap-4 items-center lg:w-3/4'>
              <img height={80} width={80} src='/logoA.png' alt="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </span>
            <div className='lg:w-1/4 lg:flex hidden justify-end'>
              <button className='bg-orange1 rounded0full text-white w-16 h-16 flex items-center justify-center' >
                <GoArrowUpRight size={24} />
              </button>
            </div>
          </div>
          <div className='flex justify-between items-center lg:pb pb-8'>
            <span className='glex gap-4 items-center lg:w-3/4'>
              <img height={80} width={80} src='/logoA.png' alt="" />
              <p>Lorem ipsum dolor sit amet.</p>
            </span>
            <div className='lg:w-1/4 lg:flex hidden justify-end'>
              <button className='bg-orange1 rounded0full text-white w-16 h-16 flex items-center justify-center' >
                <GoArrowUpRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer