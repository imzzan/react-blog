import React from 'react'

const Button = ({title, ...rest}) => {
  return (
    <button className=' bg-blue-600 block mx-auto text-white py-2 md:px-5 px-3 md:text-sm text-[14px] rounded-sm' {...rest}>{title}</button>
  )
}

export default Button