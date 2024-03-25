// // BOOK6 LINK habit traker NOT WORKING
// document.getElementById('download6').addEventListener('click', function(){
//     let pdfUrl = 'https://drive.google.com/uc?id=16YLvNfKFpBXI2smg0DihUAwZ1FRoqyws&export=download';
//     window.open(pdfUrl)
// });

// PDF BOOKS 
document.querySelectorAll('.button2').forEach(button => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        window.location.href = url
    });
});

// AUDIO BOOKS 
document.querySelectorAll('.button2.audio-btn').forEach(button => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        window.location.href = url;
    });
});
