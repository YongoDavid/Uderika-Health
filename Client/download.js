// // BOOK1 LINK insale lies 
// document.getElementById('download5').addEventListener('click' , function () {
//     let pdfuRL = 'https://drive.google.com/uc?id=1KmoyMXxEyU1aBi6IDU4GAhuxjIsCAwTU&export=download';
//     window.open(pdfuRL)
// });
// // BOOK2 LINK first aid NOT WORKING 
// document.getElementById('download2').addEventListener('click' , function () {
//     let pdfurl = 'https://drive.google.com/uc?export=download&id=14YyZdwiF2pKs7k638va8QJJOHgOo6cmM';
//     window.open(pdfurl);
// });
// // BOOKS5 LINK Hidden truth NOT WORKING
// document.getElementById('download1').addEventListener('click', function() {
//     let pdfUrl = 'https://drive.google.com/file/d/1lODIfdg76bAmpkSqLbFt-ku2KAszJTuA/view?usp=sharing';
//     window.open(pdfUrl);
// });
// // BOOKS3 LINK food for diabetic   NOT WORKING
// document.getElementById('download3').addEventListener('click' , function() {
//     let pdfUrl = 'https://drive.google.com/uc?export=download&id=14YyZdwiF2pKs7k638va8QJJOHgOo6cmM';
//     window.open(pdfUrl);
// });
// // BOOKS4 LINK untold truths NOT WORKING
// document.getElementById('download4').addEventListener('click' , function (){
//     let pdfUrl = 'https://drive.google.com/uc?id=1t0vJo5Y64QFz58PxphHTk-gSS7g2d36D&export=download';
//     window.open(pdfUrl);
// });
// // BOOK6 LINK habit traker NOT WORKING
// document.getElementById('download6').addEventListener('click', function(){
//     let pdfUrl = 'https://drive.google.com/uc?id=16YLvNfKFpBXI2smg0DihUAwZ1FRoqyws&export=download';
//     window.open(pdfUrl)
// });

document.querySelectorAll('.button2').forEach(button => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        window.location.href = url
    });
});