// db.js
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));

module.exports = mongoose;
