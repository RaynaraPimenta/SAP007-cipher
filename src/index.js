import cipher from './cipher.js';

const stringDeEntrada = document.getElementById("entrada");
const numDeslocamento = document.getElementById("deslocamento");
const cifrar = document.getElementById("cifrar");
const descifrar = document.getElementById("descifrar");
const stringDeSaida = document.getElementById("saida");
const showModal = document.getElementById("abrir-modal");
const hideModal = document.getElementById("fechar-modal");

cifrar.addEventListener("click", function () {
  stringDeSaida.value = cipher.encode(parseInt(numDeslocamento.value),stringDeEntrada.value);   
}, false);

descifrar.addEventListener("click", function () {
  stringDeSaida.value = cipher.decode(parseInt(numDeslocamento.value), stringDeEntrada.value);
}, false);

function instruct () {
    let modal = document.querySelector('.modal')
    modal.style.display = 'block';
}
showModal.addEventListener('click', instruct)

function instructOff () {
    let modal = document.querySelector('.modal')
    modal.style.display = 'none';
}
hideModal.addEventListener('click', instructOff)
