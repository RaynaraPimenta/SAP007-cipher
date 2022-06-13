import cipher from './cipher.js';

const botao1 = document.getElementById("botao1")                        // botão para cifrar
const botao2 = document.getElementById("botao2")                        // botão para decifrar
const cartaEntrada = document.getElementById("digiteAqui");             // carta colocada para cifrar ou decifrar
const numDeslocamento = document.getElementById("deslocamento");        // número do deslocamento
const resultado = document.getElementById("textocifrado");              // campo com o resultado da carta de entrada + o deslocamento

botao1.addEventListener("click", function () {                          // quado clicar o botão1 (cifrar) vai executar a função click que gera o resultado baseado no: encode, depois deslocamento e por ultimo na mensagem
  resultado.value = cipher.encode(parseInt(numDeslocamento.value),cartaEntrada.value);   
}, false);                            

botao2.addEventListener("click", function () {                          // quado clicar o botão1 (decifrar) vai executar a função click que gera o resultado baseado no: deencode, depois deslocamento e por ultimo na mensagem
  resultado.value = cipher.decode(parseInt(numDeslocamento.value), cartaEntrada.value);
}, false);

const onModal = document.getElementById("abrirModal")
function mostrarModal() {
  const modal = getElementById("instrucoes")
  modal.style.display ="block"
}
onModal.addEventListener("click" modal)


// 1-pegar valor do botão de abrir (x)
//2 fazer uma função com uma const com o valor da instrução (f); colocando display block
//3- (x).addEventListene(evento, (f))

// 1-pegar valor do botão de fechar (x)
//2 fazer uma função com uma const com o valor da instrução (f); colocando display none
//3- (x).addEventListene(evento, (f))
