window.cipher = {
  encode: () => {
   function caesar(str, offset) {
        const output = " ";
        offset = parseInt(offset);
        for (let i=0; i<str.length;i++){
        output += String.fromCharCode(str.charCodeAt(i)- 65 + offset )% 26 + 65;
        }
        return output;    
    }
  },
  decode: () => {
    function caesar(str, offset) {
      const output = " ";
      offset = parseInt(offset);
      for (let i=0; i<str.length;i--){
      output -= String.fromCharCode(str.charCodeAt(i)- 65 - offset )% 26 + 65 ;
      }
      return output;    
  }
  }
}
caesar();