// user-api.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // To load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;  // Use the port provided by Heroku or default to 3000

// Middleware
app.use(cors());
app.use(express.json());  // Parse incoming JSON requests

// Connect to MongoDB using the connection string from .env
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define routes
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
