function removeProperty(obj,prop) {
    if (obj.hasOwnProperty(prop)) { // Comprobamos que el objeto contenga la propiedad
        delete obj[prop]; // En caso de que la tenga, se la borramos
        return true;
    } else {
        return false;
    }
}

const candidatos = {
    nombre: 'Iker',
    apellidos: 'Balentziaga Pe\u00f1a',
    email: 'balenziaga@gmail.com',
    telefono: 665705210
}

console.log(removeProperty(candidatos,'telefono'));