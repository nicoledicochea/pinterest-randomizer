import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'MuseGrid API is running' });
});

// Pinterest API proxy endpoints (to be implemented)
app.get('/api/users/:username/boards', (req, res) => {
  // TODO: Implement Pinterest API integration
  res.json({ message: 'Pinterest API integration coming soon' });
});

app.get('/api/boards/:boardId/pins', (req, res) => {
  // TODO: Implement Pinterest API integration
  res.json({ message: 'Pinterest API integration coming soon' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 MuseGrid server running on port ${PORT}`);
  console.log(`📱 Health check: http://localhost:${PORT}/api/health`);
});
