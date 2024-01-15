const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  classTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  hours: [
    {
      type: String,
      // Add any additional validation or constraints for hours
    },
  ],
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
