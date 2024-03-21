document.getElementById('download3').addEventListener('click', function() {
    let pdfUrl = 'https://drive.google.com/uc?id=1UN9xUxIWrxs-eDXVOeVPkaaF5cN3atMP&export=download';
    window.open(pdfUrl, '_blank');

    setTimeout(function() {
        window.location.href = 'YOUR_MAIN_PAGE_URL';
    }, 3000); // 3000 milliseconds = 3 seconds
});
