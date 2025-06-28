import React, {  useContext, useState } from 'react';
import AIEnhanceBtn from './AiEnhanceBtn';
import { pdfContext } from '../context/PdfContext';
// import AIEnhanceButton from './AIEnhanceButton';


const FileEditor = ({ 
  section, 
  data, 
  onchange, 
  onAddEntry, 
  onRemoveEntry 
}) => {
  const [resume , setResume] = useContext(pdfContext)
   const handleSectionChange = (section, value) => {
    setResume(prev => ({ ...prev, [section]: value }));
  };
    const handlePersonalChange = (field, value) => {
    setResume(prev => ({
      ...prev,
      personal: { ...prev.personal, [field]: value }
    }));
  };
  const handleInputChange = (e, field, index) => {
    const newValue = e.target.value;

    if (Array.isArray(data) && field === null) {
      // Handle skill
      
      const newData = [...data];
      newData[index] = newValue;
      onchange(newData);
      // console.log(jjs)
    } else if (typeof data === 'object') {
      // Handle object-based sections
     
      const newData = [...data];
      newData[index] = { ...newData[index], [field]: newValue };
      onchange(newData);
      
    } else {
      // Handle simple text (summary)
      onchange(newValue);

    }
  };

  const renderInputs = () => {
    if (section === 'skills') {
      return <div className='flex flex-col gap-5'>      
       {data.map((skill, index) => (
        <div key={index} className="skill-item px-2  flex w-fit py-1 bg-pink-400 rounded-md">
          <input
            type="text"
            value={skill}
            onChange={(e) => handleInputChange(e, null, index)}
          />
          <button type="button" onClick={() => onRemoveEntry(index)} className='bg-pink-500 rounded-md'>
            Remove
          </button>
        </div>

      ))}
      </div>

    }
    
    if (section === 'summary') {
      return (
        <div className="summary-section flex gap-5">
          <textarea
            value={data}
            onChange={(e) => handleSectionChange( section ,e.target.value)}
            rows={5}
            className='outline-0 bg-pink-400 p-1 rounded-md shadow'
          />
          <AIEnhanceBtn
            content={data} 
            onEnhanced={(enhanced) => onchange(enhanced)} 
          />
        </div>
      );
    }
    
    // Experience/Education sections
    return data.map((entry, index) => (
      <div key={entry.id} className="section-entry flex flex-col gap-3">
       
        {Object.keys(entry).map((field) => (
          field !== 'id' && (
            <div key={field}>
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
         
              <input
                type="text"
                value={entry[field]}
                onChange={(e) => handleInputChange(e, field, index)}
                className='outline-0 bg-pink-400 rounded-md p-1'
              />
            </div>
          )
        ))}
        <div className="entry-actions flex gap-20 ">
          <AIEnhanceBtn
            content={JSON.stringify(entry)} 
            onEnhanced={(enhanced) => {
              const newData = [...data];
              newData[index] = { ...newData[index], enhancednotes: enhanced };
              onchange(newData);
            }} 
          /> 
          <button type="button" onClick={() => onRemoveEntry(index)}>
            Remove 
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="section-editor">
      <h3>{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
      {renderInputs()}
      {(section === 'experience' || section === 'education' || section === 'skills') && (
        <button type="button" onClick={onAddEntry}>
          Add Entry
        </button>
      )}
    </div>
  );
};

export default FileEditor;