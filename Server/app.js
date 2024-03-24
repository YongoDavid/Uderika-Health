const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
// const bookRoutes = require('./Routes/bookRoute')
app.listen(3000);

app.use(express.static(path.join(__dirname, '../Client')));
app.use(express.static(path.join(__dirname , '/Users/wikiwoo/Desktop/Uderika-Project/Client')));
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use((req,res, next)=>{
    console.log('Server running on PORT 3000')

    next()
});

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
app.get('/About',(req,res)=>{
    res.sendFile('AboutUs.html', { root: path.join(__dirname, '../Client') });
});
// app.use(bookRoutes);
app.use((req,res)=>{
    res.status(404).sendFile('404.html', { root: path.join(__dirname, '../Client') });
});