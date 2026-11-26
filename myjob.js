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
    setTimeout(function () {
    displayForm.style.display = "block";
    }, 2000);
    histroy.pushState({privacyPolicy: true}, "", "#dialog");
    })
    window.addEventListener("popstate", function() {
        displayForm.style.display = "none";
    
});

                                        /*termsAndConditions */
let termsAndConditions = document.querySelector(".termsAndConditions");
let Conditions = document.querySelector(".Conditions");
Conditions.addEventListener("click", function() {
    setTimeout(function () {
        termsAndConditions.style.display = "block";
    }, 2000);
    histroy.pushState({termsAndCondition: true}, "", "#dialoge");
    })
    window.addEventListener("popstate", function() {
        termsAndConditions.style.display = "none";
});


                                       /**secondform */
let firstform = document.querySelector(".firstform");
let secondform = document.querySelector(".secondform");
let createaccount = document.querySelector("#createaccount");
let login = document.querySelector(".login");
login.addEventListener("click", function() {
    setTimeout(function () {
    firstform.style.display = "none";
    secondform.style.display = "flex";
    }, 2000);
     histroy.pushState({termsAndCondition: true}, "", "#dialoge");
})
window.addEventListener("popstate", function() {
    firstform.style.display = "flex";
    secondform.style.display = "none";
});
createaccount.addEventListener("click", function() {
    firstform.style.display = "flex";
    secondform.style.display = "none";
})


let loginpass = document.querySelector(".loginpass");
let loginpassword = document.querySelector("#loginpassword");
let loginpassbutton = document.querySelector(".loginpass button");
loginpassbutton.addEventListener("click", function() {
        if (loginpassword.type === "password") {
        loginpassword.type = "text";
        loginpassbutton.textContent = "hide";
    }
    else {
        loginpassword.type = "password";
        loginpassbutton.textContent = "show";
    }});
