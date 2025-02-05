"use strict";

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// creando el arry amigos para almacenarlos
let amigos = [];

function accederAlElemento(elemento) {
	// Capturar el valor del campo de entrada: Utilizar document.getElementById  para obtener el texto ingresado por el usuario.
  let elementoHtml = document.getElementById(elemento);
  return elementoHtml;
}

// accediendo a los elementos HTML
let texto = accederAlElemento("amigo");
let error = accederAlElemento("error");


function agregarAmigo() {  

  let amigo = texto.value;
  texto.addEventListener("input", function (e) {
    this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ""); // Permite solo letras y espacios
});
  if (amigo != "") {
    if (amigos.includes(amigo)) {
      // agregando mensaje de error
      error.innerHTML = "El nombre ya esta en la lista.";
      limpiarCampo();
    }
    else {
      error.innerHTML = ""; // Limpiar el mensaje de error si se produjo antes de agregar el nuevo amigo
      amigos.push(amigo);
      limpiarCampo();
      mostrarLista();
    }
	} else {
    // agregando mensaje de error
		error.innerHTML = "Por favor, inserte un nombre.";
	}
}

// dejar vacio el campo del input
function limpiarCampo() {
  texto.value = "";
	
}

function mostrarLista() {
	let listaAmigos = document.getElementById("listaAmigos");
	listaAmigos.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

	let contenido = amigos
		.map(function (amigo) {
			return `<li>${amigo}</li>`;
			// Para asegurar que los elementos de la lista se muestren correctamente, cada uno en una nueva línea sin separadores intermedios no deseados
		})
		.join("");

	listaAmigos.innerHTML = contenido;
}

function sortearAmigo() {
  let resultado = accederAlElemento("resultado");
  let insert = accederAlElemento("insert");
  let boton2 = accederAlElemento("boton2");
  let subTitulo = accederAlElemento("subTitulo");

  limpiarCampo();
	if (amigos.length > 1) {
		listaAmigos.innerHTML = "";
    let amigoGenerado = Math.floor(Math.random() * amigos.length);
    error.innerHTML = "";
    resultado.innerHTML = `<li> El amigo secreto sorteado es: ${amigos[amigoGenerado]}</li>`;
    insert.style.display = 'none';
    boton2.style.display = 'none';
    subTitulo.style.display = 'none';
	} else {
	}
}
