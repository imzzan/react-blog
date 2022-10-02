import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import { profile } from '../../../Asset';

const NavbarHome = () => {

  const [nav, setNav] = useState(true);
  
  const handleClick = () => {
  setNav(!nav)
  }

  return (
    <div className=' flex justify-between items-center h-16 md:px-24 px-8 bg-blue-600'>
        <img src={profile} alt="" className=' w-[50px] h-[50px] rounded-full my-5'/>
        <ul className='hidden gap-6 font-bold text-sm cursor-pointer text-white md:flex'>
            <li>Home</li>
            <li>Services</li>
            <li>Privacy</li>
            <li>Log Out</li>
        </ul>
        <div className=' block md:hidden cursor-pointer' onClick={handleClick}>
        {
          nav ? <AiOutlineMenu size={25}/> : <AiOutlineClose size={25}/>
        }
        </div>
        <ul className={nav ? 
        'fixed left-[-100%]' : 
        ' fixed top-0 left-0 w-[50%] h-full bg-blue-600 ease-in-out duration-500 text-white z-10 cursor-pointer'}>
            <h1 className=' font-bold text-white text-xl h-16 text-center py-6'>MyBlog</h1>
            <li className='border-y border-white text-center w-[100%] py-4'>Home</li>
            <li className='border-b border-white text-center w-[100%] py-4'>Services</li>
            <li className='border-b border-white text-center w-[100%] py-4'>Privacy</li>
            <li className='border-b border-white text-center w-[100%] py-4'>Log Out</li>
        </ul>
    </div>
  )
}

export default NavbarHome