var menuIcon = document.querySelector(".menu-icon");
var container = document.querySelector(".container");
var sidebar = document.querySelector(".sidebar");

menuIcon.onclick = function() {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
   
    }
