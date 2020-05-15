const db = require('../database');

var currentModel = {};

currentModel.getCurrents = () => {
    var sql = 'CALL spGetAllCurrent()';
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

currentModel.getCurrentById = ( idCurrent ) => {
    var sql = 'CALL spGetCurrentById(?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, idCurrent, (error, rows) =>{
            if(Object.keys(rows[0]).length === 0){
                resolve(null);
            }else{
                const { idCurrent, timestamp, current, sensorNombre } = rows[0][0];
                const currents = {
                    idCurrent, timestamp, current, sensorNombre
                }
                resolve(currents);
            }
        });
    });
}

currentModel.getCurrentBetweenDates = ( data ) => {
    var sql = 'CALL spGetCurrentByBetweenDates(?, ?, ?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, data, (error, rows) =>{
            if(Object.keys(rows[0]).length === 0){
                resolve(null);
            }else{
                const { medicion } = rows[0][0];
                const current = {
                    medicion
                }
                resolve(current);
            }
        });
    });
}

currentModel.insertCurrent = ( data ) => {
    var sql = 'CALL spInsertCurrent(?, ?)';
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

currentModel.updateCurrent = ( data ) => {
    var sql = 'CALL spUpdateCurrent(?, ?, ?)';
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

currentModel.deleteCurrent = ( idCurrent ) => {
    var sql = 'CALL spDeleteCurrent(?)';
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

module.exports = currentModel;