import axios from 'axios';

const API_URL = 'http://localhost:5000/api/translate';

const translateText = async (text, targetLanguage) => {
  const response = await axios.post(API_URL, { text, targetLanguage });
  return response.data.translatedText;
};

export { translateText };
