let Password = document.querySelector("#Password");
let button = document.querySelector(".showpassword button ");
button.addEventListener("click", function() {
    if (
        Password.type === "password") {
        Password.type = "text";
        button.textContent = "hide";
    }
    else {
        Password.type = "password";
        button.textContent = "show";
    }

});
let ConfirmPassword = document.querySelector("#ConfirmPassword");
let buttonSecond = document.querySelector(".second button");
buttonSecond.addEventListener("click", function() {
        if (ConfirmPassword.type === "password") {
        ConfirmPassword.type = "text";
        buttonSecond.textContent = "hide";
    }
    else {
        ConfirmPassword.type = "password";
        buttonSecond.textContent = "show";
    }});

                                        /**privacyPolicy **/

let privacyPollicy = document.querySelector(".privacyPollicy");
let displayForm = document.querySelector(".displayForm");
privacyPollicy.addEventListener("click", function() {
    displayForm.style.display = "block";
});