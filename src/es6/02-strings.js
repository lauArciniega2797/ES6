let hello = 'Hello'
let world = 'World'

/* ANTES DE ES6 */
let epicPhrase = hello + ' ' + world + '!!!!'
// Multilinea
let lorem = 'este es un string \n' + 'esto es otra línea'

/* DESPUES DE ES6 */
// Con ES6 se agrego el template literals (se usan las comillas francesas)
let epicPhrase2 = `${hello} ${world} !!!`
// Multilinea
let lorem2 = `
    Esto es una frase épica
    Esta es una continuación de la línea anterior
`
