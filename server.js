// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Could not connect to MongoDB Atlas...', err));

// Project Schemas (if using a database)
const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  type: String,
});

const Project = mongoose.model('Project', ProjectSchema);

// Seed Data (Optional: Remove if using a database)
const softwareProjects = [
  {
    id: 1,
    title: 'Needle Drop',
    description: 'A community-driven platform for vinyl enthusiasts to buy, sell, trade, and discover records, seamlessly integrating modern tools for a premium user experience.',
    link: 'https://needle-drop.netlify.app/',
  }
];

const audioProjects = [
  {
    id: 1,
    title: 'Alfredo Pasquel Music',
    description: 'A showcase of my audio engineering projects, including mixing, recording and editing.',
    link: 'https://alfredopasquelmusic.netlify.app/',
  },
];

// API endpoint to get software projects
app.get('/api/software-projects', (req, res) => {
  res.json(softwareProjects);
});

// API endpoint to get audio projects
app.get('/api/audio-projects', (req, res) => {
  res.json(audioProjects);
});

// Basic route to verify server status
app.get('/', (req, res) => {
  res.send('AP Portfolio Backend');
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
