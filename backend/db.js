const mongoose = require('mongoose');

const uri = process.env.MONDO_DB

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, // Recommended for avoiding deprecation warnings
});

const db = mongoose.connection;

// Event handling for successful connection
db.on('connected', () => {
  console.log('Connected to MongoDB Atlas');
});

// Event handling for connection errors
db.on('error', (err) => {
  console.error(`MongoDB Atlas connection error: ${err}`);
});

module.exports = db;
