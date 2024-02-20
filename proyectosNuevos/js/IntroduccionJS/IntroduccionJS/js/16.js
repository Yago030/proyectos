//declaration
//metodo de propiedad, son funciones con sintaxis de metodo
/*
const reproductor = {
    reproducir: function (id){ console.log(`reproduciendo cancion ${id}`)},
    pausar : function (){console.log('pausar')},
    crearPlayList: function (nombre) {
        console.log (` Creando la playList :  ${nombre}`)
    }
           
}

reproductor.borrarCancion = function (id){console.log(`Eliminando la cancion ${id} `)};

console.log(reproductor);

reproductor.reproducir(2850);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlayList('MateoRock')


resultado = carrito.reduce( (total, producto) =>  total + producto.precio, 0 );


*/


// objet literal
const producto = {
    nombre : 'Tablet',
    precio : 200,
    disp : true
}


 //object Constructor

 function Producto (nombre, precio, disp) {
    this.nombre = nombre;
    this.precio = precio;
    this.disp = disp;
}


    function formatearProducto (producto) {
        return  `El producto ${producto.nombre}`
    }

const producto2 = new Producto ('Monitor Curvo de 49' , 800, false);
const producto3 = new Producto ('Lapto imperial Pro', 500, true);

console.table(producto);
console.table(producto2);
console.table(producto3);




