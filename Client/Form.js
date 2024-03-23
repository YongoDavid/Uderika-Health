document.addEventListener('DOMContentLoaded' ,function() {
    const form = document.querySelector('.join__form');
    form.addEventListener('click', function(event) {
        event.preventDefault();

        const emailInput = form.querySelector('.join__input');
        const email = emailInput.value;
        const messageElement = form.querySelector('.message');
        if (email.includes('@') && email.includes('.com')) {
            messageElement.textContent = "Email sent";
            messageElement.style.color = "green";
            
            emailInput.value = "";

            form.submit();
        } else {
            messageElement.textContent = "Please enter a valid email address";
            messageElement.style.color = "red"; // Style the message in red
        }
    });
});

// Select the form element
document.addEventListener('DOMContentLoaded', function() {
    const bookForm = document.querySelector('.book-form');
    bookForm.addEventListener('click', function(event) {
        event.preventDefault();
        const emailInput1 = bookForm.querySelector('.books_input');
        const email1 = emailInput1.value;
        const messageElement1 = bookForm.querySelector('.message2');
        if (email1.includes('@') && email1.includes('.com')) {
            messageElement1.textContent = "Email sent";
            messageElement1.style.color = "green";

            emailInput1.value = "";
            
            bookForm.submit();
        } else {
            // Display the error message
            messageElement1.textContent = "Please enter a valid email address";
            messageElement1.style.color = "red"; 
        }
    });
});


