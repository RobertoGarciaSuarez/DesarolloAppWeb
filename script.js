document.addEventListener("DOMContentLoaded", () => {
  // resalta el enlace activo del navbar
  const links = document.querySelectorAll(".navbar a");
  const current = window.location.pathname.split("/").pop();
  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // mensaje bienvenida
  if (current === "entrada1.html") {
    const main = document.querySelector("main");
    const welcome = document.createElement("p");
    welcome.textContent = "¡Bienvenido al blog del Deportivo de La Coruña!";
    welcome.style.textAlign = "center";
    welcome.style.fontWeight = "bold";
    welcome.style.color = "#0056b3";
    main.prepend(welcome);
    setTimeout(() => welcome.remove(), 3000);
  }
});

// boton subir
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  topBtn.style.display = (document.documentElement.scrollTop > 100) ? "block" : "none";
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
