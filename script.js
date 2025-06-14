// script.js
 const words = ["Web Developer", "AI Enthusiast", "Problem Solver", "Tech Explorer","Aspiring Full Stack Developer"];
let i = 0;
let j = 0;
let isDeleting = false;
const typedTextSpan = document.getElementById("typed-text");

function type() {
    const fullWord=words[i];
    
    if (!isDeleting){
        j++;
        typedTextSpan.textContent = fullWord.substring(0,j);

        if (j === fullWord.length){
        isDeleting = true;
        setTimeout(type, 1000); // pause at full word
        return;
        } 
    } else{
        j--;
        typedTextSpan.textContent = fullWord.substring(0, j);
      if (j === 0) {
        isDeleting = false;
      i = (i + 1) % words.length;
    }
}

    setTimeout(type, isDeleting ? 60 : 100);
  }
document.addEventListener("DOMContentLoaded", type);


document.addEventListener("DOMContentLoaded", () => {
  // Theme toggle
  const toggleBtn = document.getElementById("theme-toggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = localStorage.getItem("theme") || (prefersDark ? "dark" : "light");

  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Scroll reveal
  const sections = document.querySelectorAll("section");
  const options = {
    threshold: 0.2
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, options);

  sections.forEach(section => {
    section.classList.add("hidden");
    revealOnScroll.observe(section);
  });

  // Form submission message (basic alert)
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting me! I'll get back to you soon.");
    form.reset();
  });
});


