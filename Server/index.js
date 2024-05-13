const express = require('express')
const mongoose = require('mongoose')
const fs = require('fs');
const morgan = require('morgan');
require('dotenv').config()
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');
const { timeStamp } = require('console');
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

// GOING BACK TO CLOUD DATBASE WITH MONGOOSE 
const ConnectUri = 'mongodb+srv://admin:UderikaEmail@uderikaemails.hvagnng.mongodb.net/';

// CONNECT TO MONGODB 
mongoose.connect(ConnectUri , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// CONNECTION INSTANCE 
const db = mongoose.connect();
b.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// CREATE MODEL AND SCHEMA 
const  UderikaSchema = new mongoose.Schema({
  email: String,
  created: {type: Date , default: Date.now}
});

let Emails = mongoose.model("Emails" , UderikaSchema);

// USING FS (FILE SYSTEM FOR THIS INSTEAD OF DATABSE ) 
const corsOptions = {
    // ADDED THE SERVER URL 
    origin: ["http://127.0.0.1:5500" , "https://uderika-health.onrender.com" , "https://uderika-server.onrender.com" , "https://uderika-admin.onrender.com"],
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
app.get('/email', (req, res) => {
  // Read the content of the text file
  fs.readFile('emails.txt', 'utf8', (err, data) => {
      if (err) {
          console.error('Error reading file:', err);
          res.status(500).send('Error reading file');
      } else{
        // parse the data an array of emails 
        const emails = data.trim().split('\n').map(line => {
          const [email, date] = line.split('   Date:');
          return { email, date };
        });
        res.json(emails);
      }
  });
});

// Route to handle saving emails
app.post('/email', (req, res) => {
  const email = req.body.email;
  const timestamp = new Date().toDateString();
  const data = `${email} , ${timestamp}\n`;
  const filePath = path.join(__dirname, 'emails.txt');

  fs.appendFile(filePath, data, (err) => {
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