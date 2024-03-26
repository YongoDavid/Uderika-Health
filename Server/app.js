const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const path = require('path');
const db = require('./config/db'); // Import database connection setup
const isValidEmail = require('../Client/Form'); // Import email validation function
const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../Client')));
// app.use(express.static(path.join(__dirname , '/Users/wikiwoo/Desktop/Uderika-Project/Client')));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

// CUSTOM MIDDLEWARE 
app.use((req,res, next)=>{
    console.log('Server running on PORT 3000')

    next()
});

// ROUTES 
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../Client') });
});
app.get('/Books1' , (req,res)=>{
    res.sendFile('Books1.html', { root: path.join(__dirname, '../Client') });
});
app.get('/Books2' , (req,res)=>{
    res.sendFile('Books2.html', { root: path.join(__dirname, '../Client') });
});
app.get('/Books3' , (req,res)=>{
    res.sendFile('Books3.html', { root: path.join(__dirname, '../Client') });
});
app.get('/Books4' , (req,res)=>{
    res.sendFile('Books4.html', { root: path.join(__dirname, '../Client') });
});
app.get('/Books5' , (req,res)=>{
    res.sendFile('Books5.html', { root: path.join(__dirname, '../Client') });
});
app.get('/Books6' , (req,res)=>{
    res.sendFile('Books6.html', { root: path.join(__dirname, '../Client') });
})
app.get('/Audio',(req,res)=>{
    res.sendFile('Audio-Books.html', { root: path.join(__dirname, '../Client') });
});

// EMAIL ROUTE 
app.post('/Email', (req, res) => {
    const { email } = req.body;

    if (!email || !isValidEmail(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    const insertQuery = 'INSERT INTO `Uderika`.`Email` (`Emails`) VALUES (?)';
    db.query(insertQuery, [email], (err, result) => {
        if (err) {
            console.error('Error storing email:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        console.log('Email stored successfully:', email);
        return res.status(200).json({ message: 'Email saved' });
    });
});

app.get('/About',(req,res)=>{
    res.sendFile('AboutUs.html', { root: path.join(__dirname, '../Client') });
});

// 404 ROUTE 
app.use((req,res)=>{
    res.status(404).sendFile('404.html', { root: path.join(__dirname, '../Client') });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// START THE SERVER  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});