import React, { useState } from 'react';
import LanguageSelector from '../components/LanguageSelector';
import TranslateButton from '../components/TranslateButton';
import { translateText } from '../services/translationService';

const HomePage = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es');

  const handleTranslate = async () => {
    const translated = await translateText(text, targetLanguage);
    setTranslatedText(translated);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-center">Real-Time Language Translator</h2>
        <textarea
          className="w-full p-2 mb-4 border rounded"
          rows="4"
          placeholder="Enter text to translate..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <LanguageSelector targetLanguage={targetLanguage} setTargetLanguage={setTargetLanguage} />

        <TranslateButton onTranslate={handleTranslate} />

        {translatedText && (
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <h3 className="font-semibold">Translated Text:</h3>
            <p>{translatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
