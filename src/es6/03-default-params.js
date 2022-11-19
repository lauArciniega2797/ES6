/* ANTES DE ES6 */
function newUser(name, age, country){
    var name = name || 'Laura'
    var age = age || 25
    var country = country || 'México'

    console.log(name, age, country)
}

newUser()
newUser('Cecilia', 26, 'Colombia')

/* DESPUÉS DE ES6 */
function newAdmin(name = 'Laurencia', age = 25, country = 'MX'){
    console.log(name, age, country)
}

newAdmin()
newAdmin('Cecilia', 33, 'CO')