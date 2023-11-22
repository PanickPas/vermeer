document.addEventListener("DOMContentLoaded", function() {
    const cookieConsent = document.getElementById("cookieConsent");
    const acceptButton = document.getElementById("acceptButton");
    const continueButton = document.getElementById("continueButton");

    // Check if the user has already accepted cookies
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieConsent.style.display = "block";
    }

    // Handle "Accept" button click
    acceptButton.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true");
        cookieConsent.style.display = "none";
    });

    // Handle "Continue without Accepting" button click
    continueButton.addEventListener("click", function() {
        cookieConsent.style.display = "none";
    });
});
