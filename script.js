// Toggle Dark/Light Mode
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check if the theme is saved in localStorage, otherwise default to light mode
const savedTheme = localStorage.getItem("theme") || "light";
body.setAttribute("data-theme", savedTheme);

// Update the button text based on the current theme
themeToggle.textContent = savedTheme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";

// Toggle theme when the button is clicked
themeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    body.setAttribute("data-theme", newTheme);

    // Save the selected theme in localStorage
    localStorage.setItem("theme", newTheme);

    // Update button text based on the new theme
    themeToggle.textContent = newTheme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";
});

const appName = "MY WEBSITE"; 
const expiryDays = 90; 

const startDate = localStorage.getItem(`${appName}-startDate`);

if (startDate) {
    const startDateObj = new Date(startDate);
    const now = new Date();
    const diffInDays = Math.floor((now - startDateObj) / (1000 * 60 * 60 * 24));

    if (diffInDays >= expiryDays) {
        document.body.innerHTML = `<h1>Access Expired</h1><p>Please contact the developer, Amin Shan, for further access.</p>`;
    }
} else {
    // Set the start date if not already set
    localStorage.setItem(`${appName}-startDate`, new Date());
}


// Author: Mohamed Amin Shan
console.log("This website was developed by Mohamed Amin Shan.");

document.getElementById('language-toggle').addEventListener('change', function() {
  const selectedLang = this.value;
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${selectedLang}`);
  });
});