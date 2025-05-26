
// ---------------- Scroll sueve -----  para ir del menu nav a cada seccion ------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// --------------  fin Scroll sueve -----  para ir del menu nav a cada seccion ------------------------------------





// -------------------- FORMULARIO Newsletter del footer  ----------------------------------------------
// -------------------- FORMULARIO Newsletter del footer  ----------------------------------------------
// -------------------- FORMULARIO Newsletter del footer  ----------------------------------------------
// Validación de correo y feedback
document.getElementById("newsletter-form").addEventListener("submit", function (e) {
  const emailInput = document.getElementById("email-input");
  const emailMessage = document.getElementById("email-message");
  const submitMessage = document.getElementById("submit-message");

  // Limpiar mensajes anteriores
  emailMessage.textContent = "";
  submitMessage.textContent = "";

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value)) {
    e.preventDefault(); // Detiene el envío
    emailMessage.textContent = "⚠ Por favor, introduce un email válido.";
    emailInput.focus();
    return;
  }

  submitMessage.textContent = "✔ ¡Gracias por suscribirte!";
  submitMessage.style.color = "lightgreen";
});
// ------------- FIN --- FORMULARIO Newsletter del footer  ----------------------------------------------






// ----------------- PARA ABRIR Y CERRAR EL MENÚ EN MOVILES, EN EL FOOTER    ----------------------
// ----------------- PARA ABRIR Y CERRAR EL MENÚ EN MOVILES, EN EL FOOTER    ----------------------
// ----------------- PARA ABRIR Y CERRAR EL MENÚ EN MOVILES, EN EL FOOTER    ----------------------

const toggleBtn = document.querySelector('.footer-toggle');
const footerContent = document.querySelector('.footer-content');

toggleBtn.addEventListener('click', () => {
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  toggleBtn.setAttribute('aria-expanded', !expanded);
  footerContent.classList.toggle('closed');
});
// ------------- FIN -  PARA ABRIR Y CERRAR EL MENÚ EN MOVILES, EN EL FOOTER -------------------------------------- 






// --------------------------------  BOTON PARA SUBIR A LA CABECERA ------------------------------------------- 
// --------------------------------  BOTON PARA SUBIR A LA CABECERA ------------------------------------------- 
// --------------------------------  BOTON PARA SUBIR A LA CABECERA ------------------------------------------- 
const boton = document.getElementById("btn-arriba");

// Mostrar el botón al hacer scroll hacia abajo
window.onscroll = function () {
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
 boton.style.display = "block";
} else {
boton.style.display = "none";
 }
 };

 // Al hacer clic, se desplaza hacia arriba suavemente
boton.addEventListener("click", function () {
window.scrollTo({
top: 0,
behavior: "smooth"
});
 });
// -------------------------- FIN -  BOTON PARA SUBIR A LA CABECERA ------------------------------------------- 










// --------------------------------  ventana emergente logo ------------------------------------------- 
// --------------------------------  ventana emergente logo ------------------------------------------- 
// --------------------------------  ventana emergente logo ------------------------------------------- 
function openModal(type) {
    if (type === 'about') {
        // Evitar múltiples modales
        if (document.getElementById('aboutModal')) return;
        // Crear overlay
        const modal = document.createElement("div");
        modal.id = "aboutModal";
        modal.className = "modal-overlay";

        modal.innerHTML = `
        <div class="modal-content">
            <img class="modoImg" src="img/000_04_pergamino_login_.png" alt="Pergamino">
            <div class="modo2">
                <h1 class="solweb">SOLWEB Estudio</h1>
                <p class="autor">Diseño por Luis J. Borge Gil</p>
            </div>
        </div>
        `;

        // Cierre al hacer click fuera del contenido
        modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.remove();
        });

        document.body.appendChild(modal);
    } 
    else {
        alert("Ventana emergente: " + type);
    }
}

//--------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
var modal = document.getElementById('aboutModal');
modal.addEventListener('click', function(e) {
if (e.target === modal) {
modal.style.display = 'none';
 }
});
});
// -------------------------------- fin ventana emergente logo ---------------------------------------- 





