// PDF BOOKS 
document.querySelectorAll('.button2').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const url = button.getAttribute('data-url');
        window.location.href = url
    });
});

// AUDIO BOOKS 
document.querySelectorAll('.button2.audio-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const url = button.getAttribute('data-url');
        window.location.href = url;
    });
});


