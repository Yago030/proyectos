

 
  async function obtenerEmpleados(){ //es el reemplazo de ajax

    const url = 'js/empleados.json';

/*







    fetch(url) 
                        //hacemos fetch a la api
        .then( resultado => resultado.json())




        




         .then(data => {  // una vez que tenemos el fethc sacamos los datos
            
            const {empleados} = data;
            empleados.forEach( empleado => {
                    console.log(empleado)
                    console.log(empleado.id)
                    console.log(empleado.nombre)
                    console.log(empleado.puesto)

                    document.querySelector('.contenido').textContent += empleado.nombre;
            })
        }) */

        const resultado = await  fetch(url); // cuando usamos async  y await, reducimos codigo y es mas rapido
        const datos = await resultado.json();
        console.log(resultado);
        console.log(datos);

    
    }


obtenerEmpleados();