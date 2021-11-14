function validarMayuscula(campo) {
    mayuscula = /[A-Z]/;
    return mayuscula.test(campo);
};

function validarCaracteresEspeciales(campo) {
    caracteres_especiales = /[!@#$%^&;]/;
    return caracteres_especiales.test(campo);
};

function validarCorreo(campo) {
    correo = /^(([\-\w]+)\.?)+@(([\-\w]+)\.?)+\.[a-zA-Z]{2,4}$/;
    return correo.test(campo);
};

function validar_Tarjeta(campo) {
    tarjeta = /[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}/;
    return tarjeta.test(campo);

};



          
