const express = require('express');
const fs = require('fs')
const morgan = require('morgan');
require('dotenv').config()
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');
const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
// // CUSTOM MIDDLEWARE 
app.use(
    cors({
        origin: ["http://127.0.0.1:5500" , "https://uderika-health.onrender.com"],
        credentials: true
    })
)
app.use(express.json());
app.use((req,res, next)=>{
  console.log('Server running on LIVE')
  next()
});
app.use(express.static(path.join(__dirname, '../Client')));

// Route to provide the content of the text file
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


// START THE SERVER  
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});