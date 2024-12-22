// Get the navigation links container element
var navLinks = document.getElementById("navLinks");

// Function to show the menu by setting the right style property to 0
function showMenu(){
    navLinks.style.right = "0";
}

// Function to hide the menu by setting the right style property to -200px
function hideMenu(){
    navLinks.style.right = "-200px";
}

// Popup section

// Execute the code when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the "popup-link" class
    var popupLinks = document.getElementsByClassName("popup-link");

    // Loop through each popup link and attach a click event listener
    for (var i = 0; i < popupLinks.length; i++) {
        popupLinks[i].addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default behavior of redirecting to a new page
            openPopup(this.getAttribute("href")); // Call the openPopup function with the link URL
        });
    }

    // Get the close button element
    var closeBtn = document.getElementsByClassName("close")[0];

    // Attach a click event listener to the close button
    closeBtn.addEventListener("click", closePopup);

    // Function to open the popup with the provided URL
    function openPopup(url) {
        var popup = document.getElementsByClassName("popup")[0];
        var popupIframe = document.getElementById("popup-iframe");
        popupIframe.src = url; // Set the src attribute of the iframe to the provided URL
        popup.style.display = "block"; // Display the popup by setting its display style to "block"
    }

    // Function to close the popup
    function closePopup() {
        var popup = document.getElementsByClassName("popup")[0];
        var popupIframe = document.getElementById("popup-iframe");
        popupIframe.src = ""; // Clear the src attribute of the iframe
        popup.style.display = "none"; // Hide the popup by setting its display style to "none"
    }
});
