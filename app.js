// Array donde se guardarán los nombres
let listaDeAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar nombre a la lista
    listaDeAmigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar el campo
    input.focus();
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    listaDeAmigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Debes ingresar al menos dos nombres para realizar el sorteo.");
        return;
    }

    const resultado = document.getElementById("resultado");
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${listaDeAmigos[indiceAleatorio]}</strong> 🎉</li>`;
}

