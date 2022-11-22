const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'datt'
})

connection.connect(function (err) {
    if (err) {
        console.log('Connection Error.');
        return;
    }
    console.log('Connection Established')
});

connection.end()

module.exports = connection;