const express = require('express');
const morgan = require('morgan');
require('dotenv').config()
const bodyParser = require('body-parser')
const path = require('path');
// const db = require('./config/db'); // Import database connection setup/÷
const cors = require('cors');
const mysql = require('mysql2');
// const mongoose = require('mongoose');
// const {Schema } = mongoose;
// const dbURL = process.env.DB_CONNECTION_STRING;
// mongoose.connect(dbURL)
const app = express();

app.use(express.static(path.join(__dirname, '../Client')));
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
// app.use(bodyParser.json());
// // CUSTOM MIDDLEWARE 
app.use((req,res, next)=>{
    console.log('Server running on LIVE')
    next()
});

app.use(
    cors({
        origin: ["http://127.0.0.1:5500" , "https://uderika-health.onrender.com"],
        credentials: true
    })
)
app.use(express.json());

// EMAIL SCHEMA 
// const emailSchema = new Schema({
//     email: String,
//   });
  
//   const Email = mongoose.model('Email', emailSchema);
  
//   // EMAIL ROUTE
//   app.post('/Email', async (req, res) => {
//     try {
//       const { email } = req.body;
//       const newEmail = new Email({ email });
//       await newEmail.save();
//       res.status(201).send('Email saved successfully');
//     } catch (error) {
//       console.error('Error saving email:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   });

// Create connection to MySQL database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
  });
  
  // Connect to MySQL database
  connection.connect(err => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });
  
  // Middleware to parse JSON bodies
  app.use(bodyParser.json());
  
  // Route to handle incoming email data
  app.post('/Email', (req, res) => {
    const { email } = req.body;
  
    // Insert email into the database
    const sql = 'INSERT INTO Emails (Emails) VALUES (?)';
    connection.query(sql, [email], (err, result) => {
      if (err) {
        console.error('Error inserting email into database:', err);
        res.status(500).json({ error: 'Failed to save email to database' });
        return;
      }
      console.log('Email saved to database');
      res.sendStatus(200); // Send success response
    });
});
  
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// START THE SERVER  
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});