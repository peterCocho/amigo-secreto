// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// creando el arry amigos para almacenarlos
let amigos = [];

// Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.

function agregarAmigo() {
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

// function mostrarLista() {
//   let listaAmigos = document.getElementById("listaAmigos");
//   listaAmigos.innerHTML = "";
//   let amigoAgregado = document.createElement("li");
// 	amigos.map(function (amigo) {

// 		amigoAgregado.innerHTML = amigo;
// 		listaAmigos.appendChild(amigoAgregado);
// 	});
// }

function mostrarLista() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.map(function (amigo) {
    let amigoAgregado = document.createElement("li");
    amigoAgregado.innerHTML = amigo;
    listaAmigos.appendChild(amigoAgregado);
  });
}
