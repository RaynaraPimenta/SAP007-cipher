const cipher = {
  encode:

    function (numDesloc, msgUsuario) {

      let msgCifrada = "";

      for (let i = 0; i < msgUsuario.length; i++) {
        let cifrando = msgUsuario[i].charCodeAt();
        if (cifrando >= 65 && cifrando <= 90) {
          cifrando = ((cifrando - 65 + numDesloc) % 26) + 65
        }
        else if (cifrando >= 97 && cifrando <= 122) {
          cifrando = ((cifrando - 97 + numDesloc) % 26) + 97
        }


        msgCifrada += String.fromCharCode(cifrando);
      }
      return msgCifrada;
    },

  decode:

    function (numDesloc, msgUsuario) {

      let msgDecifrada = "";

      for (let i = 0; i < msgUsuario.length; i++) {
        let decifrando = msgUsuario[i].charCodeAt();
        if (decifrando >= 65 && decifrando <= 90) {
          decifrando = ((decifrando - 65 - numDesloc) % 26) + 65
        }
        else if (decifrando >= 97 && decifrando <= 122) {
          decifrando = (( decifrando - 97 - numDesloc) % 26) + 97
        }

        msgDecifrada += String.fromCharCode(decifrando);
      }
      return msgDecifrada;

    }
};




export default cipher;
