// async / await

function descargarNuevosCliente (){
    return new Promise (resolve  => {
        console.log("descargarNuevosCliente.....Espere ....");


        setTimeout( () => {
            resolve("Los clientes fueron descargados ");

        })
    });
}



//Set timeout sirve para que espere un tiempo y luego ejecuta
//set interval sirve para que se repita ese proceso de ejecucion de await peridicamente

async function app(){

    try{
        const resultado  = await descargarNuevosCliente();
        console.log(resultado);
    }catch(err){
        console.log(err)
    }
       
}

app();

console.log('Este codigo no se bloquea');