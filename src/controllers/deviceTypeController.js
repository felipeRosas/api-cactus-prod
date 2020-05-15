const jwt = require('jsonwebtoken');
const deviceTypeModel = require('./../models/deviceTypeModel');

var deviceController = {};

deviceController.getDeviceType = async (req, res) => {
    var deviceType = await deviceTypeModel.getDeviceType();
    if(deviceType !== null){
        return res.status(200).json(deviceType);
    } else {
        return res.status(400).json({ error: 0 });
    }
}

deviceController.getDeviceTypeById = async (req, res) => {
    const { idDeviceType } = req.body;
    var deviceType = await deviceTypeModel.getDeviceTypeById( idDeviceType );
    if(deviceType !== null){
        return res.status(200).json( deviceType );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

deviceController.insertDeviceType = async (req, res) => {
    const { name, icon } = req.body;
    var data = [ name, icon ];
    var deviceTypes = await deviceTypeModel.insertDeviceType(data);
    if( deviceTypes ){
        return res.status(200).json( deviceTypes );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

deviceController.updateDeviceType = async (req, res) => {
    const { id, name, icon } = req.body;
    var data = [ id, name, icon ];
    var deviceTypes = await deviceTypeModel.updateDeviceType(data);
    if( deviceTypes ){
        return res.status(200).json( deviceTypes );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

deviceController.deleteDeviceType = async (req, res) => {
    const { idDeviceType } = req.body;
    var deviceType = await deviceTypeModel.deleteDeviceType(idDeviceType);
    if( deviceType ){
        return res.status(200).json( deviceType );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

module.exports = deviceController;