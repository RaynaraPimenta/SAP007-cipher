const cipher = {

  encode:
    function (numDeslocamento, msgUsuario) {
if (typeof numDeslocamento !== "number" || !isNaN(Number(msgUsuario))){
        throw TypeError("deslocamento precisa ser número")
      }
      let msgCifrada = "";                                               // tem que começar com espaço vazio para ele entender quando começar a colocar elementos novos                                        
      for (let i = 0; i < msgUsuario.length; i++) {                      // começa a ler na posição 0, vai lendo de 1 em 1 posição, para quando a ultima posição for 0, ou seja, quando não tiver mais nada 
        let cifrando = msgUsuario[i].charCodeAt();                       // o que é escrito na caixa de texto precisa ser identificado no código por sua numeração
        if (cifrando >= 32 && cifrando <= 126) {                           
          cifrando = ((cifrando - 32 + numDeslocamento) % 95) + 32          
        }
        msgCifrada += String.fromCharCode(cifrando);                     //joga o resultado da cifra dentro do espaço na msgCifrada
      }
      return msgCifrada;                                                  //mostra a mensagem cifrada                                                       
    },
    
  decode:
    function (numDeslocamento, msgUsuario) {
      if (typeof numDeslocamento !== "number" || !isNaN(Number(msgUsuario))) {
        throw TypeError("deslocamento precisa ser número")
      }
      let msgDecifrada = "";
      for (let i = 0; i < msgUsuario.length; i++) {
        let decifrando = msgUsuario[i].charCodeAt();
        if (decifrando >= 32 && decifrando <= 126) {
          decifrando = ((decifrando - 32 - numDeslocamento)% 95) + 32
        }
        msgDecifrada += String.fromCharCode(decifrando);
      }

      return msgDecifrada;
    }
};
export default cipher;
