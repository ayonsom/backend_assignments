const express = require('express');
const registerRoute = express.Router();
const { RegistrationModel } = require('../models/model.registration');
const { EventModel } = require('../models/model.event');
const {AttendeeModel} = require('../models/model.attendee');

registerRoute.post('/', async (req, res) => {
  try {
    const { eventId, attendeeId } = req.body;
    const event = await EventModel.findById(eventId);
    const attendee = await AttendeeModel.findById(attendeeId);
    const registration = await RegistrationModel.findOne({ event: eventId, attendee: attendeeId });
    if (registration) {
      return res.status(409).send('Duplicate registration.');
    }
    const newRegistration = new RegistrationModel({ event, attendee });
    await newRegistration.save();
    res.status(201).send('Registration successful.');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = {registerRoute};
