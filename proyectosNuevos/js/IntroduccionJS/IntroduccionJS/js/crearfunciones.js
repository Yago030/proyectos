//function declarations:






//function expression , podemos llamarla antes de crearla

sumar();
 function sumar(){
    console.log(2+22 + " esta es la function DECLARATION");
}


// esta de abajo no podemos llamarla sin antes haberla declarado
const sumar2 = function(){
    console.log(2+22 + " esta es la function EXPRESSION");
}
sumar2();


//arrow function declaration



const arrowSumar = (numero, numero2=2) =>{
   return (numero + numero2 + " esta es la ARROW FUNCTION");
}


const resultado = arrowSumar(30,28);
console.log(resultado);




