const jwt = require('jsonwebtoken');
const sensorModel = require('./../models/sensorModel');

var sensorController = {};

sensorController.getSensor = async (req, res) => {
    var sensor = await sensorModel.getSensor();
    if(sensor !== null){
        return res.status(200).json(sensor);
    } else {
        return res.status(400).json({ error: 0 });
    }
}

sensorController.getSensorById = async (req, res) => {
    const { idSensor } = req.body;
    var sensor = await sensorModel.getSensorById( idSensor );
    if(sensor !== null){
        return res.status(200).json( sensor );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

sensorController.getAllSensorPosition = async (req, res) => {
    const { idSensor } = req.body;
    var sensor = await sensorModel.getAllSensorPosition( idSensor );
    if(sensor !== null){
        return res.status(200).json( sensor );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

sensorController.insertSensor = async (req, res) => {
    const { isOn, name, idSector, idDeviceType } = req.body;
    var data = [ isOn, name, idSector, idDeviceType ];
    var sensor = await sensorModel.insertSensor(data);
    if( sensor ){
        return res.status(200).json( sensor );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

sensorController.updateSensorPosition = async (req, res) => {
    const { idSensor, posx, posy } = req.body;
    var data = [ idSensor, posx, posy ];
    var sensor = await sensorModel.updateSensorPosition(data);
    if( sensor ){
        return res.status(200).json( sensor );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

sensorController.updateSensor = async (req, res) => {
    const { idSensor, isOn, name, idSector, idDeviceType } = req.body;
    var data = [ idSensor, isOn, name, idSector, idDeviceType ];
    var sensor = await sensorModel.updateSensor(data);
    if( sensor ){
        return res.status(200).json( sensor );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

sensorController.deleteSensor = async (req, res) => {
    const { idSensor } = req.body;
    var sensor = await sensorModel.deleteSensor(idSensor);
    if( sensor ){
        return res.status(200).json( sensor );
    } else {
        return res.status(400).json({ error: 0 });
    }
}

/************************************************************************************/
/**************************MEASURES************************************************/
/************************************************************************************/

sensorController.getSensorPotencyByDay = async (req, res) => {
    const { date, idSensor } = req.body;
    var current = await sensorModel.getSensorPotencyByDay(date, idSensor);
    if(current !== null){
        let {corriente} = current[0];
        const cds = calculateCDS(corriente);
        return res.status(200).json({cds: cds}); 
    } else {
        return res.status(400).json({ error: 0 });
    }
}

sensorController.getSensorPotencyByMonth = async (req, res) => {
    const { month, idSensor } = req.body;
    var current = await sensorModel.getSensorPotencyByMonth(month, idSensor);
    if(current !== null){
        let {corriente} = current[0];
        const cms = calculateCMS(corriente);
        return res.status(200).json({cms: cms}); 
    } else {
        return res.status(400).json({ error: 0 });
    }
}

sensorController.getPotencyMonthByStore = async (req, res) => {
    const { idStore } = req.body;
    var current = await sensorModel.getPotencyMonthByStore(idStore);
    if(current !== null){
        let {corriente} = current[0];
        const cmts = calculateCMTS(corriente);
        return res.status(200).json({cmts: cmts});
    } else {
        return res.status(400).json({ error: 0 });
    }
}

sensorController.getEnergyCost = async (req, res) => {
    const { idStore } = req.body;
    var current = await sensorModel.getPotencyMonthByStore(idStore);
    if(current !== null){
        let {corriente} = current[0];
        const cmts = calculateCMTS(corriente);
        const energyCost = calculateEnergyCost(cmts);
        return res.status(200).json({energyCost: energyCost});
    } else {
        return res.status(400).json({ error: 0 });
    }
}

sensorController.getPotencyYearByStore = async (req, res) => {
    const { idStore } = req.body;
    var current = await sensorModel.getPotencyYearByStore(idStore);
    if(current !== null){
        let data;
        let labels = [];
        let series = [];
        current.forEach(item => {
            labels.push(item.month);
            series.push(item.corriente);
            data = {'labels': labels, 'series': [series]};
        });
        return res.status(200).json(data);
    } else {
        return res.status(400).json({ error: 0 });
    }
}

sensorController.getPotencyWeekByStore = async (req, res) => {
    const { idStore, date } = req.body;
    var current = await sensorModel.getPotencyWeekByStore(idStore, date);
    if(current !== null){
        let data;
        let labels = [];
        let series = [];
        current.forEach(item => {
            labels.push(item.day);
            series.push(item.corriente);
            data = {'labels': labels, 'series': [series]};
        });
        return res.status(200).json(data);
    } else {
        return res.status(400).json({ error: 0 });
    }
}

sensorController.getPotencyDailyByStore = async (req, res) => {
    const { idStore, date } = req.body;
    var current = await sensorModel.getPotencyDailyByStore(idStore, date);
    if(current !== null){
        let data;
        let labels = [];
        let series = [];
        current.forEach(item => {
            labels.push(item.hour);
            series.push(item.corriente);
            data = {'labels': labels, 'series': [series]};
        });
        return res.status(200).json(data);
    } else {
        return res.status(400).json({ error: 0 });
    }
}

sensorController.getPotencyYearByStoreTotal = async (req, res) => {
    const { idStore } = req.body;
    var current = await sensorModel.getPotencyYearByStoreTotal(idStore);
    if(current !== null){
        return res.status(200).json(current[0]);
    } else {
        return res.status(400).json({ error: 0 });
    }
}

function calculateCDS(corriente) {
    let p = corriente * 220;
    let cds = p / 3600000;
    return cds;
}

function calculateCMS(corriente){
    let cds = calculateCDS(corriente);
    let cms = cds * 30;
    return cms;
}

function calculateCMTS(corriente){
    let cms = calculateCMS(corriente);
    let cmts = cms * 30;
    return cmts;
}

function calculateEnergyCost(cmts){
    let energyCost = cmts * 65;
    return energyCost;
}

module.exports = sensorController;