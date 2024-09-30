const axios = require('axios');

// LibreTranslate API URL
const LIBRE_TRANSLATE_URL = process.env.LIBRE_TRANSLATE || "https://libretranslate.de/translate";



const translateText = async (req, res) => {
  const { text, targetLanguage } = req.body;

  try {
    // Make a request to the API
    // const response = await axios.post("https://libretranslate.de/translate", {
    //   q: text,
    //   source: "en",
    //   target: "bn",
    //   format: "text"
    // }, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // });
    // const translatedText = response.data.translatedText;

    // Replace this section with actual translation API integration
    const translatedText = text.split("").reverse().join(""); // Mock translation
    res.json({ translatedText });
  } catch (error) {
    console.error(error);
    res.status(500).send('Translation failed');
  }
};

module.exports = { translateText };
