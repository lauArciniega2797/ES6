// enahced Object literals
function newUser(user, age, country, uID) {
    return {
        user,
        age,
        country,
        id:uID
    }
}

console.log(newUser('lau', 25, 'MX', 1))