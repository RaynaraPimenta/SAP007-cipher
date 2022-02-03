const cipher = {

  encode:

    function (numDeslocamento, msgUsuario) {
      if (typeof numDeslocamento !== "number" || !isNaN(Number(msgUsuario))){
        throw TypeError("deslocamento precisa ser número")
      }
      let msgCifrada = "";                                               // tem que começar com espaço vazio para ele entender quando começar a colocar elementos novos
                                                   
      for (let i = 0; i < msgUsuario.length; i++) {                      // começa a ler na posição 0, vai lendo de 1 em 1 posição, para quando a ultima posição for 0, ou seja, quando não tiver mais nada 
        let cifrando = msgUsuario[i].charCodeAt();
        
        //1) letras maiúsculas
        if (cifrando >= 65 && cifrando <= 90) {                           
          cifrando = ((cifrando - 65 + numDeslocamento) % 26) + 65       // o que é escrito na caixa de texto precisa ser identificado no código por sua numeração   
        }                                                                // depois é subitraido 65 para se tornar 0 e adcionado ao número de casas para deslocar
        //2) letra minúscula                                                só assim se coloca módulo, pra saber o quanto sobratia do alfabeto, depois soma-se 65 para voltar a contar no código original
        else if (cifrando >= 97 && cifrando <= 122) {                    
          cifrando = ((cifrando - 97 + numDeslocamento) % 26) + 97       
        }
        //3) espaço ! "" # $ % & ' () * + , - . /
        else if (cifrando >= 32 && cifrando <= 47){                      
          cifrando = ((cifrando - 32 + numDeslocamento) % 95) + 32
        }                                               
        //4) números
        else if (cifrando >= 48 && cifrando <= 57){                      
          cifrando = ((cifrando - 48 + numDeslocamento) % 95) + 48
        }
        //5) : ; > = < ? @
        else if (cifrando >= 58 && cifrando <= 64){                      
          cifrando = ((cifrando - 58 + numDeslocamento) % 95) + 58
        }
        //6) [ / ] ^ _ `
        else if (cifrando >= 91 && cifrando <= 96){                      
          cifrando = ((cifrando - 91 + numDeslocamento) % 95) + 91
        }
        //7) { | } ~
        else if (cifrando >= 123 && cifrando <= 126){                      
          cifrando = ((cifrando - 123 + numDeslocamento) % 95) + 123
        }
        msgCifrada += String.fromCharCode(cifrando);                     //joga o resultado da cifra dentro do espaço na msgCifrada
      }
      console.log(msgCifrada)
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
        
        //1) letras maiúsculas
        if (decifrando >= 65 && decifrando <= 90) {
          decifrando =((decifrando - 65 - numDeslocamento)%26) + 65
        }
        //2) letra minúscula        
        else if (decifrando >= 97 && decifrando <= 122) {
          decifrando =((decifrando -97 - numDeslocamento) % 26) +97
        }
        //3) espaço ! "" # $ % & ' () * + , - . /
        else if (decifrando >= 32 && decifrando <= 47){                      
          decifrando =((decifrando - 32 - numDeslocamento) % 95) + 32
        }
        //4) números
        else if (decifrando >= 48 && decifrando <= 57){                      
          decifrando =((decifrando - 48 - numDeslocamento) % 95) + 48
        }
        //5) : ; > = < ? @
        else if (decifrando >= 58 && decifrando <= 64){                      
          decifrando = ((decifrando - 58 - numDeslocamento) % 95) + 58
        }
        //6) [ / ] ^ _ `
        else if (decifrando >= 91 && decifrando <= 96){                      
          decifrando = ((decifrando - 91 - numDeslocamento) % 95) + 91
        }
        //7) { | } ~
        else if (decifrando >= 123 && decifrando <= 126){                      
          decifrando =((decifrando - numDeslocamento) % 95) + 123// OK
        }
        msgDecifrada += String.fromCharCode(decifrando);
      }
      return msgDecifrada;
    }
};
export default cipher;