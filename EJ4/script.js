document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('nuevaTareaForm');
    const inputTitulo = document.getElementById('tituloTarea');
    const listaTareas = document.getElementById('tareas');

    // Cargar tareas existentes
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(tareas => {
        tareas.forEach(tarea => {
            agregarTareaALista(tarea);
        });
    });

    // Función para guardar tareas en localStorage
    const guardarTareasEnLocalStorage = (tareas) => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    };

    // Función para cargar tareas desde localStorage
    const cargarTareasDeLocalStorage = () => {
        const tareas = localStorage.getItem('tareas');
        return tareas ? JSON.parse(tareas) : [];
    };

    // Cargar tareas existentes desde localStorage
    let tareas = cargarTareasDeLocalStorage();
    tareas.forEach(tarea => agregarTareaALista(tarea));

    // Añadir nueva tarea y guardar en localStorage
    form.addEventListener('submit', e => {
        e.preventDefault();
        const titulo = inputTitulo.value.trim();
        if (titulo) {
            const nuevaTarea = { id: Date.now(), title: titulo, completed: false };
            tareas.push(nuevaTarea);
            guardarTareasEnLocalStorage(tareas);
            agregarTareaALista(nuevaTarea);
            inputTitulo.value = ''; // Limpiar el campo de texto
        }
    });

    // Función para agregar tareas a la lista y manejar el cambio de estado
    function agregarTareaALista(tarea) {
        const item = document.createElement('li');
        item.textContent = tarea.title;
        item.className = tarea.completed ? 'completada' : '';
        item.addEventListener('click', () => {
            tarea.completed = !tarea.completed;
            item.className = tarea.completed ? 'completada' : '';
            // Actualizar el estado de la tarea en localStorage
            guardarTareasEnLocalStorage(tareas);
        });
        listaTareas.appendChild(item);
    }
});


