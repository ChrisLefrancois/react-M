const express = require('express');
const router = express.Router();
const Class = require('../models/Class');

// Route to create a new class
router.post('/classes', async (req, res) => {
  try {
    const { classTitle, description, hours } = req.body;

    const newClass = new Class({
      classTitle,
      description,
      hours,
    });

    const savedClass = await newClass.save();
    res.status(201).json(savedClass);
  } catch (error) {
    console.error('Error creating class:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/classes', async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (error) {
    console.error('Error fetching classes:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
