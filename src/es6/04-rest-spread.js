//arrays destructuring
let fruits = ['Apple', 'Banana']
let [a , b] = fruits

console.log(a,b) // 'Apple' 'Banana'
console.log(a) // 'Apple'
console.log(b) // 'Banana'
console.log(a, fruits[1]) // 'Apple' 'Banana'

// object destructuring
let user = {username:'Laura', age:24}
let {username, age} = user

console.log(username, age) // Laura 24
console.log(username) // Laura
console.log(user.username) // Laura
console.log(age) // 24
console.log(user.age) // 24


/* SPREAD OPERATOR (...) */
//propagar los elementos de un iterable
let person = {name: 'Laura', age: 25}
let country = 'MX'

let data = { ...person, country }
let data2 = { id: 2, ...person, country }

console.log(data) //{ name: 'Laura', age: 25, country: 'MX' }
console.log(data2) //{ id: 2, name: 'Laura', age: 25, country: 'MX' }

/* REST */
function sum(num, ...values){
    console.log(values)
    console.log(num + values[0])
    return num + values[0]
}
//el primer argumento que le pasamos corresponde al parametro num de la funcion
sum(1, 1, 2, 3) // 2
sum(4, 7, 6, 5) // 11
