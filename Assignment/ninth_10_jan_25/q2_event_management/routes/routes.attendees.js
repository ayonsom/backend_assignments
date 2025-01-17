const express = require('express');
const attendeesRoute = express.Router();
const { RegistrationModel } = require('../models/model.registration');

attendeesRoute.get('/:eventId', async (req, res) => {
  try {
    const attendees = await RegistrationModel.find({ event: req.params.eventId }).populate('attendee');
    res.status(200).send(attendees);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = {attendeesRoute};