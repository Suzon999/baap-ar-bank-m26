document.getElementById("submit-btn").addEventListener("click", function () {
    const emailField = document.getElementById("email-input");
    const email = emailField.value;
    const paswordField = document.getElementById("password-input");
    const pasword = paswordField.value;
    if (email === 'suzon346112@gmail.com' && pasword === 'suzon346112') {
        window.location.href = 'bank.html';
        // console.log('Please enter   your email address');
    }
    else {
        alert("Please enter your valid username and password.");
    }
}) 