// ===============================
// CURRENT YEAR
// ===============================

const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;


// ===============================
// PROJECT MODAL
// ===============================

function showProject(title, description, technology) {

    document.getElementById("modalProjectTitle").textContent =
        title;

    document.getElementById("modalProjectDescription").textContent =
        description;

    document.getElementById("modalProjectTechnology").textContent =
        technology;


    const modalElement =
        document.getElementById("projectModal");


    const modal =
        new bootstrap.Modal(modalElement);


    modal.show();
}


// ===============================
// CONTACT FORM
// ===============================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        document.getElementById("formAlert").innerHTML = `

            <div class="alert alert-danger">
                Please fill all required fields.
            </div>

        `;

        return;
    }


    document.getElementById("formAlert").innerHTML = `

        <div class="alert alert-success">
            <i class="bi bi-check-circle"></i>
            Thank you ${name}! Your message has been sent successfully.
        </div>

    `;


    contactForm.reset();

});


// ===============================
// BACK TO TOP
// ===============================

const topButton =
    document.getElementById("topButton");


window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});