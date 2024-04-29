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
    origin: ["http://127.0.0.1:5500" , "https://uderika-health.vercel.app" , "https://uderika-admin.vercel.app"],
    credentials: true,
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
      } else{
        // parse the data an array of emails 
        const emails = data.trim().split()('\n').map(line =>{
          const [email, date] = line.split('   Date:');
          return {email , date};
        });
        res.json(emails);
      }
  });
});

app.post('/Email', (req, res) => {
  const email = req.body.email;
  const timestamp = new Date().toDateString();
  const data = `${email} ${timestamp}\n`;

  fs.appendFile('emails.txt', data, (err) => {
    if (err) {
      console.error('Error saving email:', err);
      res.status(500).send('Error saving email');
    } else {
      console.log('Email saved:', email);
      res.sendStatus(200);
    }
  });
});


// START THE SERVER  
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});