

  let muro = [];
  let editando = false; //
  let editandoNota = null;
  
  const formulario = document.querySelector("#formulario");
  const tituloInput = document.querySelector("#titulo");
  const notaInput = document.querySelector("#nota");
  const btnAgregar = document.querySelector("#btnAgregar");
  const notasAgregadas = document.querySelector("#notasAgregadas");
  

  window.addEventListener("load", cargarDatos);
   
  function cargarDatos() {
    if (localStorage.getItem("muro")) {
      muro = JSON.parse(localStorage.getItem("muro"));
      mostrarNota();
    }
  }

 formulario.addEventListener("submit", validarFormulario);
  
  function validarFormulario(e) {
    e.preventDefault();
  
    if (tituloInput.value === "" || notaInput.value === "") {
      alert("Todos los campos son obligatorios.");
      return;
    }
  
    if (editandoNota) {
      editarNota();
      editandoNota = false;
    } else {
      agregarNota();
    }
  
    formulario.reset();
  }
  
  function agregarNota() {
    const nuevaNota = {
      titulo: tituloInput.value,
      nota: notaInput.value
    };
  
    muro.push(nuevaNota);
    mostrarNota();
    guardarDatos();
  }
  
  function mostrarNota() {
    notasAgregadas.innerHTML = " ";
  
    muro.forEach((notes, index) => {
      const { titulo, nota } = notes;
  
      const parrafo = document.createElement("p");
      parrafo.textContent = `${titulo} - ${nota}`;
  
      const editarBoton = document.createElement("button");
      editarBoton.onclick = () => cargarNota(index);
      editarBoton.textContent = "Editar";
      editarBoton.classList.add("btn", "btn-editar");
      parrafo.append(editarBoton);
  
      const eliminarBoton = document.createElement("button");
      eliminarBoton.onclick = () => eliminarNota(index);
      eliminarBoton.textContent = "Eliminar";
      eliminarBoton.classList.add("btn", "btn-eliminar");
      parrafo.append(eliminarBoton);
      notasAgregadas.appendChild(parrafo);
  
    });
  }
  
  function eliminarNota(index) {
    if (index !== -1) {
      muro.splice(index, 1);
      mostrarNota();
      guardarDatos(); 
    }
  };
  
  function cargarNota(index) {
    const nota = muro[index];
    if (nota) {
      tituloInput.value = nota.titulo;
      notaInput.value = nota.nota;
      editandoNota = true;
      editandoNota = index;
      btnAgregar.textContent = "Guardar";
    }
  }
  
  function editarNota() {
    if (editandoNota !== null) {
      muro[editandoNota] = {
        titulo: tituloInput.value,
        nota: notaInput.value
      };
  
      mostrarNota();
      editandoNota = false;
      editandoNota = null;
      btnAgregar.textContent = "Agregar";
    }
  }
  
  function guardarDatos() {
    localStorage.setItem("muro", JSON.stringify(muro));
  }
  






















