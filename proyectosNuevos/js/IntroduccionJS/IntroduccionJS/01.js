//arrays o arreglos
/*
const tecnologias = [20, 230, 'react' , 'Javascript'];



console.log(tecnologias.length);
console.log(tecnologias);
console.log(tecnologias[2]);

//operaciones en los arreglos.-

//añadir elementos en el array con PUSH, al final
tecnologias.push('motomel');


//añadir elementos en el array con UNSHIFT al inicio

tecnologias.unshift('motomel');



console.log(tecnologias);

const nuevoArreglo = [...tecnologias, 'SKUA PAPA'];
console.log(nuevoArreglo);

const nuevoArreglo2 = ['SKUA PAPA',...tecnologias];
console.log(nuevoArreglo2);

console.table(nuevoArreglo2);

//eliminar al final;
tecnologias.shift(); //elimina al inicio
tecnologias.splice(2,3); //elimina desde la posicion 2 al 3
console.table(tecnologias);
*/

const tecnologias = [20, 230, 'react' , 'Javascript', 'html'];
console.table(tecnologias);


const nuevoArray = tecnologias.filter(function (tech){
    return tech !== 'react';
})

console.table(nuevoArray);

/* con map reemplazamos en un nuevo array una posiocion*/

const tecnologias2 = tecnologias.map( function(tech){
    if (tech === 20){
        return 'GraphQL'
    }else{
        return tech
    }
})

console.table(tecnologias2);



