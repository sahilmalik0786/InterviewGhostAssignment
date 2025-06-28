import  { useContext } from 'react'

import ResumeUploader from './components/ResumeUploader'
import Previewer from './components/Previewer'

import { pdfContext } from './context/PdfContext'

const App = () => {
const [resume , setResume] = useContext(pdfContext)
const sections = ['summary' , 'experience', 'education', 'skills']
  const onupload = (dummyResume)=>{
    setResume(dummyResume)
  }
  
  return (
    <div className='w-screen h-screen md:flex-row flex-col  flex items-center justify-center font-mono ' >
    <ResumeUploader onupload={onupload}/>
    {/* <FileEditor /> */}
  
    <Previewer section={sections} />
    </div>
    
  )
}

export default App
