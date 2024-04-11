document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav__links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show-links');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav__links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
/*/////////////////////////////////////////////////////////////////////////////// */
document.addEventListener("DOMContentLoaded", function() {
    // Get the download button element
    var downloadBtn = document.querySelector('#downloadBtn');

    // Add click event listener to the download button
    downloadBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of link click

        // Display the floor plan modal form
        var floorPlanModal = document.getElementById('floorPlanModal');
        floorPlanModal.style.display = 'block';

        // Scroll to the floor plan modal form
        floorPlanModal.scrollIntoView({ behavior: 'smooth' });
    });
});

/*/////////////////////////////////////////////////////////////////////////////// */
// For the contact form
document.addEventListener("DOMContentLoaded", function() {
    // Get the contact form element
    var contactForm = document.getElementById('contactForm');

    // Add submit event listener to the contact form
    contactForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Check if the form is filled out correctly
        if (isContactFormValid()) {
            // If form is valid, submit the contact form
            contactForm.submit();
            // Show success message
            showSuccessMessage();
        } else {
            // If the form is not valid, display an alert
            alert('Please fill out the contact form completely.');
        }
    });

    // Function to check if the contact form is valid
    function isContactFormValid() {
        // Get the values of form fields
        var name = contactForm.elements['name'].value.trim();
        var email = contactForm.elements['email'].value.trim();
        var mobile = contactForm.elements['mobile'].value.trim();

        // Check if any required field is empty
        if (name === '' || email === '' || mobile === '') {
            return false; // Return false if any required field is empty
        }

        return true; // Return true if contact form is valid
    }

    // Function to show success message
    function showSuccessMessage() {
        // Create a new element for the success message
        var successMessage = document.createElement('div');
        successMessage.textContent = 'Form submitted successfully!';
        // Add a class to style the success message
        successMessage.classList.add('success-message');
        // Append the success message to the page
        document.body.appendChild(successMessage);
        // Remove the success message after 5 seconds
        setTimeout(function() {
            successMessage.remove();
        }, 5000);
    }
});

// For the floor plan modal form
document.addEventListener("DOMContentLoaded", function() {
    // Get the submit button element for the floor plan modal form
    var submitBtnModal = document.querySelector('#floorPlanModal button[type="submit"]');

    // Add click event listener to the submit button of the floor plan modal form
    submitBtnModal.addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Check if the form is filled out correctly
        if (isModalFormValid()) {
            // If form is valid, submit the modal form
            submitModalForm();
        } else {
            // If the form is not valid, display an alert
            alert('Please fill out the modal form completely.');
        }
    });

    // Function to check if the modal form is valid
    function isModalFormValid() {
        // You can implement your own validation logic here
        // For example, you can check if all required fields are filled out
        // Here we assume the modal form has similar fields as the contact form
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var mobile = document.getElementById('mobile').value.trim();

        if (name === '' || email === '' || mobile === '') {
            return false; // Return false if any required field is empty
        }

        // Add more validation if needed

        return true; // Return true if modal form is valid
    }

    // Function to submit the modal form
    function submitModalForm() {
        // Here you can submit the form using AJAX, fetch, or any other method
        window.location.href = "trehan.pdf";
        // For now, let's just display a success message
        alert('Modal form submitted successfully!');
        // You can close the modal or perform any other action after form submission
    }
});


/*/////////////////////////////////////////////////////////////////////////////// */

// Get the overview section
var overviewSection = document.querySelector('.overview');

// When the overview section is clicked, show the modal
overviewSection.addEventListener('click', function() {
  // Get the modal
  var modal = document.getElementById("floorPlanModal");

  // Show the modal
  modal.style.display = "block";
});


// Get the overview section
var overviewSection = document.getElementById('overview-section');

// Get the modal
var modal = document.getElementById("floorPlanModal");

// When the overview section is clicked, show the modal
overviewSection.addEventListener('click', function() {
  // Show the modal
  modal.style.display = "block";
});

// When the user clicks on the close button, close the modal
var closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

/*########################$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let counter = 0;

    // Function to show the current slide
    const showSlide = (index) => {
        const slides = document.querySelectorAll('.slider img');
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        slides[index].style.display = 'block';
    };

    // Show the initial slide
    showSlide(counter);

    // Event listener for the previous button
    prevBtn.addEventListener('click', function() {
        counter--;
        if (counter < 0) {
            counter = slider.children.length - 1;
        }
        showSlide(counter);
    });

    // Event listener for the next button
    nextBtn.addEventListener('click', function() {
        counter++;
        if (counter >= slider.children.length) {
            counter = 0;
        }
        showSlide(counter);
    });
});

