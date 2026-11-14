const images = document.querySelectorAll(
    ".ptyxio, .toeic, .web-pages, .social-media"
);
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
if (lightbox && lightboxImage) {
    console.log(images);
    images.forEach(function(image) {
        image.addEventListener("click", function() {
            const lightboxImage = document.getElementById("lightbox-image");
            lightboxImage.src = image.src;
            lightbox.style.display = "flex";
        });
    });

    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    const closeButton = document.getElementById("lightbox-close");
        if (closeButton) {
        closeButton.addEventListener("click", function() {
            lightbox.style.display = "none";
        });
    }

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            lightbox.style.display = "none";
        }
    });
}


const contactForm = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

if (contactForm && successMessage) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        fetch(contactForm.action, {
            method: "POST",
            body: new FormData(contactForm),
            headers: {
                "Accept": "application/json"
            }
        })
        .then(function(response) {

            if (response.ok) {
                contactForm.reset();
                successMessage.hidden = false;
            } else {
                alert("Παρουσιάστηκε πρόβλημα κατά την αποστολή.");
            }

        })
        .catch(function() {
            alert("Δεν ήταν δυνατή η αποστολή. Δοκιμάστε ξανά.");
        });

    });

}