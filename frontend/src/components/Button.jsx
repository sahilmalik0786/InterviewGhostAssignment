
import React from 'react'

const Button = ({children ,  type="button"}) => {
  return (
    <button className='bg-black text-white px-2 py-1 rounded-md md:text-lg text-sm shadow-md active:scale-95 transition-all capitalize' type={type}>{children}</button>
  )
}

export default Button