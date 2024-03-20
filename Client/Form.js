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

