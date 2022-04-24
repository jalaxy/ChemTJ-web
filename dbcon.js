'use strict';
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'user123',
    database: 'chemical'
});

con.connect((err) => {
    if (err) throw (err);
    console.log("Database connected.");
});

//con.query('select 1 + 1 as `solution`', (err, rows, fields) => {
//    if (err) throw (err);
//    console.log('The solution is: ', rows[0].solution);
//})

module.exports = con;
