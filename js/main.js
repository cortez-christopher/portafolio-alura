
// Barra de navegacion
let menuIcono = document.querySelector('#menu-iconos');
let menuNavegacion = document.querySelector('.menu-navegacion');

menuIcono.onclick = () => {
  menuIcono.classList.toggle('bx-x');
  menuNavegacion.classList.toggle('active');
}

// desplazamiento de barra de navegacion
let secciones = document.querySelectorAll('section');
let enlacesNav = document.querySelectorAll('header nav a');

window.onscroll = () => {
  secciones.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // Iteraracion sobre cada enlace de navegacion
      enlacesNav.forEach(enlace => {
        enlace.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });

      // Activar seccion para animacion scroll
      sec.classList.add('animacion-inicio');
    } else {
      sec.classList.remove('animacion-inicio');
    }
  });

  // encabezado principal
  let encabezado = document.querySelector('.encabezado');
  encabezado.classList.toggle('encabezado-fijo', window.scrollY > 100);

  // Eliminar el icono menu y barra de navegacion al hacer click en los enlaces de navegacion
  menuIcono.classList.remove('bx-x');
  menuNavegacion.classList.remove('active');

  // Animacion en seccion footer
  let pieDePagina = document.querySelector('.pie-de-pagina');
  pieDePagina.classList.toggle('animacion-inicio', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

  // Mostrar el botón "Leer más" y ocultar contenido adicional al salir de la sección
  let seccionSobreMi = document.querySelector('.sobre-mi');
  let top = window.scrollY;
  let offset = seccionSobreMi.offsetTop - 100;
  let height = seccionSobreMi.offsetHeight;
  let leerMasBoton = document.getElementById('leer-mas-boton');
  let contenidoAdicional = document.querySelector('.contenido-adicional');

  if (top < offset || top > offset + height) {
    console.log('Mostrando botón "Leer más"');
    leerMasBoton.classList.remove('hidden'); // Mostrar el botón "Leer más"
    contenidoAdicional.classList.remove('mostrar'); // Ocultar el contenido adicional
  }
}

// Mostrar contenido adicional al hacer clic en "Leer más"
document.getElementById('leer-mas-boton').addEventListener('click', function(evento) {
  evento.preventDefault();
  let contenidoAdicional = document.querySelector('.contenido-adicional');
  contenidoAdicional.classList.add('mostrar');
  this.classList.add('hidden'); 
});
