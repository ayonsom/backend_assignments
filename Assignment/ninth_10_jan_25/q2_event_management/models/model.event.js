const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      unique: true
    },
    date: {
      type: Date,
      required: true
    },
    location: {
      type: String
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organizer',
      required: true
    },
    attendees: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Registration'
    }]
  });
  
  const EventModel = mongoose.model('Event', eventSchema);
  
  module.exports = { EventModel }