const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const translationRoutes = require('./routes/translationRoutes');
const http = require('http');
const { Server } = require('socket.io');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Basic Translation Route
app.use('/api/translate', translationRoutes);

// Socket.io Setup
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  }
});

io.on('connection', (socket) => {
  console.log('A user connected');

  // Real-time Translation Event
  socket.on('translateText', async ({ text, targetLanguage }) => {
    try {
      // Translation logic here (using mock response)
      const translatedText = text.split("").reverse().join("");  // Example mock translation
      socket.emit('translatedText', translatedText);
    } catch (error) {
      socket.emit('error', 'Translation failed');
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
