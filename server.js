// server.js
const express = require('express');
const cors = require('cors');
const db = require('./db'); 
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

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

app.get('/api/getID', (req, res) => {
    const sqlQuery = `SELECT DonorID FROM Donors where Email = ?`;
    const email = req.query.email

    db.query(sqlQuery, email, (error, results) => {
        if (error) {
            console.error('Error executing query: ', error);
            res.status(500).send('Error executing query');
            return;
        }

        if (results.length > 0) {
            res.json(results[0].DonorID);
        } else {
            res.status(404).send('No donor found with this email');
        }
    });
});

app.get('/api/getAppointments', (reg, res) => {
    const sqlQuery = `
        SELECT * FROM Appointments where FDonorID = ?`;
    const donorID = reg.query.DonorID;

    db.query(sqlQuery, donorID, (error, results) => {
        if (error) {
            console.error('Error executing query: ', error);
            res.status(500).send('Error executing query');
            return;
        }

        if (results.length > 0) {
            res.json(results);
        } else {
            res.status(404).send('No donor found with this id');
        }
    });

});

app.get('/api/getDonors', (reg, res) => {
    const sqlQuery = `
        SELECT * FROM Donors`;

    db.query(sqlQuery, (error, results) => {
        if (error) {
            console.error('Error executing query: ', error);
            res.status(500).send('Error executing query');
            return;
        }

        if (results.length > 0) {
            res.json(results);
        } else {
            res.status(404).send('err');
        }
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

app.post('/api/insertAppointment', (req, res) => {
    const { donorID, month, day, year } = req.body;

    const sqlQuery = `
        INSERT INTO Appointments 
        (FDonorID, month, day, year) 
        VALUES (?, ?, ?, ?)
    `;

    db.query(sqlQuery, [donorID, month, day, year], (error, results) => {
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


const transporter = nodemailer.createTransport(smtpConfig);

app.post('/send-notification', async (req, res) => {
    const { recipientEmail, subject, message } = req.body;

    const mailOptions = {
        from: 'your_email@example.com',
        to: recipientEmail,
        subject: subject,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: 'Notification sent successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Unable to send notification' });
    }
});







app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
