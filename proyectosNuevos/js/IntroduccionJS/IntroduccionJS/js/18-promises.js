const usuarioAuntenticado = new Promise ( (resolve , reject) => {
    const auth = false;

    if (auth) {
        resolve('USUARIO VALIDADO'); //el promose se cimple
    }else{
        reject('¡¡¡ ERROR !!! Inicio invalido.....'); // el promise no se cumple
    }
})

console.log('usuarioAuntenticado');

usuarioAuntenticado
.then( (resultado)=> console.log(resultado))

.catch((err) =>  console.log(err) )    

//existen 3 valores en los Promises 

//Pending : No se han cumplido pero no se rechazo
//Fulfilled : Ya se cumplio
//Rejected : Se ah rechazado o no se pudo cumplir


