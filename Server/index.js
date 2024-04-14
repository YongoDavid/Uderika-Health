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