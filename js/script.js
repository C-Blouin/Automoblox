// This code block will grab the header element, track the scroll position of the document window and based on the scrollHeight variable the background colour will update to solid or transparent.
function updateHeaderBackground() {

    // Select the header element with the id of header-nav.
    let header = document.getElementById("header-nav");

    // Check IF the header element is present in the DOM. If so, run the following code.
    if (header) {
        // Get the scroll position of the document window along the Y axis.
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;
        // Get the width of the screen 
        let screenWidth = window.innerWidth || document.documentElement.clientWidth;

        // Declare Heigh and Width variables to be used in the conditional statements below and based on the conditions the background colour will become completely transparent or a light black.

        // Scroll height is set to 120px, preventing the heading from becoming transparent too early.
        let scrollHeight = 120;
        // Max width variable set to 1200px, allowing the header to become transparent on smaller screens.
        let maxWidth = 1200;

        // IF the viewport (screenWidth) is less than or equal to 1200px, change the background to transparent.
        if (screenWidth <= maxWidth) {
        header.style.backgroundColor = "transparent";
        } 
        
        // ELSE IF the scroll position is greater than the scrollHeight of 120px, change the background to solid white.
        else if (scrollPosition > scrollHeight) {
        header.style.backgroundColor = "#fff"; 
        } 
        
        // ELSE default to transparent background.
        else {
        header.style.backgroundColor = "transparent";
        }
    }
}

// Event listeners for the scroll and resize event, to determine if the background is solid or transparent.
window.addEventListener("scroll", updateHeaderBackground);
window.addEventListener("resize", updateHeaderBackground);


/* Thank you to Fireship for this useful Scroll Animations reference, check it out here. https://www.youtube.com/watch?v=T33NN_pPeNI&t=13s */

// This code observes intersecting elements in the viewport, when an element is intersecting, the "slide-animation" class is added to the element, which triggers the animation from the CSS styles.
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      // Add the class to an intersecting element.
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-animation");
      }
      // Once the element is not intersecting, remove the class. This can repeat as the user scrolls up and down the page.
      else {
        entry.target.classList.remove("slide-animation");
      }
    });
  });
  
// Select all elements with the class of "hidden" and "gallery-hidden" and add them to the observer, to check if the slide-animation class should be added or removed.
const hiddenElements = document.querySelectorAll(".hidden, .gallery-hidden");
hiddenElements.forEach((el) => observer.observe(el));


// Variable to store the scroll position.
let scrollPosition = 0;
// Select the header navigation element from the DOM.
let headerNav = document.getElementById('header-nav');
// Add an event listener for the scroll event, call the function when scrolling.
window.addEventListener('scroll', function () {
    // Track the scroll position based on the windows screenY axis.
    let scrollTop = window.screenY || document.documentElement.scrollTop;
    // IF the scroll position is greater than 0 (the default window position), the header position will be set to -120px to hide it from the viewport.
    if (scrollTop > scrollPosition) {
        headerNav.style.cssText = 'top: -120px';
    }
    // ELSE, the header position will be set to 0, to display it in the viewport.
    else {
        headerNav.style.top = '0';
    }
    // Update the new scroll position and set it to the initial scroll position variable, this way the function can track the scroll position and update the header position accordingly.
    scrollPosition = scrollTop;
    headerNav.style.position = 'fixed';
});


// Selecting the gallerySlider for the automoblox car collection, setting some custom carousel options.
const gallerySlider = document.getElementById('gallerySlider');
const carousel = new bootstrap.Carousel(gallerySlider, {
    pause: false,
    touch: true,
    wrap: true,
    // Prevents the carousel from sliding to the next slide automatically on all devices. I don't want the slide effect on mobile specifically as it's not a great user experience.
    ride: false
});
