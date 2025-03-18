let listaDeAmigos = [];

function agregarAmigo() {
    const nombreAmigo = document.getElementById("amigo").value;
    
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido");
        return;
    }
    
    listaDeAmigos.push(nombreAmigo);
    document.getElementById("amigo").value = "";
    mostrarListaDeAmigos();
    document.getElementById("resultado").innerHTML = "";
}

function mostrarListaDeAmigos() {
    const listaHtml = document.getElementById("listaAmigos");
    
    listaHtml.innerHTML = "";
    
    for (let i = 0; i < listaDeAmigos.length; i++) {
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = listaDeAmigos[i];
        listaHtml.appendChild(nuevoAmigo);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Necesitas agregar al menos un amigo para sortear");
        return; 
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length); 
    const amigoSeleccionado = listaDeAmigos[indiceAleatorio]; 
    const resultadoHtml = document.getElementById("resultado");
    resultadoHtml.innerHTML = "";
    
    const elementoResultado = document.createElement("li");
    elementoResultado.textContent = "Tu amigo secreto es: " + amigoSeleccionado;    
    resultadoHtml.appendChild(elementoResultado);
}

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});