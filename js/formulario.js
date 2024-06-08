document.getElementById('contactForm').addEventListener('submit', function(evento){
  evento.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const asunto = document.getElementById('asunto').value;
  const mensaje = document.getElementById('mensaje').value;



  localStorage.setItem('contactFormData', JSON.stringify({
    nombre: nombre,
    email: email,
    telefono: telefono,
    asunto: asunto,
    mensaje: mensaje
  }));
  // Mensaje de enviado
  // alert('¡Gracias! Tu mensaje ha sido enviado.')

  // Limpiar el formulario
  // document.getElementById('contactForm').reset();

  // Mostrar el popup
  document.getElementById('contenedorPopup').style.display = 'flex';

  // Limpiar el formulario
  document.getElementById('contactForm').reset();
});

// Evento para cerra el popup
document.getElementById('aceptarBtn').addEventListener('click', function() {
  document.getElementById('contenedorPopup').classList.add('hidden');
  setTimeout(() => {
    document.getElementById('contenedorPopup').style.display = 'none';
    document.getElementById('contenedorPopup').classList.remove('hidden');
  }, 300); 
});


