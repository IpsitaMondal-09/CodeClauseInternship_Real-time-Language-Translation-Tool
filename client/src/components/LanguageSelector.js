import React from 'react';

const LanguageSelector = ({ targetLanguage, setTargetLanguage }) => {
  return (
    <select
      className="w-full mb-4 p-2 border rounded"
      value={targetLanguage}
      onChange={(e) => setTargetLanguage(e.target.value)}
    >
      <option value="bn">Bengali</option> {/* Add Bengali option */}
    </select>
  );
};

export default LanguageSelector;
