window.cipher = ({
//función para cifrar
encode:(str,offset)=>{
  let output = '';
  offset = parseInt(offset); // ir guandando cada caracter
  for (let i = 0; i < str.length; i++) {
      let character = str.charCodeAt(i); // guardo el codigo ascii de cada i 
      if (65 <= character && character <= 90) {
          output+= String.fromCharCode(((character - 65 + offset) % 26) + 65); //
      } // para identificar las mayúsculas
      else if (97 <= character && character <= 122) {
              output += String.fromCharCode(((character - 97 + offset) % 26) + 97);
            }       // para identificar las minísculas 
             else {
              output+= str.charAt(i); // para que nos devuelva un string     
               }
    }
  return output;
},
//función para descrifrar
decode:(str,offset)=>{
    return cipher.encode(str, (26 - (offset % 26)));
}
})