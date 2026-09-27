const dateInput = document.getElementById("date");

const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

document.getElementById("enquiryForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const event = document.getElementById("event").value;
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;
    const message = document.getElementById("message").value.trim();

    const text = `NEW CATERING ENQUIRY
-------------------------
Shree Anant Caters

Name: ${name}
Mobile: ${phone}
Event: ${event}
Event Date: ${date}
Guests: ${guests}

Requirement:
${message || "Not specified"}

-------------------------
Thank you for contacting Shree Anant Caters.`;

    const whatsappUrl =
        `https://wa.me/918965089147?text=${encodeURIComponent(text)}`;

    window.location.href = whatsappUrl;
    alert("Your enquiry has been sent to WhatsApp!");
});

const animatedElements = document.querySelectorAll(
    ".section-heading, .service-card, .why-card, .custom-content, .step-card, .enquiry-container, .about-content"
);

animatedElements.forEach(function (element) {
    element.classList.add("animate");
});

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

animatedElements.forEach(function (element) {
    observer.observe(element);
});

    