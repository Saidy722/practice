
const formularioCrear = document.getElementById('formularioCrear');
const formularioEditar = document.getElementById('formularioEditar');
const pendiente = document.getElementById('pendiente');
const progreso = document.getElementById('progreso');
const completado = document.getElementById('completado');


let tareas = [];


function crearTarea(titulo, descripcion, fecha) {
  const tarea = {
    id: Date.now(),
    titulo,
    descripcion,
    fecha,
  };
  tareas.push(tarea);
  agregarTarea(tarea, pendiente);
}


function agregarTarea(tarea, contenedor) {
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('tarjeta');
  tarjeta.draggable = true;
  tarjeta.innerHTML = `
    <h3>${tarea.titulo}</h3>
    <p>${tarea.descripcion}</p>
    <p>${tarea.fecha}</p>
    <button class="btn-eliminar" onclick="eliminarTarea(${tarea.id})">Eliminar</button>
    <button class="btn-editar" onclick="editarTarea(${tarea.id})">Editar</button>
  `;
  contenedor.appendChild(tarjeta);
}

// Función para eliminar una tarea
function eliminarTarea(id) {
  tareas = tareas.filter((tarea) => tarea.id !== id);
  actualizarTarea();
}

// Función para mover una tarea
function moverTarea(id, contenedorDestino) {
  const tarea = tareas.find((t) => t.id === id);
  const contenedorOrigen = tarea.estado === 'pendiente' ? pendiente : tarea.estado === 'progreso' ? progreso : completado;
  
  tareas = tareas.map((t) => {
    if (t.id === id) {
      return {
        ...t,
        estado: contenedorDestino.id,
      };
    }
    return t;
  });
  
  contenedorOrigen.removeChild(document.getElementById(id));
  contenedorDestino.appendChild(document.getElementById(id));
}

// Función para editar una tarea
function editarTarea(id) {
  const tarea = tareas.find((t) => t.id === id);
  document.getElementById('editarTitulo').value = tarea.titulo;
  document.getElementById('editarDescripcion').value = tarea.descripcion;
  document.getElementById('editarFecha').value = tarea.fecha;
  document.getElementById('formularioEditar').onsubmit = function (e) {
    e.preventDefault();
    tarea.titulo = document.getElementById('editarTitulo').value;
    tarea.descripcion = document.getElementById('editarDescripcion').value;
    tarea.fecha = document.getElementById('editarFecha').value;
    actualizarTarea();
  }};
  

// Función para actualizar el DOM
function actualizarTarea() {
  pendiente.innerHTML = '';
  progreso.innerHTML = '';
  completado.innerHTML = '';

  tareas.forEach((tarea) => {
    if (tarea.estado === 'pendiente') {
      agregarTarea(tarea, pendiente);
    } else if (tarea.estado === 'progreso') {
      agregarTarea(tarea, progreso);
    } else if (tarea.estado === 'completado') {
      agregarTarea(tarea, completado);
    }
  });
}

// Event listeners para arrastrar y soltar
pendiente.addEventListener('dragstart', dragStart);
pendiente.addEventListener('dragover', dragOver);
pendiente.addEventListener('drop', drop);
progreso.addEventListener('dragstart', dragStart);
progreso.addEventListener('dragover', dragOver);
progreso.addEventListener('drop', drop);
completado.addEventListener('dragstart', dragStart);
completado.addEventListener('dragover', dragOver);
completado.addEventListener('drop', drop);

// Funciones para el arrastrar y soltar
function dragStart(e) {
e.dataTransfer.setData('text/plain', e.target.id);
}

function dragOver(e) {
e.preventDefault();
}

function drop(e) {
e.preventDefault();
const id = e.dataTransfer.getData('text/plain');
const tarjeta = document.getElementById(id);
const contenedorDestino = e.target;
if (contenedorDestino.classList.contains('muroTareas')) {
contenedorDestino.appendChild(tarjeta);
const estadoDestino = contenedorDestino.id;
const tarea = tareas.find((t) => t.id === parseInt(id));
tarea.estado = estadoDestino;
actualizarTarea();
} else {
const contenedorOrigen = tarjeta.parentNode;
contenedorOrigen.insertBefore(tarjeta, e.target);
const estadoOrigen = contenedorOrigen.id;
const estadoDestino = contenedorDestino.id;
const tarea = tareas.find((t) => t.id === parseInt(id));
tarea.estado = estadoDestino;
actualizarTarea();
}
}

// Event listener para el formulario de crear tarea
formularioCrear.addEventListener('submit', function (e) {
e.preventDefault();
const titulo = formularioCrear.titulo.value;
const descripcion = formularioCrear.descripcion.value;
const fecha = formularioCrear.fecha.value;
crearTarea(titulo, descripcion, fecha);
formularioCrear.reset();
});



































/* let muroTareas = [];
let editando = false;
let editandoTarea = null;

const edicionTareas = document.getElementById('edicionmuro');
const formularioCrearNew = document.getElementById('formularioCrear');
const formularioEditarNew = document.getElementById('formularioEditar');

const tituloNew = document.getElementById('titulo');
const descripcionNew = document.getElementById('descripcion');
const fechaNew = document.getElementById('fecha');
const btnAgregar = document.getElementById('btnAgregarTarea');
const pendienteNew = document.getElementById('pendiente');
const progresoNew = document.getElementById('progreso');
const completadoNew = document.getElementById('completado');


window.addEventListener("load", cargarDatos)

function cargarDatos() {
  if (localStorage.getItem("muro")) {
    muro = JSON.parse(localStorage.getItem("muro"));
    mostrarNota();
  }
}

formularioCrearNew.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();

  if (tituloNew.value === "" || tituloNew.value === "" || tituloNew.value === "") {
    alert("Todos los campos son obligatorios.");
    return;
  }
    if (editandoTarea) {
      editarNota();
      editandoTarea = false;
    } else {
      agregarNota();
    }
  
    formularioCrearNew.reset();
}

function agregarTarea() {
  const nuevaTarea = {
    titulo: tituloNew.value,
    descripcion: descripcionNew.value,
    fecha: fechaNew
  };

  muro.push(nuevaTarea);
  mostrarTarea();
  guardarDatos();
}


function mostrarTarea() {
  pendienteNew.innerHTML = " ";

  muroTareas.forEach((tareaNueva, index) => {
    const { titulo, nota, fecha } = tareaNueva;

    const parrafo = document.createElement("p");
    parrafo.textContent = `${titulo} - ${nota} - ${fecha}`;

    const editarBoton = document.createElement("button");
    editarBoton.onclick = () => cargarTarea(index);
    editarBoton.textContent = "Editar";
    editarBoton.classList.add("tarjeta", "btn-editar");
    parrafo.append(editarBoton);

    const eliminarBoton = document.createElement("button");
    eliminarBoton.onclick = () => eliminarTarea(index);
    eliminarBoton.textContent = "Eliminar";
    eliminarBoton.classList.add("tarjeta", "btn-eliminar");
    parrafo.append(eliminarBoton);
    pendienteNew.appendChild(parrafo);

  });
}

function eliminarTarea(index) {
  if (index !== -1) {
    muroTareas.splice(index, 1);
    mostrarTarea();
    guardarDatos(); 
  }
};

function cargarTarea(index) {
  const tarea = muroTareas[index];
  if (tarea) {
    tituloNew.value = tarea.titulo;
    descripcionNew.value = tarea.descripcion;
    fechaNew.value = tarea.titulo;
    editandoTarea = true;
    editandoTarea = index;
    btnAgregar.textContent = "Guardar";
  }
}

function editarTarea() {
  if (editandoTarea !== null) {
    muroTareas[editandoTarea] = {
      titulo: tituloNew.value,
      descripcion: descripcionNew.value,
      fecha: fechaNew.value
};

    mostrarTarea();
    editandoTarea = false;
    editandoTarea = null;
    btnAgregar.textContent = "Agregar";
  }
}

function guardarDatos() {
  localStorage.setItem("muroTareas", JSON.stringify(muroTareas));
} */














// Función para editar una tarea
/* function editarTarea(id) {
    const tarea = tareas.find((t) => t.id === id);
    document.getElementById('editarTitulo').value = tarea.titulo;
    document.getElementById('editarDescripcion').value = tarea.descripcion;
    document.getElementById('editarFecha').value = tarea.fecha;
    document.getElementById('formularioEditar').onsubmit = function (e) {
      e.preventDefault();
      tarea.titulo = document.getElementById('editarTitulo').value;
      tarea.descripcion = document.getElementById('editarDescripcion').value;
      tarea.fecha = document.getElementById('editarFecha').value;
      actualizarTarea();
    };
  }
   */

// Event listeners para arrastrar y soltar
/* pendiente.addEventListener('dragstart', dragStart);
pendiente.addEventListener('dragover', dragOver);
pendiente.addEventListener('drop', drop);
progreso.addEventListener('dragstart', dragStart);
progreso.addEventListener('dragover', dragOver);
progreso.addEventListener('drop', drop);
completado.addEventListener('dragstart', dragStart);
completado.addEventListener('dragover', dragOver);
completado.addEventListener('drop', drop); */

// Funciones para el arrastrar y soltar
/* function dragStart(e) {
e.dataTransfer.setData('text/plain', e.target.id);
}

function dragOver(e) {
e.preventDefault();
}

function drop(e) {
e.preventDefault();
const id = e.dataTransfer.getData('text/plain');
const tarjeta = document.getElementById(id);
const contenedorDestino = e.target;
if (contenedorDestino.classList.contains('muroTareas')) {
contenedorDestino.appendChild(tarjeta);
const estadoDestino = contenedorDestino.id;
const tarea = tareas.find((t) => t.id === parseInt(id));
tarea.estado = estadoDestino;
actualizarTarea();
} else {
const contenedorOrigen = tarjeta.parentNode;
contenedorOrigen.insertBefore(tarjeta, e.target);
const estadoOrigen = contenedorOrigen.id;
const estadoDestino = contenedorDestino.id;
const tarea = tareas.find((t) => t.id === parseInt(id));
tarea.estado = estadoDestino;
actualizarTarea();
}
}
 */