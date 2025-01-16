const routeRouter = require('express').Router()
const {routeModel} = require('../models/model.routes')

routeRouter.get('/', async (req,res) => {
    try {
        const allRoutes = await routeModel.find();
        res.status(200).send({msg : 'Here are all the bus routes', data : allRoutes})
    } catch (error) {
        res.send(error)
    }
})

routeRouter.post('/', async (req,res) => {
    try {
        const newRoute = await routeModel.create(req.body);
        res.status(201).send({msg : 'New route added successfully', data: newRoute});
    } catch (error) {
        res.send(error)
    }
})

routeRouter.patch('/', async (req,res) => {
    const data = req.body;
    try {
        const existingRoute = await routeModel.findOne(data._id);
        await routeModel.findOneAndUpdate({_id : data._id},{
            start_location : data.start_location || existingRoute.start_location,
            end_location : data.end_location || existingRoute.end_location,
            distance : data.distance || existingRoute.distance,
            buses : [...existingRoute.buses,...data.buses] || existingRoute.buses
        })
    } catch (error) {
        res.send(error)
    }
})

routeRouter.delete('/', async (req,res) => {
    try {
        const deletedRoute = await routeModel.findOneAndDelete(req.body._id);
        res.status(200).send({msg : 'Route deleted successfully', data : deletedRoute})
    } catch (error) {
        res.send(error)
    }
})

module.exports = { routeRouter }