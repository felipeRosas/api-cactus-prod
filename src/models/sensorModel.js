const db = require('../database');

var sensorModel = {};

sensorModel.getSensor = () => {
    var sql = 'CALL spGetAllSensor()';
    return new Promise((resolve, reject) =>{
        db.query(sql, (error, rows) =>{
            if(Object.keys(rows[0]).length === 0){
                resolve(null);
            }else{
                resolve(rows[0]);
            }
        });
    });
}

sensorModel.getSensorById = ( idSensor ) => {
    var sql = 'CALL spGetSensorById(?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, idSensor, (error, rows) =>{
            if(Object.keys(rows[0]).length === 0){
                resolve(null);
            }else{
                const { idSensor, isOn, idSector, nombre, posx, posy, idDeviceType } = rows[0][0];
                const sensor = {
                    idSensor, isOn, idSector, nombre, posx, posy, idDeviceType
                }
                resolve(sensor);
            }
        });
    });
}

sensorModel.getAllSensorPosition = ( idSensor ) => {
    var sql = 'CALL spGetAllSensorPosition(?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, idSensor, (error, rows) =>{
            if(Object.keys(rows[0]).length === 0){
                resolve(null);
            }else{
                resolve(rows[0]);
            }
        });
    });
}

sensorModel.insertSensor = ( data ) => {
    var sql = 'CALL spInsertSensor(?, ?, ?, ?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, data, (error, rows) =>{
            if(!rows.affectedRows === 1){
                resolve(null);
            }else{
                resolve(true); 
            } 
        });
    });
}

sensorModel.updateSensorPosition = ( data ) => {
    var sql = 'CALL spUpdateSensorPosition(?, ?, ?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, data, (error, rows) =>{
            if(!rows.affectedRows === 1){
                resolve(null);
            }else{
                resolve(true); 
            } 
        });
    });
}

sensorModel.updateSensor = ( data ) => {
    var sql = 'CALL spUpdateSensor(?, ?, ?, ?, ?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, data, (error, rows) =>{
            if(!rows.affectedRows === 1){
                resolve(null);
            }else{
                resolve(true); 
            } 
        });
    });
}

sensorModel.deleteSensor = ( idSensor ) => {
    var sql = 'CALL spDeleteSensor(?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, idSensor, (error, rows) =>{
            if(!rows.affectedRows === 1){
                resolve(null);
            }else{
                resolve(true); 
            } 
        });
    });
}

sensorModel.getSensorPotencyByDay = ( date, idSensor ) => {
    var sql = 'CALL spGetSensorPotencyByDay(?, ?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, [date, idSensor], (error, rows) =>{
            if(Object.keys(rows[0]).length === 0){
                resolve(null);
            }else{
                resolve(rows[0]);
            }
        });
    });
}

sensorModel.getSensorPotencyByMonth = ( month, idSensor ) => {
    var sql = 'CALL spGetSensorPotencyByMonth(?, ?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, [month, idSensor], (error, rows) =>{
            if(Object.keys(rows[0]).length === 0){
                resolve(null);
            }else{
                resolve(rows[0]);
            }
        });
    });
}

sensorModel.getPotencyMonthByStore = ( idStore ) => {
    var sql = 'CALL getPotencyMonthByStore(?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, [idStore], (error, rows) =>{
            if(Object.keys(rows[0]).length === 0){
                resolve(null);
            }else{
                resolve(rows[0]);
            }
        });
    });
}

sensorModel.getPotencyYearByStore = ( idStore ) => {
    var sql = 'CALL getPotencyYearByStore(?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, [idStore], (error, rows) =>{
            if(Object.keys(rows[0]).length === 0){
                resolve(null);
            }else{
                resolve(rows[0]);
            }
        });
    });
}

sensorModel.getPotencyWeekByStore = ( idStore, date ) => {
    var sql = 'CALL getPotencyWeekByStore(?, ?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, [idStore, date], (error, rows) =>{
            if(Object.keys(rows[0]).length === 0){
                resolve(null);
            }else{
                resolve(rows[0]);
            }
        });
    });
}

sensorModel.getPotencyDailyByStore = ( idStore, date ) => {
    var sql = 'CALL getPotencyDailyByStore(?, ?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, [idStore, date], (error, rows) =>{
            if(Object.keys(rows[0]).length === 0){
                resolve(null);
            }else{
                resolve(rows[0]);
            }
        });
    });
}

sensorModel.getPotencyYearByStoreTotal = ( idStore ) => {
    var sql = 'CALL getPotencyYearByStoreTotal(?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, [idStore], (error, rows) =>{
            console.log(rows);
            if(Object.keys(rows[0]).length === 0){
                resolve(null);
            }else{
                resolve(rows[0]);
            }
        });
    });
}

module.exports = sensorModel;