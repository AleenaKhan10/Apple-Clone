import React from 'react'
import { appleImg } from '../utils';

const Navbar = () => {
  return (
    <header>
        <nav> 
            <img src={appleImg} alt="Apple" width={14} height={18}/>
            <div>
                {['Phone', 'Macbooks', 'Tablet']}
            </div>
        </nav>
    </header>
  )
}

export default Navbar