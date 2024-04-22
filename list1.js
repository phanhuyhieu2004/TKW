document.addEventListener("DOMContentLoaded", function() {
    const imgProfile = document.querySelector('.header .img img');
    const dropdownProfile = document.querySelector('.header .img .profile-link');

    imgProfile.addEventListener('click', function () {
        dropdownProfile.classList.toggle('show');
    });
});
const showMenu = (headerToggle, navbarId) => {
    const toggleBtn = document.getElementById(headerToggle),
        nav = document.getElementById(navbarId)

    if (headerToggle && navbarId) {
        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
            toggleBtn.classList.toggle('fa-times')
        })
    }
}
showMenu('header-toggle', 'navbar')

// const linkcolor = document.querySelectorAll('.nav_link');

// function colorLink() {
//     linkcolor.forEach(l => l.classList.remove('active'))
//     this.classList.add('active')
// }
// document.querySelector('.select-icon').addEventListener('click', function() {
//     document.getElementById('mySelect').click();
// });
const sideMenu = document.querySelector(".nav");
const menuBtn = document.querySelector("#header-toggle");
const themeToggle = document.querySelector(".theme-toggle");

menuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('show-menu');
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggle.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active');
});

var modal = document.getElementById("successModal");

/* Get the <span> element that closes the modal */
var span = document.getElementsByClassName("close")[0];

/* When the user clicks on <span> (x), close the modal */
span.onclick = function() {
    modal.style.display = "none";
};

/* When the user clicks anywhere outside of the modal, close it */
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

/* Display the modal if the msg attribute is present */

/*]]>*/