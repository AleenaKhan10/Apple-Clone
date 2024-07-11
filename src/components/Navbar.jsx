import React from 'react'
import { appleImg, searchImg, bagImg} from '../utils';
import {navLists} from '../constants'

const Navbar = () => {
  return (
    <header className='w-full py-5 px-5 sm:px-10 flex justify-between items-center'>
        <nav className='flex w-full screem-max-width'> 
            <img src={appleImg} alt="Apple" width={14} height={18}/>
            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((nav)=> 
                 <div key={nav} className='text-sm px-5 cursor-pointer text-gray hover:text-white transition-all'> {nav} </div>
                )}
            </div>
            <div className='flex max-sm:justify-end max-sm:flex-1 gap-7 items-baseline'>
                <img src={searchImg} alt="search" width={18} height={18} />
                <img src={bagImg} alt="bag" width={18} height={18} />
            </div>
        </nav>
    </header>
  )
}

export default Navbar