var lastName = 'Laura' //declaramos la variable lastName y le asignamos el valor Laura
lastName = 'Cecilia' //aquí estamos reasignando el valor inicial por Cecilia

console.log(lastName)

let fruit = 'Apple'
fruit = 'Kiwi'
console.log(fruit)

const animal = 'Dog'
animal = 'Perro (in spanish)' // esta reasignación esta mal, la constante no cambia
console.log(animal)

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple' // function scope
        let fruit2 = 'Kiwi' // block scope
        const fruit3 = 'Banana' // block scope
    }
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}

fruits()