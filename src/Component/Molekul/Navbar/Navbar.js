import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [nav, setNav] = useState(true);
  
  const handleClick = () => {
  setNav(!nav)
  }

  return (
    <div className=' flex justify-between items-center h-16 md:px-24 px-8 bg-blue-600'>
        <h1 className=' font-bold text-white text-xl'>MyBlog</h1>
        <ul className='hidden gap-6 font-bold text-sm cursor-pointer text-white md:flex'>
            <Link to='/'><li>Home</li></Link>
            <li>About Us</li>
            <Link to='/register'><li>Sign In</li></Link>
            <Link to='/login'><li>Login</li></Link>
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
            <li className='border-b border-white text-center w-[100%] py-4'>About Us</li>
            <li className='border-b border-white text-center w-[100%] py-4'>Sign In</li>
            <li className='border-b border-white text-center w-[100%] py-4'>Login</li>
        </ul>
    </div>
  )
}

export default Navbar