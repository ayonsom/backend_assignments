const express = require('express');
const registrationRoute = express.Router();
const { RegistrationModel } = require('../models/model.registration');

registrationRoute.delete('/:registrationId', async (req, res) => {
  try {
    const registration = await RegistrationModel.findByIdAndDelete(req.params.registrationId);
    if (!registration) {
      return res.status(404).send('Registration not found.');
    }
    res.status(200).send('Registration canceled successfully.');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = {registrationRoute};
