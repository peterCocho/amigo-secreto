// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// creando el arry amigos para almacenarlos
let amigos = []

// Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.

function agregarAmigo() {
  let amigo = document.getElementById('amigo').value;
  if (amigo != "") {
    amigos.push(amigo);
    console.log(amigos)
    limpiarCampo()
  } else {
    alert("Por favor, inserte un nombre.")
  }
  

}

function limpiarCampo() {
  document.querySelector('#amigo').value = '';
}

