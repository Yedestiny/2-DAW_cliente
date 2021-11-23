function añadir_imagen() {
    let imagen = document.createElement('img');
    imagen.src = "https://img.huffingtonpost.com/asset/5d3e321a2400009d17936c2b.jpeg?ops=scalefit_720_noupscale";
    document.getElementById("imagenes").appendChild(imagen);

};

function borrar_imagen(e) {
    document.getElementById("imagenes").removeChild(e.target);

};


function imagen_personlaizada() {
    let imagen = document.createElement('img');
    imagen.src = document.getElementById("enlace").value;
    document.getElementById("enlace").value = "";
    document.getElementById("imagenes").appendChild(imagen);

};

document.getElementById("personalizado").addEventListener("click", imagen_personlaizada);

document.getElementById("imagenes").addEventListener("click", borrar_imagen);

document.getElementById("añadir").addEventListener("click", añadir_imagen);