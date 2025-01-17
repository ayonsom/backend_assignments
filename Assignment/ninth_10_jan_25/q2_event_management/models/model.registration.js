const mongoose = require("mongoose")

const registrationSchema = new mongoose.Schema({
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
      required: true
    },
    attendee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Attendee',
      required: true
    },
    registration_date: {
      type: Date,
      default: Date.now
    }
  });
  
const RegistrationModel = mongoose.model('Registration', registrationSchema);
  
module.exports = { RegistrationModel }