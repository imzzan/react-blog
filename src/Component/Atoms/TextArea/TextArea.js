import React from 'react'

const TextArea = (...rest) => {
  return (
    <div>
        <textarea className=' w-[100%] h-40 box-border rounded-lg outline-none border border-gray-500 h-16 p-2 text-sm'{...rest}></textarea>
    </div>
  )
}

export default TextArea