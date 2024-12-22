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