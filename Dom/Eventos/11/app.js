//Añade un evento dragstart a una imagen y cambia el texto de un elemento con ID mensaje mientras el usuario arrastra la imagen.


const imagen = document.getElementById("imagen");
const mensaje = document.getElementById("mensaje");

imagen.addEventListener("dragstart", (event) => {

mensaje.textContent="Dueña del mal";
  event.target.classList.add("dragging");
});
imagen.addEventListener("dragend", (event) => {
    
  event.target.classList.remove("dragging");
});