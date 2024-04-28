const mysql = require('mysql');

function connectToDatabase() {
    const connection = mysql.createConnection({
        host: '192.168.1.4', // replace with the IP address of your VM
        port: '3306',
        user: 'MSI.lan', // replace with your MySQL username
        password: 'p1', // replace with your MySQL password
        database: 'bb_db' // replace with your database name
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
