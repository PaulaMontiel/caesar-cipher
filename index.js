document.getElementById("encode").addEventListener("click", () => {
    const output = document.getElementById('str').value;
    const offset = document.getElementById('offset').value;
    document.getElementById('cifrado').innerHTML = cipher.encode(output, offset);
});
document.getElementById("decode").addEventListener("click", () => {
    const output2 = document.getElementById('str2').value;
    const offset2 = document.getElementById('offset2').value;
    document.getElementById('descifrado').innerHTML = cipher.decode(output2, offset2);
});