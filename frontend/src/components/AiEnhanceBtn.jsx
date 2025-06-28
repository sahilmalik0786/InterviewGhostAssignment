import React, { useState } from 'react';
import { enhanceContent } from '../services/api';

const AIEnhanceBtn = ({ content, onEnhanced }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleEnhance = async () => {
    setIsLoading(true);
    try {
      const enhanced = await enhanceContent(content);
      onEnhanced(enhanced);
    } catch (error) {
      console.error('Enhancement failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      type="button" 
      onClick={handleEnhance}
      disabled={isLoading}
      className="ai-enhance-btn  bg-purple-400 px-2 py-1 rounded-md cursor-pointer shadow-lg/5 hover:shadow-lg/10 active:scale-95 transition-all not-md:w-30 not-md:h-6 h-8 not-md:text-center truncate "
    >
      {isLoading ? 'Enhancing...' : 'Enhance with AI'}
    </button>
  );
};

export default AIEnhanceBtn;