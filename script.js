// resaltar enlace
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a");
  const current = window.location.pathname.split("/").pop();
  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // animacion de aparicion de parrafos
  const paragraphs = document.querySelectorAll("main p");
  paragraphs.forEach((p, i) => {
    setTimeout(() => { p.style.opacity = 1; }, 200 * i);
  });

  // boton ver mas
  paragraphs.forEach((p, i) => {
    if (i >= 2) {
      p.style.display = "none";
      const btn = document.createElement("button");
      btn.textContent = "Ver más";
      btn.style.marginBottom = "10px";
      btn.style.display = "block";
      btn.onclick = () => {
        p.style.display = "block";
        btn.remove();
      };
      p.parentNode.insertBefore(btn, p);
    }
  });

  // mensaje de bienvenida
  const main = document.querySelector("main");
  const welcome = document.createElement("p");
  welcome.textContent = "¡Bienvenido al blog del Deportivo de La Coruña!";
  welcome.style.textAlign = "center";
  welcome.style.fontWeight = "bold";
  welcome.style.color = "#0056b3";
  main.prepend(welcome);
  setTimeout(() => welcome.remove(), 3000);
});

// boton volver arriba
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  topBtn.style.display = (document.documentElement.scrollTop > 100) ? "block" : "none";
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
