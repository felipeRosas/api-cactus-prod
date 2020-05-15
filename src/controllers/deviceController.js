const jwt = require('jsonwebtoken');
const deviceModel = require('./../models/deviceModel');

var deviceController = {};

deviceController.getDevices = async (req, res) => {
    var device = await deviceModel.getDevices();
    if(device !== null){
        return res.status(200).json(device);
    } else {
        return res.status(400).json({ error: 0 });
    }
}

deviceController.getDeviceById = async (req, res) => {
    const { idDevice } = req.body;
    var device = await deviceModel.getDeviceById( idDevice );
    if(device !== null){
        return res.status(200).json( device );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

deviceController.insertDevice = async (req, res) => {
    const { name, idSensorDevice, idDeviceType } = req.body;
    var data = [ name, idSensorDevice, idDeviceType ];
    var device = await deviceModel.insertDevice(data);
    if( device ){
        return res.status(200).json( device );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

deviceController.updateDevice = async (req, res) => {
    const { idDevice, name, idSensorDevice, idDeviceType } = req.body;
    var data = [ idDevice, name, idSensorDevice, idDeviceType ];
    var device = await deviceModel.updateDevice(data);
    if( device ){
        return res.status(200).json( device );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

deviceController.deleteDevice = async (req, res) => {
    const { idDevice } = req.body;
    var device = await deviceModel.deleteDevice(idDevice);
    if( device ){
        return res.status(200).json( device );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

module.exports = deviceController;