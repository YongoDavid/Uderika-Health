const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
app.listen(3000);

app.use(express.static(path.join(__dirname, '../Client')));
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use((req,res, next)=>{
    console.log('Server running on PORT 3000')

    next()
});


app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname,'../Client/index.html'));
    // res.sendFile('index.html' , {root: 'Client'})
    res.sendFile('index.html', { root: path.join(__dirname, '../Client') });
});
app.get('/Books1' , (req,res)=>{
    // res.sendFile(path.join(__dirname,'../Client/Books1.html'));
    // res.sendFile('Books1.html' , {root: 'Client'})
    res.sendFile('Books1.html', { root: path.join(__dirname, '../Client') });
});
app.get('/Books2' , (req,res)=>{
    // res.sendFile(path.join(__dirname,'../Client/Books2.html'));
    // res.sendFile('Books2.html' , {root:'Client'})
    res.sendFile('Books2.html', { root: path.join(__dirname, '../Client') });
});
app.get('/Books3' , (req,res)=>{
    // res.sendFile(path.join(__dirname,'../Client/Books3.html'));
    // res.sendFile('Books3.html' , {root: 'Client'})
    res.sendFile('Books3.html', { root: path.join(__dirname, '../Client') });
});
app.get('/Books4' , (req,res)=>{
    // res.sendFile(path.join(__dirname,'../Client/Books4.html'));
    // res.sendFile('Books4.html', {root: 'Client'})
    res.sendFile('Books4.html', { root: path.join(__dirname, '../Client') });
});
app.get('/Books5' , (req,res)=>{
    // res.sendFile(path.join(__dirname,'../Client/Books5.html'));
    // res.sendFile('Books5.html', {root: 'Client'})
    res.sendFile('Books5.html', { root: path.join(__dirname, '../Client') });
});
app.get('/Books6' , (req,res)=>{
    // res.sendFile(path.join(__dirname,'../Client/Books6.html'));
    // res.sendFile('Books5.html', {root: 'Client'})
    res.sendFile('Books6.html', { root: path.join(__dirname, '../Client') });
})
app.get('/Audio',(req,res)=>{
    // res.sendFile('Audio-Book.html', {root: __dirname});
    // res.sendFile('Audio-Book.html', {root: 'Client'})
    res.sendFile('Audio-Books.html', { root: path.join(__dirname, '../Client') });
});
app.get('/About',(req,res)=>{
    // res.sendFile('AboutUs.html' , {root: __dirname});
    // res.sendFile('AboutUs.html', {root: 'Client'})
    res.sendFile('AboutUs.html', { root: path.join(__dirname, '../Client') });
});
app.use((req,res)=>{
    // res.status(404).sendFile('404.html' , {root: 'Client'})
    res.status(404).sendFile('404.html', { root: path.join(__dirname, '../Client') });
});