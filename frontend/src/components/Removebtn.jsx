import React from 'react'

export const Removebtn = ({index}) => {
  return (
   <button type="button" onClick={() => onRemoveEntry(index)} className='bg-pink-500 rounded-md px-1 active:scale-95 cursor-pointer  shadow-lg/10'>
            Remove
          </button>
  )
}
