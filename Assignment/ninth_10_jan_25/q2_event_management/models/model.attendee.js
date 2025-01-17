const mongoose = require("mongoose")

const attendeeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    phone: {
      type: String
    },
    registrations: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Registration'
    }]
  });
  
  const AttendeeModel = mongoose.model('Attendee', attendeeSchema);
  
  module.exports = { AttendeeModel }