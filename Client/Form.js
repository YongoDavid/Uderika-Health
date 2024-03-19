// NEWS LETTER FORM
const details = document.querySelectorAll('input')
const btn = document.querySelector('.join__button')
const msg = document.querySelector('.message')


btn.addEventListener('click' , (e) => {
    e.preventDefault()
    msg.innerText = ''

    if(!details.value){
        msg.innerText = 'Please enter email'
    } else if (details.includes('@') && details.includes('.com')){
        msg.innerText = 'email sent'
    } else {
        console.log('error')
    }
});

// BOOKS FORM 
// const details2 = document.querySelectorAll('input')
// const btn2 = document.querySelector('.button2')
// const msg2 = document.querySelector('.message2')

// btn2.addEventListener('click' , (e) => {
//     e.preventDefault()
//     msg2.innerText = ''

//     if(!details2.value){
//         msg2.innerText = 'Please enter email'
//     } else if (details.includes('@') && details.includes('.com')){
//         msg2.innerText = 'email sent'
//     } else {
//         console.log('error')
//     }
// });























// BOOKS FORM 
// const Books = document.querySelectorAll('.books_form')
// const button2 = document.querySelector('.button2')
// const msg_Book = document.querySelector('.message')

// button2.addEventListener('click', (e) => { // Corrected 'click' event
//     e.preventDefault()
//     msg_Book.innerText = ''

//     // Assuming you want to check if any of the input fields with class .books_form is empty
//     let isEmpty = false;
//     Books.forEach(book => {
//         if (!book.value.trim()) {
//             isEmpty = true;
//         }
//     });

//     if(isEmpty || (!details.includes('.com') && !details.includes('@'))) {
//         msg_Book.innerText = 'Please enter a valid email';
//     } else {
//         console.log('There is no email here');
//     }
// });


