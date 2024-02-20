class Producto {
    constructor(nombre, precio ){
        this.nombre = nombre;
        this.precio = precio;
    }


    formatearProducto (){
        return `Êl producto ${this.nombre} tiene un precio de  ${this.precio}`;
    }

    returnPrice (){
        return `El valor del producto es ${this.precio}`;
    }


    
}


const producto2 = new Producto('Monitor Curvo de 49', 800, false);
const producto3 = new Producto('Laptop Imperial Pro', 500, true);




class Libro extends Producto {
            constructor(nombre, precio, isbn) {
                super(nombre, precio);
                this.isbn = isbn;   
            }
            

            formatearProducto(){
                return `${super.formatearProducto()}  y su ISBN es ${this.isbn}`;
            }


}

const libro = new Libro ('Javascript the Revolutions', 120, '242342424234235')
console.log(libro);




console.log(producto2.formatearProducto ()); 
console.log(producto3.formatearProducto ()); 
console.log(libro.formatearProducto ()); 