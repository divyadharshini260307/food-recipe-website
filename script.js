// Newsletter

function subscribeUser(event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    alert(
        "Thank you for subscribing! 🍴\n" +
        "Recipes will be sent to " + email
    );

    document.getElementById("email").value = "";
}


// Contact Form

function sendMessage(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting RecipeNest! ❤️\n" +
        "We will get back to you soon."
    );

    event.target.reset();
}


// Recipe Search

function searchRecipes() {

    const input =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const recipes =
        document.querySelectorAll(".recipe-item");

    recipes.forEach(function(recipe) {

        const text =
            recipe.textContent.toLowerCase();

        if (text.includes(input)) {

            recipe.style.display = "block";

        } else {

            recipe.style.display = "none";

        }

    });
}