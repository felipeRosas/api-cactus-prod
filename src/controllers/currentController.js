const jwt = require('jsonwebtoken');
const currentModel = require('./../models/currentModel');

var currentController = {};

currentController.getCurrents = async (req, res) => {
    var current = await currentModel.getCurrents();
    if(current !== null){
        return res.status(200).json(current);
    } else {
        return res.status(400).json({ error: 0 });
    }
}

currentController.getCurrentById = async (req, res) => {
    const { idCurrent } = req.body;
    var current = await currentModel.getCurrentById( idCurrent );
    if(current !== null){
        return res.status(200).json( current );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

currentController.getCurrentBetweenDates = async (req, res) => {
    const { idSensor, beginDate, endDate } = req.body;
    var data = [ idSensor, beginDate, endDate ];
    var current = await currentModel.getCurrentBetweenDates( data );
    if(current !== null){
        return res.status(200).json( current );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

currentController.insertCurrent = async (req, res) => {
    const { current, idSensor } = req.body;
    var data = [ current, idSensor ];
    var currents = await currentModel.insertCurrent(data);
    if( currents ){
        return res.status(200).json( currents );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

currentController.updateCurrent = async (req, res) => {
    const { idCurrent, current, idSensor } = req.body;
    var data = [ idCurrent, current, idSensor ];
    var currents = await currentModel.updateCurrent(data);
    if( currents ){
        return res.status(200).json( currents );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

currentController.deleteCurrent = async (req, res) => {
    const { idCurrent } = req.body;
    var current = await currentModel.deleteCurrent(idCurrent);
    if( current ){
        return res.status(200).json( current );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

module.exports = currentController;