cipher = {
  encode: () => {
    str = document.getElementById("input1").value.toUpperCase(); 
    cifrado1 = document.getElementById("cifrado1");
    offset = document.getElementById("espacio1").value;
    var output="";
    clave = parseInt(offset);
    for (var i=0; i<str.length;i++){
		output += String.fromCharCode(str.charCodeAt(i)+clave);
    }
    cifrado1.value = output;
    return output;  
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