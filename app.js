const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Import JSON data
const gamesData = require('./data/games.json');

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get games data
app.get('/api/games', (req, res) => {
    res.json(gamesData);
});

// Route for the API demo page
app.get('/api-demo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});