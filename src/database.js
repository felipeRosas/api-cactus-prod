const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    port: process.env.DBPORT
});

mysqlConnection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log('DB Connectd')
    }
});

module.exports = mysqlConnection;