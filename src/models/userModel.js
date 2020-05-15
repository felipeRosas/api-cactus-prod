const db = require('../database');

var userModel = {};

userModel.signIn = (email, pass) => {
    var sql = 'CALL spValidarLogin(?,?)';
    var values = [email, pass];
    return new Promise((resolve, reject)=>{
        db.query(sql, values, (error, rows)=>{
            if(Object.keys(rows[0][0]).length === 0){
                resolve(null);
            }else{
                const {idUser, tipoUsuario, name} = rows[0][0];
                const user = {
                    idUser, tipoUsuario, name
                }
                resolve(user);
            }
        });
    });
}

userModel.getUser = () => {
    var sql = 'CALL spGetAllUsers()';
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

userModel.validateMail = (mail) => {
    var sql = 'CALL spValidarMail(?)';
    var values = [mail];
    return new Promise((resolve, reject)=>{
        db.query(sql, values, (error, rows)=>{
            if(Object.keys(rows[0][0]).length === 0){
                resolve(null);
            }else{
                const {idUser, tipoUsuario, name, password} = rows[0][0];
                const user = {
                    idUser, tipoUsuario, name, password
                }
                resolve(user);
            }
        });
    });
}

userModel.insertUser = ( data ) => {
    var sql = 'CALL spInsertUser(?, ?, ?, ?)';
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

module.exports = userModel;