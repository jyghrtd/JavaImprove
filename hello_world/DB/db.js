const mysql = require('mysql');

var pp_db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'scott',
    password: 'tiger',
    database: 'PorkPointDB'
})
pp_db.connect();

module.exports = pp_db;

// pp_db.query('SELECT * from ', function(error, res) {
//     if(error) {
//         console.log(error);
//     }
//     console.log(res);
// });