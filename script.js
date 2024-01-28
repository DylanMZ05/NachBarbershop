document.addEventListener("DOMContentLoaded", function() {
  const headerLinks = document.querySelectorAll(".header-button a");

  headerLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
          event.preventDefault();

          // Obtén el objetivo del enlace (por ejemplo, "#servicios")
          const targetId = link.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              const delay = 0; // Retraso de 3 segundos en milisegundos
              const offsetPixels = 70;

              const finalPosition = targetElement.offsetTop - offsetPixels;

              // Espera el tiempo especificado antes de desplazarte
              setTimeout(function() {
                  // Desplázate al elemento de destino
                  window.scrollTo({
                      top: finalPosition,
                      behavior: "smooth" // Agrega desplazamiento suave
                  });
              }, delay);
          }
      });
  });
});