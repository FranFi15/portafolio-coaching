const toggleMenu = () => document.body.classList.toggle("open");

const seccionesOcultas = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("mostrar", entry.isIntersecting);
    });
  },
  { threshold: 0.5 }
);

seccionesOcultas.forEach((seccion) => observer.observe(seccion));
