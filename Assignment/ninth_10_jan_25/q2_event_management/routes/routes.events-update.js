const express = require('express');
const eventsUpdateRoute = express.Router();
const { EventModel } = require('../models/model.event');

eventsUpdateRoute.put('/:eventId', async (req, res) => {
  try {
    const event = await EventModel.findById(req.params.eventId);
    event.title = req.body.title || event.title;
    event.date = req.body.date || event.date;
    event.location = req.body.location || event.location;
    await event.save();
    res.status(200).send('Event updated successfully.');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = {eventsUpdateRoute};
