// // NEWS LETTER FORM 
// document.addEventListener('DOMContentLoaded' ,function() {
//     const form = document.querySelector('.join__form');
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const emailInput = form.querySelector('.join__input');
//         const email = emailInput.value;
//         const messageElement = form.querySelector('.message');
//         if (email.includes('@') && email.includes('.com')) {
//             messageElement.textContent = "Email sent";
//             messageElement.style.color = "green";
            
//             emailInput.value = "";
//             // console.log(email)
//             form.submit();
//         } else {
//             messageElement.textContent = "Please enter a valid email address";
//             messageElement.style.color = "red"; // Style the message in red
//         };

//         // Sending form data client to server uing fetch api 
//         fetch('/Email', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ email: email })
//         })
//         .then(response => {
//             if (response.ok) {
//                 console.log('Email data sent successfully');
//             } else {
//                 console.error('Failed to send email data:', response.status);
//             }
//         })
//         .catch(error => {
//             console.error('Error sending email data:', error);
//         });
//     });
// });

// NEWSLETTER FORM
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.join__form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailInput = form.querySelector('.join__input');
        const email = emailInput.value;
        const messageElement = form.querySelector('.message');
        if (email.includes('@') && email.includes('.com')) {
            messageElement.textContent = "Email sent";
            messageElement.style.color = "green";

            emailInput.value = "";
            fetch('/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email })
            })
            .then(response => {
                if (response.ok) {
                    console.log('Email data sent successfully');
                } else {
                    // Check if response status is available
                    if (response.status) {
                        console.error('Failed to send email data:', response.status);
                    } else {
                        console.error('Failed to send email data: Unknown error');
                    }
                }
            })
            .catch(error => {
                console.error('Error sending email data:', error);
            });            
        } else {
            messageElement.textContent = "Please enter a valid email address";
            messageElement.style.color = "red"; // Style the message in red
        };
    });
});


// BOOKS FORM 
document.addEventListener('DOMContentLoaded', function() {
    const bookForm = document.querySelector('.book-form');
    const downloadButtons = document.querySelectorAll('.button2');

    // Function to handle form submission and download
    function handleFormSubmissionAndDownload(event) {
        event.preventDefault();
        
        // Get email input and message element
        const emailInput = bookForm.querySelector('.books_input');
        const email = emailInput.value;
        const messageElement = bookForm.querySelector('.message2');

        // Validate email address
        if (email.includes('@') && email.includes('.com')) {
            messageElement.textContent = "Email sent";
            messageElement.style.color = "green";

            emailInput.value = "";
            // Send form data to server
            fetch('/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: email})
            })
            .then(response =>{
                if(response.ok){
                    console.log('Email data sent successfully');
                } else {
                    console.error('Error: Failed to send email data:', response.status);
                }
            })
            .catch(error => {
                console.error('Error sending email data:', error);
            });

            // Clear email input field
        } else {
            // Display error message for invalid email
            messageElement.textContent = "Please enter a valid email address";
            messageElement.style.color = "red"; 
            return; // Stop further execution if email is invalid
        }

        // Get the URL for download
        const url = this.getAttribute('data-url');
        // Trigger download
        window.location.href = url;
    }

    // Attach event listeners to all download buttons
    downloadButtons.forEach(button => {
        button.addEventListener('click', handleFormSubmissionAndDownload);
    });
});
