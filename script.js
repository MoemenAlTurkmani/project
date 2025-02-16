document.addEventListener("DOMContentLoaded", () => {

    // Initialize EmailJS
    (function () {
        emailjs.init("-bjJWpQt_JovljLB6EaSj"); 
    })();

    // Form validation function
    function validateForm(name, email, message) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/;
        const namePattern = /^[a-zA-Z]{2,}$/;
        const messagePattern = /^[a-zA-Z0-9 ]{10,}$/;

        if (!namePattern.test(name)) {
            alert("Invalid name. Name must contain only letters and at least 2 characters.");
            return false;
        }
        if (!emailPattern.test(email)) {
            alert("Invalid email. Please enter a valid email address.");
            return false;
        }
        if (!messagePattern.test(message)) {
            alert("Message must be at least 10 characters long.");
            return false;
        }
        return true;
    }

    
    document.getElementById("submit").addEventListener("click", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (validateForm(name, email, message)) {
            emailjs
                .send("service_mq270no", "template_1tpwe0q", {
                    name: name,
                    email: email,
                    message: message,
                })
                .then(
                    function (response) {
                        alert("Message sent successfully!");
                        document.getElementById("name").value = "";
                        document.getElementById("email").value = "";
                        document.getElementById("message").value = "";
                    },
                    function (error) {
                        alert("Failed to send message. Please try again.");
                    }
                );
        }
    });

    const images = [
        "https://randomuser.me/api/portraits/men/10.jpg",
        "https://randomuser.me/api/portraits/women/18.jpg",
        "https://randomuser.me/api/portraits/men/20.jpg",
        "https://randomuser.me/api/portraits/women/14.jpg"
    ];
    const comments = [
        "\"Good service, I advise everyone to try it\"",
        "\"Fast service and high quality\"",
        "\"I will always rely on it\"",
        "\"A reliable place with good manners and respect\""
    ];
    const names = [
        "- Jamil Khoury",
        "- Ghina Beik",
        "- Jad Mohamad",
        "- Mira Taleb"
    ];

    let currentIndex = 0;

    const imgElement = document.getElementById("image");
    const commentElement = document.getElementById("comment");
    const nameElement = document.getElementById("prenom");

    function changeContent() {
        imgElement.src = images[currentIndex];
        commentElement.innerHTML = comments[currentIndex];
        nameElement.innerHTML = names[currentIndex];

        currentIndex = (currentIndex + 1) % images.length;
    }

  
    changeContent();

    setInterval(changeContent, 2500);
});