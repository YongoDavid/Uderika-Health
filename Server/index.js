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


// Route to provide the content of the text file
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
app.post('/Email',(req,res)=>{
  const email = req.body.email;

  fs.appendFile('emails.txt',email + '\n' ,(err) => {
    if(err){
      console.error('Error saving email:', err);
      res.status(500).send('Error saving email');
    } else {
      console.log('Email saved:', email);
      res.sendStatus(200);
    }
  });
});


// Route to handle saving emails
// app.post('/Email', (req, res) => {
//   const email = req.body.email;

//   // Append email to text file or create it if it doesn't exist
//   try {
//       fs.appendFileSync('emails.txt', email + '\n');
//       // ADDING EMAIL TO NEW LINK WITH  '\n' 
//       console.log('Email saved:', email + '\n');
//       res.sendStatus(200);
//   } catch (err) {
//       console.error('Error saving email:', err);
//       res.status(500).send('Error saving email');
//   }
// });

// START THE SERVER  
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});