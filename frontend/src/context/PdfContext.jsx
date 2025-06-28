import React, {  createContext, useEffect, useState } from 'react'

export const pdfContext = createContext()

const PdfContext = (props) => {
    const[resume , setResume] = useState({
    personal: { name: '', email: '', phone: '' },
    summary: '',
    experience: [],
    education: [],
    skills: []
  })
  
  return (
    <pdfContext.Provider value={[resume , setResume]} >
      {props.children}
    </pdfContext.Provider>
  )
}

export default PdfContext