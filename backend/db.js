const mongoose = require('mongoose');

const uri = "mongodb+srv://chrislefrancois1:8ACj9Hipjm9CFrfC@yoga.s2vapwv.mongodb.net/?retryWrites=true&w=majority"

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
