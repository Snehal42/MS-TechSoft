document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav nav");
menu.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "" : "flex";
  nav.style.position = "absolute";
  nav.style.top = "78px";
  nav.style.left = "0";
  nav.style.right = "0";
  nav.style.padding = "20px";
  nav.style.background = "rgba(5,9,20,.97)";
  nav.style.flexDirection = "column";
});

function sendWhatsApp(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const type = document.getElementById("type").value;
  const message = document.getElementById("message").value.trim();
  const text =
`Hello MS TechSoft,

I would like to discuss a project.

Name: ${name}
Email: ${email}
Project Type: ${type}

Project Details:
${message}`;

  window.open("https://wa.me/919561809098?text=" + encodeURIComponent(text), "_blank");
}
