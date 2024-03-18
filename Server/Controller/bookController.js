

const Books1 = (req,res) => {
    res.sendFile('Books1.html', { root: path.join(__dirname, '../Client') });
}
const Books2 = (req,res) => {
    res.sendFile('Books2.html', { root: path.join(__dirname, '../Client') });
}
const Books3 = (req,res) => {
    res.sendFile('Books3.html', { root: path.join(__dirname, '../Client') });
}
const Books4 = (req,res) => {
    res.sendFile('Books4.html', { root: path.join(__dirname, '../Client') });
}
const Books5 = (req,res) => {
    res.sendFile('Books5.html', { root: path.join(__dirname, '../Client') });
}
const Books6 = (req,res) => {
    res.sendFile('Books6.html', { root: path.join(__dirname, '../Client') });
}
const AudioBooks = (req,res) => {
    res.sendFile('Audio-Books.html', { root: path.join(__dirname, '../Client') });
}

module.exports = {
    Books1 ,
    Books2 ,
    Books3 ,
    Books4 ,
    Books5 ,
    Books6 ,
    AudioBooks
}