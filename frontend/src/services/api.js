import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const enhanceContent = async (content) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ai-enhance`, {
      content: content
      
    });
    console.log('successfully enhanced')
    return response.data.enhanced_content  ;
  } catch (error) {
    console.error('AI enhancement error:', error);
    return content;
  }
};

export const saveResume = async (resumeData) => {
  try {
    await axios.post(`${API_BASE_URL}/save-resume`, resumeData);
    console.log('saved')
  } catch (error) {
    console.error('Save resume error:', error);
  }
};

export const getResume = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/get-resume`);
    return response.data;
  } catch (error) {
    console.error('Load resume error:', error);
    return null;
  }
};