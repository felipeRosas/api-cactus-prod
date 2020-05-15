const db = require('../database');

var deviceModel = {};

deviceModel.getDevices = () => {
    var sql = 'CALL spGetAllDevice()';
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

deviceModel.getDeviceById = ( idDevice ) => {
    var sql = 'CALL spGetDeviceById(?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, idDevice, (error, rows) =>{
            if(Object.keys(rows[0]).length === 0){
                resolve(null);
            }else{
                const { idDevice, name, nameDeviceType } = rows[0][0];
                const device = {
                    idDevice, name, nameDeviceType
                }
                resolve(device);
            }
        });
    });
}

deviceModel.insertDevice = ( data ) => {
    var sql = 'CALL spInsertDevice(?, ?, ?)';
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

deviceModel.updateDevice = ( data ) => {
    var sql = 'CALL spUpdateDevice(?, ?, ?, ?)';
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

deviceModel.deleteDevice = ( idCurrent ) => {
    var sql = 'CALL spDeleteDevice(?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, idCurrent, (error, rows) =>{
            if(!rows.affectedRows === 1){
                resolve(null);
            }else{
                resolve(true); 
            } 
        });
    });
}

module.exports = deviceModel;