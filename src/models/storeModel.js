const db = require('../database');

var storeModel = {};

storeModel.getStore = () => {
    var sql = 'CALL spGetAllStore()';
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

storeModel.getStoreById = ( idStore ) => {
    var sql = 'CALL spGetStoreByID(?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, idStore, (error, rows) =>{
            if(Object.keys(rows[0]).length === 0){
                resolve(null);
            }else{
                const { idStore, name, address, latitude, longitude, idClient } = rows[0][0];
                const store = {
                    idStore, name, address, latitude, longitude, idClient
                }
                resolve(store);
            }
        });
    });
}

storeModel.getStoreByIdClient = ( idClient ) => {
    var sql = 'CALL spGetStoreByClient(?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, idClient, (error, rows) =>{
            if(Object.keys(rows[0]).length === 0){
                resolve(null);
            }else{
                resolve(rows[0]);
            }
        });
    });
}

storeModel.insertStore = ( data ) => {
    var sql = 'CALL spInsertStore(?, ?, ?, ?, ?)';
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

storeModel.updateStore = ( data ) => {
    var sql = 'CALL spUpdateStore(?, ?, ?, ?, ?, ?)';
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

storeModel.deleteStore = ( idStore ) => {
    var sql = 'CALL spDeleteStore(?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, idStore, (error, rows) =>{
            if(!rows.affectedRows === 1){
                resolve(null);
            }else{
                resolve(true); 
            } 
        });
    });
}

module.exports = storeModel;