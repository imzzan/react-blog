import React from 'react';
import { Navbar, Footer, HalamanDepan } from '../../Component/Molekul';

const MainApp = () => {
  return (
    <div className=' flex flex-col md:h-screen h-auto'>
        <Navbar/>
        <div className='flex-1'>
        <HalamanDepan/>
        </div>
        <Footer/>
    </div>
  )
}

export default MainApp