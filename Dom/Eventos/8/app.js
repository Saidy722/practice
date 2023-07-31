//Añade un evento mouseover a una imagen y muestra un texto descriptivo en un elemento con ID descripcion.


window.addEventListener('load', function() {
  var imagen = document.getElementById('imagen');
  var descripcion = document.getElementById('descripcion');

var textoDescriptivo = descripcion.textContent;

  imagen.addEventListener('mouseover', function() {
    
    descripcion.style.visibility = 'visible';
    descripcion.textContent = textoDescriptivo;
  });

  imagen.addEventListener('mouseout', function() {
    descripcion.style.visibility = 'hidden';
  });
});





