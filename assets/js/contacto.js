document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    emailjs.init({
      publicKey: "sdGtF14VsH4bbWkF2",
    });

    const errorNombre = document.getElementById("error-nombre");
    const errorEmail = document.getElementById("error-email");
    const errorAsunto = document.getElementById("error-asunto");
    const errorMensaje = document.getElementById("error-mensaje");
    const successMessageDiv = document.getElementById("success-message");
    const submitButton = contactForm.querySelector('button[type="submit"]');

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
        const originalButtonText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = "Enviando...";

        emailjs.sendForm('service_4wrppwo', 'template_o410zs9', contactForm)
          .then(() => {
            contactForm.classList.add("hidden");
            successMessageDiv.innerHTML = `
              <p class="font-semibold text-lg">¡Gracias por tu contacto, ${nombre}!</p>
              <p class="mt-2">He recibido tu mensaje y te he enviado un email de confirmación.</p>
              <a href="index.html" class="mt-4 inline-block bg-[#334418] hover:bg-[#4A5F23] text-white font-semibold px-6 py-2 rounded shadow">
                Ir al Home
              </a>
            `;
            successMessageDiv.classList.remove("hidden");
          }, (error) => {
            console.log('FAILED...', error);
            alert('Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
          });
      }
    });
  }
});