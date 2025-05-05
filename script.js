// Toggle dark mode
const toggleBtn = document.getElementById("darkToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    
    // Toggle icon visibility
    const moonIcon = toggleBtn.querySelector(".fa-moon");
    const sunIcon = toggleBtn.querySelector(".fa-sun");
    
    moonIcon.style.display = isDark ? "none" : "inline-block";
    sunIcon.style.display = isDark ? "inline-block" : "none";
    
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

// Load theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});
