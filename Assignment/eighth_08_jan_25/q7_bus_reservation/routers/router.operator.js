const operatorRouter = require("express").Router()
const {operatorModel} = require('../models/model.operator')

operatorRouter.get('/', async (req,res) => {
    try {
        const allOperators = await operatorModel.find();
        res.status(200).send({msg:"Here is list of all Operators:", data:allOperators})
    } catch (error) {
        res.send(error)
    }
})

operatorRouter.get('/find-by-name', async (req,res) => {
    try {
        const operator = await operatorModel.findOne(req.body.name || req.body._id);
        res.status(200).send({msg:"Here is the requested Operator:", data:operator})
    } catch (error) {
        res.send(error)
    }
})

operatorRouter.post('/', async (req,res) => {
    try {
        const newOperator = await operatorModel.create(req.body);
        res.status(201).send({msg:"New Operator added successfully:", data:newOperator})
    } catch (error) {
        res.send(error)
    }
})

operatorRouter.patch('/', async (req,res) => {
    let data = req.body;
    try {
        const existingOperator = await operatorModel.findOne( data._id ?{_id:data._id} : {name:data.name} )
        console.log(existingOperator);        
        await operatorModel.findOneAndUpdate( (data._id ?{_id:data._id} : {name:data.name}), { 
            name : data.name? data.name : existingOperator.name,
            contact_info : data.contact_info? data.contact_info : existingOperator.contact_info,
            buses : data.buses?[...existingOperator.buses, ...data.buses] : existingOperator.buses
        });
        const updatedOperator = await operatorModel.findOne(data._id ?{_id:data._id} : {name:data.name})
        res.status(200).send({msg:"Operator updated successfully:", oldData : existingOperator, newData : updatedOperator})
    } catch (error) {
        console.log(error);        
        res.send(error)
    }
})

operatorRouter.delete('/', async (req,res) => {
    try {
        const deletedOperator = await operatorModel.findOneAndDelete(data.name || data._id);
        res.status(201).send({msg:"Operator deleted successfully:", data:deletedOperator})
    } catch (error) {
        res.send(error)
    }
})

module.exports = { operatorRouter }