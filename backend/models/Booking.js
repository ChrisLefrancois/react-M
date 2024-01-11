const mongoose = require('mongoose');

// Define the Booking schema
const bookingSchema = new mongoose.Schema({
  personName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  yogaClass: {
    type: String,
    required: true,
  },
});

// Create a Booking model using the schema
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
