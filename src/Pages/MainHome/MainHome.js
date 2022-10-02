import React from 'react';
import { NavbarHome, Footer } from '../../Component/Molekul';
import { Routes, Route } from 'react-router-dom';
import {CreateBlog, DetailBlog, HomePage} from '../../Pages';

const MainHome = () => {
  return (
    <div className=' flex flex-col h-screen'>
    <NavbarHome/>
    <div className='flex-1'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/createblog' element={<CreateBlog/>}/>
        <Route path='/detailblog' element={<DetailBlog/>}/>
      </Routes>
    </div>
    <Footer/>
</div>
  )
}

export default MainHome