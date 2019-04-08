function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    let arrayFecha = userDate.split('/'), // Descomponemos el string en un array
        year = arrayFecha[2], //Año
        month = arrayFecha[0], //Mes
        day = arrayFecha[1]; //Día
    if (month.length < 2) month = '0' + month; // El mes tiene que tener 2 caracteres
    if (day.length < 2) day = '0' + day; // El día tiene que tener 2 caracteres

    return year + month + day;
}

console.log(formatDate('11/26/2014'));