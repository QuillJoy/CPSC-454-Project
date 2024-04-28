// server.js
const express = require('express');
const cors = require('cors');
const db = require('./db'); // import the database connection

const app = express();

app.use(cors());

app.get('/api/data', (req, res) => {
    // Construct the SQL query with a placeholder for the table name
    const sqlQuery = `DESCRIBE Donors`;

    // Execute the query
    db.query(sqlQuery, (error, results) => {
        if (error) {
            console.error('Error executing query: ', error);
            res.status(500).send('Error executing query');
            return;
        }
        res.json(results);
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
