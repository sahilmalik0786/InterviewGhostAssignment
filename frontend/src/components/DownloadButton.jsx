import React from 'react';

const DownloadButton = ({ data }) => {
  const handleDownload = () => {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button type="button" onClick={handleDownload} className="download-btn bg-purple-400 px-2 py-1 rounded-md cursor-pointer shadow-lg/5 hover:shadow-lg/10 active:scale-95 transition-all not-md:w-30 not-md:h-6 not-md:text-center truncate">
      Download Resume (JSON)
    </button>
  );
};

export default DownloadButton;