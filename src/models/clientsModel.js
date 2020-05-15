const db = require('../database');

var clientsModel = {};

clientsModel.getClients = () => {
    var sql = 'CALL spGetAllClients()';
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

clientsModel.getClientById = ( idClient ) => {
    var sql = 'CALL spGetClientsById(?)';
    return new Promise((resolve, reject) =>{
        db.query(sql, idClient, (error, rows) =>{
            if(Object.keys(rows[0]).length === 0){
                resolve(null);
            }else{
                const { idClient, name, rut, dv, telephone, mail, createdAt } = rows[0][0];
                const client = {
                    idClient, name, rut, dv, telephone, mail, createdAt
                }
                resolve(client);
            }
        });
    });
}

clientsModel.insertClient = ( data ) => {
    var sql = 'CALL spInsertClient(?, ?, ?, ?, ?)';
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

clientsModel.updateClient = ( data ) => {
    var sql = 'CALL spUpdateClient(?, ?, ?, ?, ?, ?)';
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

clientsModel.deleteClient = ( idClient ) => {
    var sql = 'CALL spDeleteClient(?)'
    return new Promise((resolve, reject) =>{
        db.query(sql, idClient, (error, rows) =>{
            if(!rows.affectedRows === 1){
                resolve(null);
            }else{
                resolve(true); 
            } 
        });
    });
}

module.exports = clientsModel;