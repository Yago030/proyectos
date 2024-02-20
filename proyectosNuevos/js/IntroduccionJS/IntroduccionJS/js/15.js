//ArrayMethods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

const carrito =[
    {nombre : 'Monitor 20 Pulgadas', precio :500},
    {nombre : 'Monitor 50  Pulgadas', precio :700},
    {nombre : 'Tablet', precio :300},
    {nombre : 'Audifonos', precio :200},
    {nombre : 'Teclado', precio :50},
    {nombre : 'Celular', precio :500},
    {nombre : 'Bocinas', precio :300},
    {nombre : 'Laptop', precio :800}
];

//for each 
meses.forEach(function (mes) {
    if (mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//include

let resultado = meses.includes('Marzo');
console.log(resultado);

//some ideal para arrelgo de objetos

resultado = carrito.some (producto => producto.nombre === 'Celular');
console.log(resultado);

//reduce para sumar los valores de los objetos.

resultado = carrito.reduce( function (total , producto){
    return total + producto.precio
}, 0);
console.log(resultado);


//filter , sirve para obtener elementos o separarlos

resultado = carrito.filter(function(producto){
    return producto.precio > 400;
})

console.log (resultado)