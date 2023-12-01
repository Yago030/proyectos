function mostrarMasTexto(elemento) {
    var texto = elemento.parentNode.querySelector('.masTexto');
    if (texto.style.display === 'none') {
        texto.style.display = 'block';
        elemento.textContent = 'Ver menos';
    } else {
        texto.style.display = 'none';
        elemento.textContent = 'Ver más';
    }
}