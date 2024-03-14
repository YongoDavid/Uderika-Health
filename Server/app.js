const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.listen(5500);
mongoose.connect()
const dbURI = ''
mongoose.connect(dbURI)

// MIDDLE WARES
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static('assets'));

app.use((req,res, next)=>{
    console.log('The Server has started')
    next()
});

app.get('/' , (req,res)=>{
    res.sendFile('index.hmtl' , {root: __dirname})
});
app.get('/Books1' , (req,res)=>{
    res.sendFile('Books1.html' , {root: __dirname})
});
app.get('/Books2' , (req,res)=>{
    res.sendFile('Books2.html' , {root: __dirname})
});
app.get('/Books3' , (req,res)=>{
    res.sendFile('Books3.html' , {root: __dirname})
});
app.get('/Books4' , (req,res)=>{
    res.sendFile('Books4.html' , {root: __dirname})
});
app.get('/Books5' , (req,res)=>{
    res.sendFile('Books5.html' , {root: __dirname})
});
app.get('/Books6' , (req,res)=>{
    res.sendFile('Books6.html' , {root: __dirname})
})
app.get('/Audio',(req,res)=>{
    res.sendFile('Audio-Book.html', {root: __dirname})
});
app.get('/About',(req,res)=>{
    res.sendFile('AboutUs.html' , {root: __dirname})
});

app.use((req,res)=>{
    res.sendFile('404.html' , {root: __dirname})
})