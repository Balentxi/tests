function reordenarNumero(numero) {
    let arrayNumero = Array.from(numero.toString()).map(Number); // Creamos un array a partir del número recogido
    let nuevoNumero = arrayNumero.sort().reverse().join(''); // Reordenamos los dígitos del array y creamos un número entero
    return nuevoNumero;
}
console.log(reordenarNumero(2756938));