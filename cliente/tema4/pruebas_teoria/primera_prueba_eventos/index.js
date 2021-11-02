function random(numero) {
    return Math.floor(Math.random() * (numero+1));
};
  

function cambia_color() {
    const color = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = color;
};



const boton = document.getElementById('botonCambiaColor');
boton.addEventListener('click', cambia_color);

const arcoiris = document.getElementById('arcoiris');
arcoiris.addEventListener('click',cambia_color);

const titulo = document.getElementById('titulo',cambia_color);
titulo.addEventListener('click',cambia_color);