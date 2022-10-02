import React from 'react';
import { gambar1 } from '../../../Asset';

const UploadImage = ({...rest}) => {
  return (
    <div className='my-5 mx-auto'>
        <img src={gambar1} alt="fff" className=' md:w-[200px] md:h-[200px] w-[100px] h-[100px] object-cover block md:mb-[16px] mb-[10px]'/>
        <input type="file" {...rest}/>
    </div>
  )
}

export default UploadImage