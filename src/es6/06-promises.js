const anotherFunction = () => {
    return new Promise((resolve, reject)=>{
        //logica para saber si va a ser un resolve o un reject
        if(false){
            resolve('😍')
        } else {
            reject('😪')
        }
    })
}

anotherFunction()
    .then(response => console.log(response)) //😍 | resolve
    .catch(err => console.log(err)) //😪 | reject0