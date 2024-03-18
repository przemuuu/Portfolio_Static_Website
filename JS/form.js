//
// document.getElementById("myForm").addEventListener("submit", function(event) {
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const errorDiv = document.getElementById("error");
//
//     errorDiv.innerHTML = ""; // Wyczyść poprzednie komunikaty o błędach
//
//     if (name === "") {
//     errorDiv.innerHTML += "Proszę podać imię.";
//     event.preventDefault(); // Zatrzymaj wysłanie formularza
//     }
//
//     if (!isValidEmail(email)) {
//     errorDiv.innerHTML += "Proszę podać prawidłowy adres email.";
//     event.preventDefault();
//     }
// });
//
// function isValidEmail(email) {
//     // Prosta weryfikacja adresu email, można użyć bardziej zaawansowanego sprawdzania
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("myForm");
    const confirmation = document.getElementById("confirmation");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const firstName = contactForm.elements["fname"].value;
        const lastName = contactForm.elements["lname"].value;
        const email = contactForm.elements["email"].value;
        const message = contactForm.elements["topic"].value;

        if (!isValidEmail(email)) {
            alert("Proszę podać prawidłowy adres email.");
            return;
        }

        // Tutaj można dodać więcej weryfikacji dla innych pól, np. sprawdzenie długości wiadomości, itp.

        // Tutaj można dodać kod do zapisywania danych w pliku lub przesyłania ich na serwer.

        // W tym przykładzie po prostu wyświetlamy potwierdzenie.
        confirmation.style.display = "block";
        contactForm.style.display = "none";
    });

    function isValidEmail(email) {
        // Prosta walidacja adresu email przy użyciu wyrażenia regularnego.
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
});
