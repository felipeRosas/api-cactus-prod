const db = require('../database');

var deviceTypeModel = {};

deviceTypeModel.getDeviceType = () => {
    var sql = 'CALL spGetAllDeviceType()';
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

deviceTypeModel.getDeviceTypeById = ( idDeviceType ) => {
    var sql = 'CALL spGetDeviceTypeById(?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, idDeviceType, (error, rows) =>{
            if(Object.keys(rows[0]).length === 0){
                resolve(null);
            }else{
                const { idDeviceType, name, icon } = rows[0][0];
                const device = {
                    idDeviceType, name, icon
                }
                resolve(device);
            }
        });
    });
}

deviceTypeModel.insertDeviceType = ( data ) => {
    var sql = 'CALL spInsertDeviceType(?, ?)';
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

deviceTypeModel.updateDeviceType = ( data ) => {
    var sql = 'CALL spUpdateDeviceType(?, ?, ?)';
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

deviceTypeModel.deleteDeviceType = ( idDeviceType ) => {
    var sql = 'CALL spDeleteDeviceType(?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, idDeviceType, (error, rows) =>{
            if(!rows.affectedRows === 1){
                resolve(null);
            }else{
                resolve(true); 
            } 
        });
    });
}

module.exports = deviceTypeModel;