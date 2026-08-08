document.addEventListener("DOMContentLoaded", function () {

    // Smooth page entrance
    document.body.classList.add("loaded");


    // Contact form
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value;

            alert(
                "Thank you, " +
                name +
                "! 🍴 Your message has been received by RecipeNest."
            );

            contactForm.reset();

        });
    }


    // Recipe card animation
    const cards = document.querySelectorAll(
        ".recipe-card, .feature-card, .category-card"
    );

    cards.forEach(function (card, index) {

        card.style.animationDelay = (index * 0.08) + "s";

    });

});
