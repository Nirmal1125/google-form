document.addEventListener('DOMContentLoaded', function() {
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
        setTimeout(function() {
            window.location.href = "conformation.html";
        }, 3000);
    }

    // Event listener for form submission
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            
            
            if (!validateForm()) {
                return;
            }

          
            logFormValues();
            submitForm();
        });
    }

    
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









