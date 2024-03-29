const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const db = require('./config/db'); // Import database connection setup
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

// CUSTOM MIDDLEWARE 
app.use((req,res, next)=>{
    console.log('Server running on PORT 3000')

    next()
});

// app.use(
//     cors({
//         origin: ["http"]
//     })
// )

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