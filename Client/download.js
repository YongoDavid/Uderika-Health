document.getElementById('download3').addEventListener('click', function() {
    let pdfUrl = 'https://drive.google.com/uc?id=1UN9xUxIWrxs-eDXVOeVPkaaF5cN3atMP&export=download';
    window.open(pdfUrl, '_blank');

    setTimeout(function() {
        window.location.href = 'index.html';
    }, 1000); // 3000 milliseconds = 3 seconds
});
