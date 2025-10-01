var animation = lottie.loadAnimation({
  container: document.getElementById("lottie-animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "laptop.json",
});

const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

function toggleMobileMenu() {
  mobileMenu.classList.toggle("hidden");
}

function closeMobileMenu() {
  mobileMenu.classList.add("hidden");
}

mobileMenuBtn.addEventListener("click", toggleMobileMenu);

// --- Form Submission Simulation (Since a live backend is not available) ---
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  formMessage.classList.remove("hidden");
  formMessage.classList.remove("text-red-400");
  formMessage.classList.add("text-green-400");
  formMessage.textContent = "Message sent successfully! (Simulated)";
  contactForm.reset();
  setTimeout(() => {
    formMessage.classList.add("hidden");
  }, 5000);
});
