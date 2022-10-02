import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainApp, Register, LoginPage, HomePage, MainHome, CreateBlog, DetailBlog } from '../../Pages';

const RouteConfig = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainApp/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/home" element={<HomePage/>}>
                <Route path='/home' element={<MainHome/>}/>
                <Route path='/home/createblog' element={<CreateBlog/>}/>
                <Route path='/home/detailblog' element={<DetailBlog/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RouteConfig