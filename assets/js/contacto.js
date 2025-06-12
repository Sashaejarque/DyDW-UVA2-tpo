document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    const errorNombre = document.getElementById("error-nombre");
    const errorEmail = document.getElementById("error-email");
    const errorAsunto = document.getElementById("error-asunto");
    const errorMensaje = document.getElementById("error-mensaje");
    const successMessageDiv = document.getElementById("success-message");

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let isValid = true;

      errorNombre.textContent = "";
      errorNombre.classList.add("hidden");
      errorEmail.textContent = "";
      errorEmail.classList.add("hidden");
      errorAsunto.textContent = "";
      errorAsunto.classList.add("hidden");
      errorMensaje.textContent = "";
      errorMensaje.classList.add("hidden");

      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const asunto = document.getElementById("asunto").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();
      const emailPattern = /\S+@\S+\.\S+/;

      if (nombre === "") {
        errorNombre.textContent = "El campo Nombre es obligatorio.";
        errorNombre.classList.remove("hidden");
        isValid = false;
      }

      if (email === "") {
        errorEmail.textContent = "El campo Correo electrónico es obligatorio.";
        errorEmail.classList.remove("hidden");
        isValid = false;
      } else if (!emailPattern.test(email)) {
        errorEmail.textContent = "Por favor, ingrese un correo electrónico válido.";
        errorEmail.classList.remove("hidden");
        isValid = false;
      }

      if (asunto === "") {
        errorAsunto.textContent = "El campo Asunto es obligatorio.";
        errorAsunto.classList.remove("hidden");
        isValid = false;
      }

      if (mensaje === "") {
        errorMensaje.textContent = "El campo Mensaje es obligatorio.";
        errorMensaje.classList.remove("hidden");
        isValid = false;
      }

      if (isValid) {
        contactForm.classList.add("hidden");

        successMessageDiv.innerHTML = `
          <p class="font-semibold text-lg">¡Gracias por tu contacto, ${nombre}!</p>
          <p class="mt-2">En breve te estaré respondiendo.</p>
          <a href="index.html" class="mt-4 inline-block bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-2 rounded shadow">
            Ir al Home
          </a>
        `;
        successMessageDiv.classList.remove("hidden");
      }
    });
  }
});