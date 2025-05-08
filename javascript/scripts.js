document.addEventListener("DOMContentLoaded", () => {
  const copyButton = document.getElementById("copyButton");
  const emailInput = document.getElementById("emailInput");

  copyButton.addEventListener("click", () => {
    emailInput.select(); // Selecciona el texto del input
    emailInput.setSelectionRange(0, 99999); // Asegura la selección en dispositivos móviles
    navigator.clipboard.writeText(emailInput.value) // Copia el texto al portapapeles
      .catch(err => {
        console.error("Error al copiar el texto: ", err);
      });
  });
});
