const boton =   document.querySelector('#boton');  // primero guardamos en una constante la seleccion del boton o elemento que estamos usando en este caos


let total =0;
boton.addEventListener('click', function () {    //se crea la accion para el elemnto de arriba , opedir permiso en este caso
        Notification.requestPermission()
            .then (resultado => console.log(`El resultado: ${resultado}`)) //solicitiamos permiso aqui 
});



if (Notification.permission == 'granted') {
        new Notification('Esto es una notificación', {
            icon: 'img/pica.png', // esta es la imagen de la notificacion  
            body: ' Activando notiicacion ' 
        })
}