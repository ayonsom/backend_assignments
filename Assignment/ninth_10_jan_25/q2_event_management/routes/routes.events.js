const express = require('express');
const eventsRoute = express.Router();
const { RegistrationModel } = require('../models/model.registration');

eventsRoute.get('/:attendeeId', async (req, res) => {
  try {
    const events = await RegistrationModel.find({ attendee: req.params.attendeeId }).populate('event');
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = {eventsRoute};
