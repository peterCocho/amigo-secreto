"use strict";

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// creando el arry amigos para almacenarlos
let amigos = [];

function agregarAmigo() {
	// Capturar el valor del campo de entrada: Utilizar document.getElementById  para obtener el texto ingresado por el usuario.
	let amigo = document.getElementById("amigo").value;
	if (amigo != "") {
		amigos.push(amigo);
		limpiarCampo();
		mostrarLista();
	} else {
		alert("Por favor, inserte un nombre.");
	}
}

function limpiarCampo() {
	document.querySelector("#amigo").value = "";
}

function mostrarLista() {
	let listaAmigos = document.getElementById("listaAmigos");
	resultado.innerHTML = "";
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
  let resultado = document.getElementById("resultado");
  let boton1 = document.getElementById("boton1");
  let boton2 = document.getElementById("boton2");

	if (amigos.length > 0) {
		listaAmigos.innerHTML = "";
		let amigoGenerado = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = `<li> El amigo secreto sorteado es: ${amigos[amigoGenerado]}</li>`;
    boton1.setAttribute('disabled', 'true');
    boton2.setAttribute('disabled', 'true');
    
	} else {
	}
}
