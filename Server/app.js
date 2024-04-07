const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const path = require('path');
// const db = require('./config/db'); // Import database connection setup
const cors = require('cors');
const mongoose = require('mongoose');
const {Schema } = mongoose;
const dbURL = 'mongodb+srv://davidyongo9:JdXL4sU9KgNS4PG7@uderika-emails.plbqwuf.mongodb.net/';
mongoose.connect(dbURL)
const app = express();

app.use(express.static(path.join(__dirname, '../Client')));
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
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
const emailSchema = new Schema({
    email: String,
  });
  
  const Email = mongoose.model('Email', emailSchema);
  
  // EMAIL ROUTE
  app.post('/Email', async (req, res) => {
    try {
      const { email } = req.body;
      const newEmail = new Email({ email });
      await newEmail.save();
      res.status(201).send('Email saved successfully');
    } catch (error) {
      console.error('Error saving email:', error);
      res.status(500).send('Internal Server Error');
    }
  });
    // const { email} = req.body;
    // // for email 
    // // console.log('Email received:', email);
    // res.sendStatus(200); // Send a response to the client
    // // const id = uuid.v4()
    // if (!email ) {
    //     return res.status(400).json({ error: 'Invalid email address' });
    // }

    // ANOTHER WAY TO CONNECT TO DB 
    // const insertQuery = ' INSERT INTO Uderika`.`Email` (`Emails`) VALUES (?)' 
    // db.query(insertQuery, [email], (err, result) => {
    //     if (err) {
    //         console.error('Error storing email:', err);
    //         return res.status(500).json({ error: 'Internal server error' });
    //     }
    //     console.log('Email stored successfully:', email);
    //     return res.status(200).json({ message: 'Email saved' });
    // });
   
    // SIMPLE WAY TO CONNECT TO DB 
    // let sql = `INSERT INTO Emails (Emails)
    // VALUES ('${email}')
    // `
    // db.execute(sql)


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