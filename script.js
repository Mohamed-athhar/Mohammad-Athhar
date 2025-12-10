// ========================================
// EmailJS Configuration & Integration
// ========================================

// Initialize EmailJS with your Public Key
// TODO: Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS Public Key
// You can find this in your EmailJS dashboard: https://dashboard.emailjs.com/admin
emailjs.init("YOUR_PUBLIC_KEY");

// ========================================
// Form Submission Handler with EmailJS
// ========================================
function handleFormSubmit(event) {
  event.preventDefault();

  // Get form elements
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  const submitBtn = document.getElementById("submitBtn");
  const formNote = document.getElementById("formNote");

  // Get values from form fields
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

  // Validate all fields before sending
  if (!validateForm(name, email, subject, message)) {
    showError("Please fill in all fields correctly.");
    return;
  }

  // Disable submit button and show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  // Prepare template parameters for EmailJS
  // These field names must match your EmailJS email template variables
  const templateParams = {
    to_email: "mhdathhar22@gmail.com", // Recipient email (your email)
    from_name: name,
    from_email: email,
    subject: subject,
    message: message
  };

  // Send email using EmailJS
  // TODO: Replace 'YOUR_SERVICE_ID' with your EmailJS Service ID (Gmail, SMTP, etc.)
  // TODO: Replace 'YOUR_TEMPLATE_ID' with your EmailJS Template ID
  // Both can be found in your EmailJS dashboard: https://dashboard.emailjs.com/admin
  emailjs
    .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(
      function (response) {
        // Success - show success message
        showSuccess("Message sent successfully!");
        resetForm();
      },
      function (error) {
        // Failure - show error message
        console.error("EmailJS error:", error);
        showError("Failed to send message. Try again.");
      }
    )
    .finally(function () {
      // Re-enable submit button
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    });
}

// ========================================
// Form Validation Function
// ========================================
function validateForm(name, email, subject, message) {
  // Check if all fields are filled
  if (!name || !email || !subject || !message) {
    return false;
  }

  // Validate email format using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  return true;
}

// ========================================
// Success Message Handler
// ========================================
function showSuccess(message) {
  const formNote = document.getElementById("formNote");
  formNote.textContent = message;
  formNote.style.color = "#10b981"; // Green color for success
  formNote.style.display = "block";
}

// ========================================
// Error Message Handler
// ========================================
function showError(message) {
  const formNote = document.getElementById("formNote");
  formNote.textContent = message;
  formNote.style.color = "#ef4444"; // Red color for error
  formNote.style.display = "block";
}

// ========================================
// Reset Form Function
// ========================================
function resetForm() {
  const contactForm = document.getElementById("contactForm");
  contactForm.reset();
  
  // Clear the message after 5 seconds
  setTimeout(function () {
    document.getElementById("formNote").textContent = "";
  }, 5000);
}

// ========================================
// Other Portfolio Scripts
// ========================================

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("open");
  });

  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
    });
  });
}

// Smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: "smooth",
    });
  });
});

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Typing effect for hero section
const words = ["Accounting", "IT Support", "ERP Systems", "Web Administration"];
let wIndex = 0;
let tIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = words[wIndex];
  const element = document.getElementById("typing");

  if (isDeleting) {
    element.innerHTML = current.substring(0, tIndex--);
  } else {
    element.innerHTML = current.substring(0, tIndex++);
  }

  if (!isDeleting && tIndex === current.length + 1) {
    setTimeout(() => (isDeleting = true), 1500);
  }
  if (isDeleting && tIndex === -1) {
    isDeleting = false;
    wIndex = (wIndex + 1) % words.length;
    tIndex = 0;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();
