cipher = {
  encode: () => {
    str = document.getElementById("input1").value.toUpperCase(); 
    cifrado1 = document.getElementById("cifrado1");
    offset = parseInt(document.getElementById("espacio1").value);
    var salida = "";
      var oldASCII; //donde se guarda el codigo ascii de una letra
      var newASCII;//codigo ascii resultante luego de sumarle shiftedpositions
      //por cada letra de la entrada
      for(var c = 0; c < str.length; c++){
        oldASCII = str[c].charCodeAt();//obtenemos su codigo
        newASCII = oldASCII + offset;//desplazamos de lugar la letra al sumarle shiftedpositions
        salida = salida.concat(String.fromCharCode(newASCII));//convertimos el nuevo codigo a string y concatenamos
      }
      cifrado1.value = salida;
      return salida;

  },
  decode: () => {
    str = document.getElementById("input2").value.toUpperCase(); 
    cifrado2 = document.getElementById("cifrado2");
    offset = document.getElementById("espacio2").value;
    offset = offset * -1; 

    var output="";
    clave = parseInt(offset);
    for (var i=0; i<str.length;i++){
		output += String.fromCharCode(str.charCodeAt(i)+clave);
    }
	  // All done!
    cifrado2.value = output;
    return output;
  }
}