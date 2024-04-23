const express = require('express')
const fs = require('fs');
const morgan = require('morgan');
require('dotenv').config()
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

       // USING FS (FILE SYSTEM FOR THIS INSTEAD OF DATABSE ) 

const corsOptions = {
    origin: ["https://uderika-admin.onrender.com" , "https://uderika-health.onrender.com"],
    // credentials: true,
    methods: ['GET', 'POST'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
};

app.use(cors(corsOptions));
app.use(express.json());
app.use((req,res, next)=>{
  console.log('Server running on LIVE')
  next()
});
app.use(express.static(path.join(__dirname, '../Client')));


// AND ACCESS THE EMAILS THROUGH THIS ROUTE ON THE HOSTED LINK 
app.get('/emails', (req, res) => {
  // Read the content of the text file
  fs.readFile('emails.txt', 'utf8', (err, data) => {
      if (err) {
          console.error('Error reading file:', err);
          res.status(500).send('Error reading file');
      } else {
          // Parse the data into an array of emails
          const emails = data.trim().split('\n');
          res.json(emails);
      }
  });
});


// THIS ROUTE GETS THE EMAIL AND SEND THEN TO A TXT FILE INSTEAD OF DATABASE 
// app.post('/Email',(req,res)=>{
//   const email = req.body.email;
//   const timestamp = new Date().toISOString();
//   const data = `${email},${timestamp}\n`;

//   fs.appendFile('emails.txt',email , data+ '\n' ,(err) => {
//     if(err){
//       console.error('Error saving email:', err);
//       res.status(500).send('Error saving email');
//     } else {
//       console.log('Email saved:', email);
//       res.sendStatus(200);
//     }
//   });
// });


// app.post('/Email', (req, res) => {
//   const email = req.body.email;
//   const timestamp = new Date().toDateString();
//   const data = `${email} Date:${timestamp}`;

//   fs.appendFile('emails.txt', data, (err) => {
//     if (err) {
//       console.error('Error saving email:', err);
//       res.status(500).send('Error saving email');
//     } else {
//       console.log('Email saved:', email);
//       res.sendStatus(200);
//     }
//   });
// });

app.post('/Email', (req, res) => {
  const email = req.body.email;
  const timestamp = new Date().toDateString(); // Use toDateString() to get only the date

  // Each entry is appended separately
  fs.appendFile('emails.txt', email + '\n', (err) => {
    if (err) {
      console.error('Error saving email:', err);
      res.status(500).send('Error saving email');
    } else {
      console.log('Email saved:', email);
      
      // Append timestamp after the email
      fs.appendFile('emails.txt', timestamp + '\n', (err) => {
        if (err) {
          console.error('Error saving timestamp:', err);
          res.status(500).send('Error saving timestamp');
        } else {
          console.log('Timestamp saved:', timestamp);
          res.sendStatus(200);
        }
      });
    }
  });
});


// START THE SERVER  
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});