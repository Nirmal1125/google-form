document.addEventListener('DOMContentLoaded', function() {
    // Your script code here
    // Function to validate form inputs
    function validateForm() {
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;

        // Example validation (you can expand this)
        if (firstname === '' || lastname === '' || email === '') {
            alert('Please fill out all required fields.');
            return false; // Validation failed
        }

        return true; // Validation passed
    }

    // Function to submit the form
    function submitForm() {
        window.location.href = "conformation.html"; // Redirect to confirmation page
    }

    // Event listener for form submission
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // If validation fails, do not proceed
        if (!validateForm()) {
            return;
        }

        // If validation passes, log the form values and submit the form
        logFormValues();
        submitForm();
    });

    
    // Function to log form values
function logFormValues() {
    const A = document.getElementById('firstname').value;
    console.log('First Name: ' + A);

    const B = document.getElementById('middlename').value;
    console.log('Middle Name: ' + B);

    const C = document.getElementById('lastname').value;
    console.log('Last Name: ' + C);

    const D = document.querySelector('input[name="gender"]:checked').value;
    console.log('Gender: ' + D);

    const E = document.getElementById('dob').value;
    console.log('Date of Birth: ' + E);

    const F = document.getElementById('blood-group').value;
    console.log('Blood Group: ' + F);

    const G = document.getElementById('nationality').value;
    console.log('Nationality: ' + G);

    const H = document.getElementById('email').value;
    console.log('Email: ' + H);

    const I = document.querySelector('input[name="status"]:checked').value;
    console.log('Current Status: ' + I);
}
});










