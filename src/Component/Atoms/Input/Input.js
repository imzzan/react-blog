import React from 'react'

const Input = ({label, labelValue, ...rest}) => {
  return (
    <div>
        <label htmlFor={label} className=' block md:mb-2 mb-0 md:text-sm text-[15px]'>{labelValue} :</label>
        <input {...rest} className=' border-2 border-gray-500 rounded-lg w-[100%] px-3 py-1 text-[11px] md:text-sm'/>
    </div>
  )
}

export default Input