// Selecting elements
let firstName = document.querySelector('.firstName');
let LastName = document.querySelector('.LastName');
let email = document.querySelector('.email');
let six = document.querySelector('.six');
let errorFirst = document.querySelector('.errorFirst');
let errorSecond = document.querySelector('.errorSecond');
let errorEmail = document.querySelector('.errorEmail');
let errorQuerry = document.querySelector('.errorQuerry');
let errorMessage = document.querySelector('.errorMessage');
let errorConsent = document.querySelector('.errorConsent');
let generalInquiry = document.querySelector('.generalInquiry');
let supportRequest = document.querySelector('.supportRequest');
let textArea = document.querySelector('.textArea');
let squareCover = document.querySelector('.squareCover');
let squareImg = document.querySelector('.square-img');
let gen = document.querySelector('.gen');
let sup = document.querySelector('.sup');

// Variables to track state
let querry = false;
let consent = false;

// Event listener for consent
squareCover.addEventListener('click', () => {
    squareImg.classList.remove('none');
    consent = true;
});

// Event listener for inquiry type selection
generalInquiry.addEventListener('click', () => {
    gen.classList.remove('none');
    sup.classList.add('none');
    querry = true;
});
supportRequest.addEventListener('click', () => {
    sup.classList.remove('none');
    gen.classList.add('none');
    querry = true;
});

// Email validation function
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
function showAlert() {
    const customAlert = document.getElementById('customAlert');

    // Remove 'show' class to reset if already added
    customAlert.classList.remove('show');

    // Add 'show' class after a tiny delay to trigger transition
    setTimeout(() => {
        customAlert.classList.add('show');
    }, 10);

    // Automatically hide after 3 seconds
    setTimeout(() => {
        customAlert.classList.remove('show'); // Remove 'show' class to start fade-out
    }, 4000);
}


function closeAlert() {
    document.getElementById('customAlert').classList.add('none'); // Hide the alert
}
// Main validation function
function validateForm() {
    let isValid = true; // To check overall validation status

    // Validate first name
    if (!firstName.value.trim()) {
        errorFirst.classList.remove('none');
        isValid = false;
    } else {
        errorFirst.classList.add('none');
    }

    // Validate last name
    if (!LastName.value.trim()) {
        errorSecond.classList.remove('none');
        isValid = false;
    } else {
        errorSecond.classList.add('none');
    }

    // Validate message in text area
    if (!textArea.value.trim()) {
        errorMessage.classList.remove('none');
        isValid = false;
    } else {
        errorMessage.classList.add('none');
    }

    // Validate query selection
    if (!querry) {
        errorQuerry.classList.remove('none');
        isValid = false;
    } else {
        errorQuerry.classList.add('none');
    }

    // Validate consent
    if (!consent) {
        errorConsent.classList.remove('none');
        isValid = false;
    } else {
        errorConsent.classList.add('none');
    }

    // Validate email input
    if (!email.value.trim()) {
        errorEmail.innerHTML = 'This field is required';
        errorEmail.classList.remove('none');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        errorEmail.innerHTML = 'Invalid email address';
        errorEmail.classList.remove('none');
        isValid = false;
    } else {
        errorEmail.classList.add('none');
    }

    // Show success alert if all validations pass
    if (isValid) {
        showAlert("Form submitted successfully!");
    }
}


// Event listener for form submission on button click
six.addEventListener('click', validateForm);

// Event listener for form submission on Enter key press
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        validateForm();
    }
});

function updateAttributionClasses() {
    const width = window.innerWidth;
    const attribution = document.querySelector('.attribution');
    const secondAttribution = document.querySelector('.secondAttribution');
  
    if (width >= 541 && width <= 650) {
      attribution.classList.add('none');
      secondAttribution.classList.remove('none');
    } else {
      attribution.classList.remove('none');
      secondAttribution.classList.add('none');
    }
    if (width <= 345 ) {
        attribution.classList.add('none');
        secondAttribution.classList.remove('none');
      } else {
        attribution.classList.remove('none');
        secondAttribution.classList.add('none');
      }
  }
  
  // Run on page load
  updateAttributionClasses();
  
  // Run on window resize
  window.addEventListener('resize', updateAttributionClasses);

  function adjustTextareaColumns() {
    const width = window.innerWidth;
    const textarea = document.querySelector('#text');

    if (width < 293) {
        textarea.setAttribute('cols', '20'); // Smaller value for narrow screens
    } else {
        textarea.setAttribute('cols', '30'); // Default value for larger screens
    }
    console.log("Current width:", width, "Cols set to:", textarea.getAttribute('cols'));
}

// Run on page load
adjustTextareaColumns();

// Run on window resize
window.addEventListener('resize', adjustTextareaColumns);