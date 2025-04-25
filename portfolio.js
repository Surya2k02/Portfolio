document.addEventListener("DOMContentLoaded", function () {

    document.querySelector(".btn-box a[href='#Hire Me']").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelector(".btn-box a[href='#Let\\'s Talk']").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields before sending the message.");
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent successfully.`);

        document.getElementById("contact-form").reset();
    });

});
