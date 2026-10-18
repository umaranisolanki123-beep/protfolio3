const navLinks = document.querySelectorAll(".nav-links a");
const pages = document.querySelectorAll(".page");
const buttons = document.querySelectorAll(".buttons a");

function showPage(pageId) {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + pageId) {
            link.classList.add("active");
        }
    });
}


// Navbar click
navLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const pageId = this.getAttribute("href").substring(1);

        showPage(pageId);

    });

});


// Home page buttons
buttons.forEach(button => {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const pageId = this.getAttribute("href").substring(1);

        showPage(pageId);

    });

});


// Contact form
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you for contacting me, Uma! 😊");

        form.reset();

    });

}