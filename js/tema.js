
function aplicarTema(tema) {
  document.documentElement.className = "tema-" + tema; // agrega clase al <html>
  localStorage.setItem("tema", tema); 
}

// Al cargar la página, aplica el tema guardado
(function () {
  const tema = localStorage.getItem("tema") || "claro";
  aplicarTema(tema);

  // Ajustar el icono inicial
  const themeIcon = document.getElementById("themeIcon");
  if (themeIcon) {
    themeIcon.classList.toggle("bi-sun-fill", tema === "oscuro");
    themeIcon.classList.toggle("bi-moon-fill", tema === "claro");
  }

  // Para el botón móvil
  const themeIconMobile = document.getElementById("themeIconMobile");
  if (themeIconMobile) {
    themeIconMobile.classList.toggle("bi-sun-fill", tema === "oscuro");
    themeIconMobile.classList.toggle("bi-moon-fill", tema === "claro");
  }
})();

// Evento en el botón de escritorio
document.getElementById("themeToggle").addEventListener("click", () => {
  const actual = localStorage.getItem("tema") || "claro";
  const nuevo = actual === "claro" ? "oscuro" : "claro";
  aplicarTema(nuevo);

  const themeIcon = document.getElementById("themeIcon");
  if (nuevo === "oscuro") {
    themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
  } else {
    themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
  }
});

// Evento en el botón de móvil
document.getElementById("themeToggleMobile").addEventListener("click", () => {
  const actual = localStorage.getItem("tema") || "claro";
  const nuevo = actual === "claro" ? "oscuro" : "claro";
  aplicarTema(nuevo);

  const themeIconMobile = document.getElementById("themeIconMobile");
  if (nuevo === "oscuro") {
    themeIconMobile.classList.replace("bi-moon-fill", "bi-sun-fill");
  } else {
    themeIconMobile.classList.replace("bi-sun-fill", "bi-moon-fill");
  }
});
