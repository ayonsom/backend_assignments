const passengerRouter = require("express").Router()
const { passengerModel } = require('../models/model.passenger')

passengerRouter.get('/', async (req,res) => {
    try {
        const allPassengers = await passengerModel.find();
        res.status(200).send({msg:"Here is list of all Passengers:", data:allPassengers})
    } catch (error) {
        res.send(error)
    }
})

passengerRouter.get('/', async (req,res) => {
    const {email} = req.body;
    try {
        const passenger = await passengerModel.findOne({email});
        res.status(200).send({msg:"Here is the requested Passenger:", data:passenger})
    } catch (error) {
        res.send(error)
    }
})

passengerRouter.post('/', async (req,res) => {
    try {
        const newPassenger = await passengerModel.create(req.body);
        res.status(201).send({msg:"Passengers added successfully:", data:newPassenger})
    } catch (error) {
        res.send(error)
    }
})

passengerRouter.patch('/', async (req,res) => {
    let data = req.body;
    try {
        const existingUser = await passengerModel.findOne( data.email || data._id )
        await passengerModel.findOneAndUpdate( (data.email || data._id), {
            name : data.name || existingUser.name,
            email : data.email || existingUser.email,
            phone : data.phone || existingUser.phone,
            reservations : [...existingUser.reservations, data.reservations] || existingUser.reservations
        });
        const updatedUser = await passengerModel.findOne( data.email || data._id )
        res.status(204).send({msg:"Passenger updated successfully:",oldData:existingUser, newData:newPassenger})
    } catch (error) {
        res.send(error)
    }
})

passengerRouter.delete('/', async (req,res) => {
    try {
        const deletedPassenger = await passengerModel.findOneAndDelete(data.email || data._id);
        res.status(201).send({msg:"Passengers deleted successfully:", data:deletedPassenger})
    } catch (error) {
        res.send(error)
    }
})

module.exports = { passengerRouter }