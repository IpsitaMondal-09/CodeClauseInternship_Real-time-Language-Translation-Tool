import React from 'react';

const TranslateButton = ({ onTranslate }) => {
  return (
    <button
      onClick={onTranslate}
      className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
    >
      Translate
    </button>
  );
};

export default TranslateButton;
