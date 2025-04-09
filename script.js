let tareas = [
    {
        texto: "Hacer el TP4",
        date: "2024-03-27 10:00",
        resuelta: "2024-03-27 12:00"
    },
    {
        texto: "Asistir a la clase de EFSI",
        date: "2024-03-27 11:00",
        resuelta: "2024-03-27 12:00"
    }
];
let lista = document.getElementById("lista");

const agregarTarea = () => {
    let tareaIngresada = document.getElementById("tarea").value; 
    if (tareaIngresada !== "") { 
        tareas.push({
            texto: tareaIngresada,
            date: new Date().toLocaleString(),
            resuelta: false
        });
        document.getElementById("tarea").value = ""; 
        mostrarEnPantalla();
    }
};

const mostrarEnPantalla = () => {
   
    lista.innerHTML = "";
    tareas.forEach((tarea, index) => {
        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarea.resuelta;
        checkbox.onclick = () => marcarResuelta(index);

        let span = document.createElement("span");
        span.textContent = `${tarea.texto} - ${tarea.date}`;
        span.style.textDecoration = tarea.resuelta ? "line-through" : "none";

        li.appendChild(checkbox);
        li.appendChild(span);
        lista.appendChild(li);

        console.log(tareas)
    });
}
mostrarEnPantalla();

const marcarResuelta = (index) => {
    tareas[index].resuelta =  !tareas[index].resuelta;
    mostrarEnPantalla();
}

const BorrarTodo = () =>
{
    lista.innerHTML = "";
    tareas.length= 0;
    console.log(tareas);
}

const mostrarMasRapida = () => {
    let tareasResueltas = tareas.filter(tarea => tarea.resuelta !== false);
    
    if (tareasResueltas.length === 0) {
        document.getElementById("masRapida").innerText = "No hay tareas resueltas.";
        return;
    }

    let masRapida = tareasResueltas[0];
    let menorTiempo = new Date(masRapida.resuelta) - new Date(masRapida.date);

    tareasResueltas.forEach(tarea => {
        let tiempoResolucion = new Date(tarea.resuelta) - new Date(tarea.date);
        if (tiempoResolucion < menorTiempo) {
            masRapida = tarea;
            menorTiempo = tiempoResolucion;
        }
    });

    document.getElementById("masRapida").innerText = `La tarea más rápida fue: ${masRapida.texto}`;
};
