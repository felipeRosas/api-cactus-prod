const db = require('../database');

var sectorModel = {};

sectorModel.getSector = () => {
    var sql = 'CALL spGetAllSector()';
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

sectorModel.getSectorById = ( idSector ) => {
    var sql = 'CALL spGetSectorById(?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, idSector, (error, rows) =>{
            if(Object.keys(rows[0]).length === 0){
                resolve(null);
            }else{
                const { idSector, name, level, sectorPlan, store_idStore } = rows[0][0];
                const sector = {
                    idSector, name, level, sectorPlan, store_idStore
                }
                resolve(sector);
            }
        });
    });
}

sectorModel.getSectorByIdStore = ( idStore ) => {
    var sql = 'CALL spGetSectorByStore(?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, idStore, (error, rows) =>{
            if(Object.keys(rows[0]).length === 0){
                resolve(null);
            }else{
                resolve(rows[0]);
            }
        });
    });
}

sectorModel.insertSector = ( data ) => {
    var sql = 'CALL spInsertSector(?, ?, ?, ?)';
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

sectorModel.updateSector = ( data ) => {
    var sql = 'CALL spUpdateSector(?, ?, ?,  ?, ?)';
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

sectorModel.deleteSector = ( idSector ) => {
    var sql = 'CALL spDeleteSector(?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, idSector, (error, rows) =>{
            if(!rows.affectedRows === 1){
                resolve(null);
            }else{
                resolve(true); 
            } 
        });
    });
}

module.exports = sectorModel;