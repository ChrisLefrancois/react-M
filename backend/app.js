const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const Booking = require('./models/Booking'); // Import your Booking model
require('dotenv').config();
const db = require('./db'); // Import the database connection file

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;


  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.DESTINATION_EMAIL,
    subject: 'New Contact Form Submission',
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

app.post('/create-booking', async (req, res) => {
  try {
    // Extract data from the request body
    const { name, email, date, className } = req.body;
    console.log(req.body)

    // Create a new booking using the Booking model
    const newBooking = new Booking({
      personName: name,
      email,
      date,
      yogaClass: className
    });
    console.log(newBooking)
    // Save the new booking to the database
    const savedBooking = await newBooking.save();

    res.status(201).json(savedBooking); // Send the created booking as a response
  } catch (error) {
    res.status(500).json({ error: 'Error creating booking' });
  }
});



app.get('/api/bookings', async (req, res) => {
  try {
    // Retrieve all bookings from the database
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching booking data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
