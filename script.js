// script.js

// Array holding the paths to the images
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
];

// Select the slider container and the navigation buttons
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Select all the slide elements in the slider
const slides = document.querySelectorAll('.slide');

// Variable to keep track of the currently displayed slide
let currentSlide = 0;

// Function to display the initial image (first image in the array)
function displayFirstImage() {
    slides[currentSlide].classList.add('active'); // Add 'active' class to the first slide
}

// Function to navigate through the images
function navigate(direction) {
    // Remove 'active' class from the current slide
    slides[currentSlide].classList.remove('active');

    // Determine the new slide index based on navigation direction (next or prev)
    if (direction === 'next') {
        currentSlide = (currentSlide + 1) % images.length; // Move to the next slide, loop back to start if at the end
    } else {
        currentSlide = (currentSlide - 1 + images.length) % images.length; // Move to the previous slide, loop back to end if at the start
    }

    // Add 'active' class to the new current slide
    slides[currentSlide].classList.add('active');
}

// Event listeners for the navigation buttons
prevBtn.addEventListener('click', () => navigate('prev')); // Navigate to the previous slide on 'Previous' button click
nextBtn.addEventListener('click', () => navigate('next')); // Navigate to the next slide on 'Next' button click

// Call the function to display the first image when the page loads
displayFirstImage();

// Automatic slideshow functionality
setInterval(() => navigate('next'), 3000); // Automatically move to the next slide every 3 seconds
