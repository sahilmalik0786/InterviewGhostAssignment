import  {  useState } from "react";


const ResumeUploader = ({onupload}) => {
 
  const [input, setInput] = useState();

  const handleInput = (e) => {
    const res = e.target.files[0];
 
    
    setInput(res.name);
    if(!res) return

    const reader = new FileReader();
    reader.onload = (e) => {
      const dummyResume = {
        personal: { name: "John doe", email: "john@doe.com", phone: "+1 333-233-112" },
        summary: "Experienced Frontend Developer with 3+ years of experience building scalable web applications...",
        experience: [{ id: 1, company: "TechCorp", role: "Frontend Developer", duration: "2 years" }],
        education: [{ id: 1, institution: "Stanford University", degree: "Computer Science", year: "2025" }],
        skills: ['JavaScript', 'React', 'Node.js', 'Python', 'HTML5',],
      };
     onupload(dummyResume , true)
    //  console.log('jh')
    };
    reader.readAsArrayBuffer(res)
  
  
  };
  return (
    <div className="bg-pink-300 p-2 w-full md:w-1/2  h-full flex ">
      <div className="w-10/12 mt-5 mx-auto h-80 bg-purple-400 rounded p-2 flex flex-col shadow-lg/10">
        <h1 className="text-3xl capitalize font-bold">upload your resume</h1>
        <span className="h-full bg-pink-400 flex items-center justify-center relative flex-col rounded-lg mt-4 ">
          <span className="h-1/2 flex items-end">
            <input
              type="file"
              id="resume"
              accept=".pdf , .docx"
              className=' before:bg-pink-500 before:text-white before:p-2 before:md:w-full before:md:h-full before:w-25  relative before:absolute before:rounded-xl before:content-["clickme--->"] before:flex before:items-center  before:cursor-pointer before:justify-center md:w-full w-25 md:h-10  before:inset-0 rounded-xl shadow-lg/5 hover:shadow-lg/10 transition-all before:text-xs before:md:text-lg'
              onChange={handleInput}
            />
          </span>
          <span className="h-1/2 flex justify-center w-6/12 ">
            <h3 className="mt-5 truncate text-shadow-xs text-shadow-purple-300 font-thin">
              {input}
            </h3>
          </span>
        </span>
        <span>{input && "its just a mock parsing "}</span>
      </div>
    </div>
  );
};

export default ResumeUploader;
