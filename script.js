// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Dark mode toggle (remembers choice in the browser)
const body = document.body;
const toggle = document.getElementById("theme-toggle");

function applyTheme(isDark) {
  body.classList.toggle("dark", isDark);
  toggle.textContent = isDark ? "Light mode" : "Dark mode";
}

try {
  applyTheme(localStorage.getItem("theme") === "dark");
} catch (e) {
  applyTheme(false);
}

toggle.addEventListener("click", () => {
  const isDark = !body.classList.contains("dark");
  applyTheme(isDark);
  try { localStorage.setItem("theme", isDark ? "dark" : "light"); } catch (e) {}
});

// Contact form validation (demo only, nothing is sent)
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill in every field.";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.textContent = "Enter a valid email address.";
    return;
  }
  status.textContent = "Thanks, " + name + "! Your message was received.";
  form.reset();
});