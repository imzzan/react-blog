import React from 'react';
import { UploadImage, TextArea, Gap, Button, Input } from '../../Component/Atoms';
import { Link } from 'react-router-dom';

const CreateBlog = () => {
  return (
    <div className=' mx-16'>
      <p className=' text-center font-bold mt-5'>Content Create Blog</p>
      <Input label='title' labelValue='Title'/>
      <UploadImage/>
      <TextArea placeholder='Buat Catatan Anda di sini...'/>
      <Gap height={5}/>
      <Button title='Save'/>
      <Link to='/home'><p className=' text-center text-gray-500 underline text-sm md:mt-10 mt-4'>Back to Home</p></Link>
    </div>
  )
}

export default CreateBlog