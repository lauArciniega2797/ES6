// Forma normal de declarar una funcion
function square(num){
    return num * num;
}

// Forma de decalara una funcion con es6. (Arrow funcion)
const square = (num) => {
    return num * num;
}

// es lo mismo que la anterior, pero mas reducida. Con return inplicito, o sea es mas simple esto.
const square = num => (num * num)

//ventajas
//son mas amigables las arrow function