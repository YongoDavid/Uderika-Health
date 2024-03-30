document.addEventListener('DOMContentLoaded' ,function() {
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
            // console.log(email)
            form.submit();
        } else {
            messageElement.textContent = "Please enter a valid email address";
            messageElement.style.color = "red"; // Style the message in red
        };

        fetch('/Email', {
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
                console.error('Failed to send email data:', response.status);
            }
        })
        .catch(error => {
            console.error('Error sending email data:', error);
        });
    });
});

// // Select the form element

// // document.addEventListener('DOMContentLoaded', function() {
// //     const form = document.querySelector('.join__form');
// //     form.addEventListener('submit', async function(event) {
// //         event.preventDefault();

// //         const emailInput = form.querySelector('.join__input');
// //         const email = emailInput.value.trim(); // Trim whitespace from the input
// //         const messageElement = form.querySelector('.message');
        
        


// //         // Basic email validation using regex
// //         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //         if (emailRegex.test(email)) {
// //             try {
// //                 // Simulate asynchronous form submission
// //                 // Replace this with actual asynchronous form submission logic
// //                 await simulateFormSubmission();

// //                 // Provide visual feedback
// //                 messageElement.textContent = "Email sent";
// //                 messageElement.style.color = "green";
// //                 emailInput.value = ""; // Clear the input field
// //             } catch (error) {
// //                 console.error('Error submitting form:', error);
// //                 messageElement.textContent = "Error submitting form";
// //                 messageElement.style.color = "red";
// //             }
// //         } else {
// //             messageElement.textContent = "Please enter a valid email address";
// //             messageElement.style.color = "red";
// //         }
// //     });

// //     // Simulate asynchronous form submission (replace with actual logic)
// //     function simulateFormSubmission() {
// //         return new Promise(resolve => {
// //             setTimeout(resolve, 1000); // Simulate 1 second delay
// //         });
// //     }
// // });



// // document.addEventListener('DOMContentLoaded', function() {
// //     const bookForm = document.querySelector('.book-form');
// //     bookForm.addEventListener('click', function(event) {
// //         event.preventDefault();
// //         const emailInput1 = bookForm.querySelector('.books_input');
// //         const email1 = emailInput1.value;
// //         const messageElement1 = bookForm.querySelector('.message2');
// //         if (email1.includes('@') && email1.includes('.com')) {
// //             messageElement1.textContent = "Email sent";
// //             messageElement1.style.color = "green";

// //             emailInput1.value = "";
            
// //             bookForm.submit();
// //         } else {
// //             // Display the error message
// //             messageElement1.textContent = "Please enter a valid email address";
// //             messageElement1.style.color = "red"; 
// //         }
// //     });
// // });
