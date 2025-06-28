import  { useContext, useState } from 'react'

import ResumeUploader from './components/ResumeUploader'
import Previewer from './components/Previewer'

import { pdfContext } from './context/PdfContext'

const App = () => {
const [resume , setResume] = useContext(pdfContext)
const [isUpload , setIsUpload] = useState(false)
const sections = ['summary' , 'experience', 'education', 'skills']
  const onupload = (dummyResume , da)=>{
    setResume(dummyResume)
    setIsUpload(da)
  }
  
  return (
    <div className='w-screen h-screen md:flex-row flex-col bg-pink-300 flex items-center justify-center font-mono ' >
    <ResumeUploader onupload={onupload}/>
    {/* <FileEditor /> */}
   {isUpload && <Previewer section={sections} />}
    
    </div>
    
  )
}

export default App
