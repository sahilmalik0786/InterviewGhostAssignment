import React, { useContext } from 'react'
import FileEditor from './FileEditor'
import { pdfContext } from '../context/PdfContext'
import DownloadButton from './DownloadButton'

const Previewer = (items) => {
  const [resume ,setResume] = useContext(pdfContext)
  const {section} = items
    const addEntry = (sections) => {
    setResume(prev => ({
      ...prev,
      [sections]: [
        ...prev[sections],
        sections === 'skills' ? '' : { 
          id: Date.now(), 
          ...(sections === 'experience' ? 
            { company: '', role: '', duration: '' } : 
            { institution: '', degree: '', year: '' }
          )
        }
      ]
    }));
  };
   const handleSectionChange = (section, value) => {
    setResume(prev => ({ ...prev, [section]: value }));
  };
    const handlePersonalChange = (field, value) => {
    setResume(prev => ({
      ...prev,
      personal: { ...prev.personal, [field]: value }
    }));
  };

  return (
    <div className='md:w-1/2  bg-pink-300 md:border-l-2 p-4 h-full flex flex-col gap-10 overflow-auto relative'>

    <div
    className='w-full h-fit flex items-center justify-around'>
Previewer 
<DownloadButton data={resume} />
    </div>
           <div className="personal-info">
        <h2>Personal Information</h2>
        {Object.entries(resume.personal).map(([key, value]) => (
          <div key={key}>
            <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
            <input
              type="text"
              value={value}
              onChange={(e) => handlePersonalChange(key, e.target.value)}
            />
          </div>
        ))}
      </div>
       {section.map((section , key)=>{
            return <FileEditor section={section} key={key} data={resume[section]} onchange={(value) => handleSectionChange(section, value)} onAddEntry={()=>addEntry(section)}/>
        }) 
       }
      
        </div>
      
  )
}

export default Previewer