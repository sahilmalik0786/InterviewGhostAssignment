import React, { useContext } from "react";
import FileEditor from "./FileEditor";
import { pdfContext } from "../context/PdfContext";
import DownloadButton from "./DownloadButton";
import { saveResume } from "../services/api";

const Previewer = (items) => {
  const [resume, setResume] = useContext(pdfContext);
  const { section } = items;
  const addEntry = (sections) => {
    setResume((prev) => ({
      ...prev,
      [sections]: [
        ...prev[sections],
        sections === "skills"
          ? ""
          : {
              id: Date.now(),
              ...(sections === "experience"
                ? { company: "", role: "", duration: "" }
                : { institution: "", degree: "", year: "" }),
            },
      ],
    }));
  };
  const handleSectionChange = (section, value) => {
    setResume((prev) => ({ ...prev, [section]: value }));
  };
  const handlePersonalChange = (field, value) => {
    setResume((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }));
  };

  return (
    <div className="md:w-1/2  bg-pink-300 md:border-l-2 p-4 h-full flex flex-col gap-10 overflow-auto pl-10 pb-10 relative">
      <div className="w-full h-fit flex items-center justify-around sticky inset-0 ">
        Previewer
        <div className="space-x-1 ml-20"><DownloadButton data={resume} /> 
          <button className="bg-purple-300 px-2 py-1 rounded-md cursor-pointer shadow-lg/5 hover:shadow-lg/10 active:scale-95 transition-all not-md:w-30 not-md:h-6 not-md:text-center truncate "
          onClick={()=>saveResume(resume)}
          >
            Save Resume
          </button>
        </div>
        
      </div>
      <div className="personal-info space-y-2">
        <h2 className="md:text-xl font-semibold">Personal Information</h2>
        {Object.entries(resume.personal).map(([key, value]) => (
          <div key={key} className="flex gap-10 items-center  w-96 justify-between">
            <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
            <input
              type="text"
              value={value}
              onChange={(e) => handlePersonalChange(key, e.target.value)}
              className="outline-0 bg-pink-400 rounded-md px-2 py-1 shadow-lg/10"
            />
            
          </div>
        ))}
      </div>
      {section.map((section, key) => {
        return (
          <FileEditor
            section={section}
            key={key}
            data={resume[section]}
            onchange={(value) => handleSectionChange(section, value)}
            onAddEntry={() => addEntry(section)}
          />
        );
      })}
    </div>
  );
};

export default Previewer;
