
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Limpiar mensajes anteriores
  document.getElementById('nombreError').textContent = '';
  document.getElementById('correoError').textContent = '';
  document.getElementById('mensajeError').textContent = '';
  document.getElementById('successMessage').textContent = '';

  let nombre = document.getElementById('nombre').value.trim();
  let correo = document.getElementById('correo').value.trim();
  let mensaje = document.getElementById('mensaje').value.trim();
  let valido = true;

  // Validaciones
  if (nombre === '') {
    document.getElementById('nombreError').textContent = 'El nombre es obligatorio.';
    valido = false;
  } else if (/\d/.test(nombre)) {
    document.getElementById('nombreError').textContent = 'El nombre no puede contener números.';
    valido = false;
  }

  if (correo === '') {
    document.getElementById('correoError').textContent = 'El correo es obligatorio.';
    valido = false;
  } else if (!/\S+@\S+\.\S+/.test(correo)) {
    document.getElementById('correoError').textContent = 'El correo no es válido.';
    valido = false;
  }

  if (mensaje === '') {
    document.getElementById('mensajeError').textContent = 'El mensaje no puede estar vacío.';
    valido = false;
  } else if (mensaje.length < 5) {
    document.getElementById('mensajeError').textContent = 'El mensaje debe tener al menos 5 caracteres.';
    valido = false;
  }

  if (valido) {
    document.getElementById('successMessage').textContent = '✅ ¡Mensaje enviado correctamente!';
    form.reset();

    // Quitar mensaje después de 2 segundos
    setTimeout(() => {
      document.getElementById('successMessage').textContent = '';
    }, 2000);
  }
});
