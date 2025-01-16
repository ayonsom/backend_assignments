const busRouter = require('express').Router()
const {busModel} = require('../models/model.bus')

busRouter.get('/', async (req,res) => {
    try {
        const allBuses = await busModel.find();
        res.status(200).send({msg : 'Here is all the buses:', data:allBuses})
    } catch (error) {
        res.send(error);        
    }
})

busRouter.post('/', async (req,res) => {
    try {
        const newBus = await busModel.create(req.body);
        res.status(200).send({msg : 'Bus added successfully:', data:newBus})
    } catch (error) {
        res.send(error);        
    }
})

busRouter.patch('/', async (req,res) => {
    const data = req.body;
    try {
        const existingBus = await busModel.findOne(data.bus_number || data._id)
        const newBus = await busModel.findOneAndUpdate((data.bus_number || data._id), {
            bus_number : data.bus_number || existingBus.bus_number,
            capacity : data.capacity || existingBus.capacity,
            operator : data.operator || existingBus.operator,
            route : data.route || existingBus.route,
            reservations : [...existingBus.reservations,...data.reservations] || existingBus.reservations
        });
        res.status(200).send({msg : 'Bus added successfully:', data:newBus})
    } catch (error) {
        res.send(error);        
    }
})

busRouter.delete('/', async (req,res) => {
    try {
        const deletedBus = await busModel.findOneAndDelete(data.bus_number || data._id);
        res.status(200).send({msg : 'The bus deleted successfully', data : deletedBus})
    } catch (error) {
        res.send(error)
    }
})

module.exports = { busRouter }