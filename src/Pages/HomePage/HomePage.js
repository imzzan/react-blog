import React from 'react';
import { BlogItem } from '../../Component/Molekul';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div className=' mt-10 ml-10'>
        <Link to='/home/createblog'><button className=' bg-blue-600 text-white py-2 md:px-5 px-3 md:text-sm text-[14px] rounded-sm'>Create New Blog</button></Link>
      </div>
      <div className=' flex flex-wrap justify-center'>
        <BlogItem/>
        <BlogItem/>
        <BlogItem/>
      </div>
    </div>
  )
}

export default HomePage