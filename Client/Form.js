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

        // Sending form data client to server uing fetch api 
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

document.addEventListener('DOMContentLoaded', function() {
    const bookForm = document.querySelector('.book-form');
    bookForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = bookForm.querySelector('.books_input');
        const email = emailInput.value;
        const messageElement = bookForm.querySelector('.message2');
        if (email.includes('@') && email.includes('.com')) {
            messageElement.textContent = "Email sent";
            messageElement.style.color = "green";

            emailInput.value = "";
            // console.log(email1)
            bookForm.submit();
        } else {
            // Display the error message
            messageElement.textContent = "Please enter a valid email address";
            messageElement.style.color = "red"; 
        };

        // sending form data from client to server using fetch api 
        fetch('/Email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email})
        })
        .then(response =>{
            if(response.ok){
                console.log('Emaill data sent successffully')
            }else {
                console.error('Error Filed to send email data:' , response.status);
            }
        })
        .catch(error => {
            console.error('Error sending email data' , error);
        });
    });
});
