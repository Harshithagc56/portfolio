// ============================
// PAGE LOAD MESSAGE
// ============================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Website loaded successfully.");

});


// ============================
// CURRENT YEAR IN FOOTER
// ============================

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.innerHTML =
        "© " + year + " My Portfolio | Web Technology Assignment";

}


// ============================
// BUTTON CLICK MESSAGE
// ============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log("Navigation button clicked.");

    });

});