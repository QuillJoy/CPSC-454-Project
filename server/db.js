const mysql = require('mysql');

function connectToDatabase() {
    const connection = mysql.createConnection({
        host: '',
        port: '3306',
        user: 'Ubuntu', 
        password: 'password', 
        database: 'bb_db'
    });

    connection.connect(error => {
        if (error) {
            console.error('Error connecting to the database: ', error);
            return;
        }
        console.log('Connected to the MySQL server.');
    });

    return connection;
}

const dbConnection = connectToDatabase();

module.exports = dbConnection;
