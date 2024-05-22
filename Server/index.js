const express = require('express');
const mongoose = require('mongoose');
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
    origin: [ "https://uderika-health.onrender.com" , "https://uderika-server.onrender.com", "https://uderika-admin.onrender.com"],
    credentials: true,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']                                                                                                                                                                                                                                                                                                                                                                                                                                                               
};

app.use(cors(corsOptions));
app.use(express.json());
app.use((req,res, next)=>{
  console.log('Server running on LIVE')
  next();
});
app.use(express.static(path.join(__dirname, '../Client')));

// GOING BACK TO CLOUD DATBASE WITH MONGOOSE 
const ConnectUri = 'mongodb+srv://admin:UderikaEmail@uderikaemails.hvagnng.mongodb.net/';

// CONNECT TO MONGODB 
mongoose.connect(ConnectUri , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// CONNECTION INSTANCE 
const db = mongoose.connection;

// EVENT LISTENERS FOR MONGODB CONNECTION 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// CREATE EMAIL SCHEMA 
const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  timestamp:{
    type: Date,
    default: Date.now,
  },
});
// CREATE MODEL 
const Email = mongoose.model('Email', emailSchema);

// HANDLE POST REQUEST 
app.post('/email' , (req,res) => {
  const { email } = req.body;

  // CHECK IF EMAIL IS APPROVED 
  if(!email){
    return res.status(400).json({error: 'Email required'});
  }

  // CREATE A NEW INSTANCE WITH THE EMAIL RECEIVED
  const newEmail = new Email({ email, timestamp: new Date() }); // Include timestamp when saving email

  // Save the new email document to the database
  newEmail.save()
  .then(savedEmail => {
      console.log('Email saved:', savedEmail);
      res.status(200).json({message: 'Email saved successfully'});
  })
  .catch(error => {
      console.error('Error saving email:', error);
      res.status(500).json({error:'Internal server error'});
  });
});

// Handle GET requests to '/api/emails' endpoint
app.get('/api/emails', (req, res) => {
  Email.find({})
    .then(emails => {
      res.json(emails);
    })
    .catch(error => {
      console.error('Error fetching emails:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

// START THE SERVER  
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});