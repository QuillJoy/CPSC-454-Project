// server.js
const express = require('express');
const cors = require('cors');
const db = require('./db'); 
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
    const sqlQuery = `DESCRIBE Donors`;

    db.query(sqlQuery, (error, results) => {
        if (error) {
            console.error('Error executing query: ', error);
            res.status(500).send('Error executing query');
            return;
        }
        res.json(results);
    });
});

app.post('/api/insertDonor', (req, res) => {
    const { 
        emailAddr, 
        password, 
        firstName, 
        lastName, 
        DOB, 
        sex, 
        bloodType, 
        phoneNum
      } = req.body;

    const sqlQuery = `
        INSERT INTO Donors 
        (Email, Password, FirstName, LastName, DOB, Sex, BloodType, PhoneNumber) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sqlQuery, [emailAddr, password, firstName, lastName, DOB, sex, bloodType, phoneNum], (error, results) => {
        if (error) {
            console.error('Error executing query: ', error);
            res.status(500).send('Error executing query');
            return;
        }
        res.json({ message: 'Data inserted successfully' });
    });

});

app.post('/api/authenticateDonor', (req, res) => {
    const { email, password } = req.body;

    const sqlQuery = `SELECT * FROM Donors WHERE Email = ?`;

    db.query(sqlQuery, [email], (error, results) => {
        if (error) {
            console.error('Error executing query: ', error);
            res.status(500).send('Error executing query');
            return;
        }
        else {
            if (results.length > 0) {
                const user = results[0];
        
                if (user.Password === password) {
                    res.json({ isAuthenticated: true });
                } else {
                    res.json({ isAuthenticated: false, message: 'Incorrect password' });
                }
            } else {
                res.json({ isAuthenticated: false, message: 'Email not found' });
            }
        }
    });


});

app.post('/api/authenticateEmployee', (req, res) => {
    const { email, password } = req.body;

    const sqlQuery = `SELECT * FROM Employees WHERE Email = ?`;

    db.query(sqlQuery, [email], (error, results) => {
        if (error) {
            console.error('Error executing query: ', error);
            res.status(500).send('Error executing query');
            return;
        }
        else {
            if (results.length > 0) {
                const user = results[0];
        
                if (user.Password === password) {
                    res.json({ isAuthenticated: true, email});
                } else {
                    res.json({ isAuthenticated: false, message: 'Incorrect password' });
                }
            } else {
                res.json({ isAuthenticated: false, message: 'Email not found' });
            }
        }
    });


});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
