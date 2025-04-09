const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,  // Added port configuration
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const connect = (callback) => {
    connection.connect((err) => {
        if (err) {
            callback(err);
            return;
        }
        console.log(`Connected to MySQL database on port ${process.env.DB_PORT}`);
        callback(null);
    });
};

module.exports = {
    connection,
    connect
};