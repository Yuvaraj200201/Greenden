//selecting side navbar

var sidenav = document.getElementById("sideNav")
var menubar = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menubar.addEventListener('click', function() {
    sidenav.style.right = 0;
})

closenav.addEventListener('click', function() {
    sidenav.style.right = "-50%";
})