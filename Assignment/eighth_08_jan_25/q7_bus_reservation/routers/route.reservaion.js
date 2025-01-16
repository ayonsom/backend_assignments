const reservationRouter = require('express').Router()
const { reservartionModel } = require('../models/model.reservation')

reservationRouter.get('/', async (req,res) => {
    try {
        const allReservations = await reservartionModel.find();
        res.status(200).send({msg : 'Here are all the reservations', data : allReservations})
    } catch (error) {
        res.send(error)
    }
})

reservationRouter.post('/', async (req,res) => {
    try {
        const newReservation = await reservationModel.create(req.body);
        res.status(201).send({msg : 'Reservation was successful', data : newReservation});
    } catch (error) {
        res.send(error)
    }
})

reservationRouter.patch('/', async (req,res) => {
    const data = req.body;
    try {
        const existingReservation = await reservartionModel.findById({_id : data._id});
        await reservartionModel.findByIdAndUpdate({_id : data._id},{
            reservation_date : data.reservation_date || existingReservation.reservation_date
        });
        const updatedReservation = await reservartionModel.findById({_id : data._id});
        res.status(201).send({msg : 'Reservation details updatedsuccessfully', data : updatedReservation})
    } catch (error) {
        res.send(error)
    }
})

reservationRouter.delete('/', async (req,res) => {
    try {
        const deletedReservation = await reservartionModel.findById({_id : data._id});
        res.status(200).send({msg : 'Reservation cancelled successfully', data : deletedReservation})
    } catch (error) {
        res.send(error)
    }
})

module.exports = { reservationRouter }