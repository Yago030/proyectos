import React from 'react'

function MagicArreglo() {



    
    const arreglo =[
     
        { id :0,   
          nombre : 'Santiago'},
        {
         id:1,
         nombre : 'Sergio'}
 
     ];

  return (
    <ul>
    {arreglo.map(i  => ( 
    <li key={i.id}>{i.nombre}</li>
    ))}
    </ul>


  );
}

export default MagicArreglo
