// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// Define the port for the server
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
