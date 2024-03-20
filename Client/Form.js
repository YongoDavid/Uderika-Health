const form = document.querySelector('.join__form');
// Add an event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = form.querySelector('.join__input');
    const email = emailInput.value;
    const messageElement = form.querySelector('.message');
    if (email.includes('@') && email.includes('.com')) {
        messageElement.textContent = "Email sent";
        messageElement.style.color = "green";
        
        emailInput.value = "";

        // Optionally, you can submit the form here
        // form.submit();
    } else {
        messageElement.textContent = "Please enter a valid email address";
        messageElement.style.color = "red"; // Style the message in red
    }
});

// Select the form element
const bookForm = document.querySelector('.book-form');
bookForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = bookForm.querySelector('.books_input');
    const email = emailInput.value;
    const messageElement = bookForm.querySelector('.message2');
    if (email.includes('@') && email.includes('.com')) {
        // Display the success message
        messageElement.textContent = "Email sent";
        messageElement.style.color = "green"; 
        emailInput.value = "";

        // Optionally, you can submit the form here
        // bookForm.submit();
    } else {
        // Display the error message
        messageElement.textContent = "Please enter a valid email address";
        messageElement.style.color = "red"; // Style the message in red
    }
});


