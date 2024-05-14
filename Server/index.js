const express = require('express');
const mongoose = require('mongoose');
// const fs = require('fs');
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
// ${process.env.MONGODB_PASSWORD}

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

// STOPPED HERE THERE ARE ERRORS THAT NEED ATTENTION 
// Assuming you receive email data from the client side
// const emailData = {
//   email: 'uderiak@gmail.com', // Replace with the actual email received from the client
// };

// Create a new Email document


// HANDLE POST REQUEST 
app.post('/email' , (req,res) => {
  const { email } = req.body;

  // CHECK IF EMAIL IS APPROVED 
  if(!email){
    return res.status(400).json({error: 'Email required'});
  }

  // CREATE A NEW INSTANCE WITH THE EMAIL RECEIVED 
  const newEmail = new Email({ email });

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
  next();
});
app.use(express.static(path.join(__dirname, '../Client')));


// // AND ACCESS THE EMAILS THROUGH THIS ROUTE ON THE HOSTED LINK 
// app.get('/email', (req, res) => {
//   // Read the content of the text file
//   fs.readFile('emails.txt', 'utf8', (err, data) => {
//       if (err) {
//           console.error('Error reading file:', err);
//           res.status(500).send('Error reading file');
//       } else{
//         // parse the data an array of emails 
//         const emails = data.trim().split('\n').map(line => {
//           const [email, date] = line.split('   Date:');
//           return { email, date };
//         });
//         res.json(emails);
//       }
//   });
// });

// // Route to handle saving emails
// app.post('/email', (req, res) => {
//   const email = req.body.email;
//   const timestamp = new Date().toDateString();
//   const data = `${email} , ${timestamp}\n`;
//   const filePath = path.join(__dirname, 'emails.txt');

//   fs.appendFile(filePath, data, (err) => {
//     if (err) {
//       console.error('Error saving email:', err);
//       res.status(500).send('Error saving email');
//     } else {
//       console.log('Email saved:', email);
//       res.sendStatus(200);
//     }
//   });
// });


// START THE SERVER  
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});