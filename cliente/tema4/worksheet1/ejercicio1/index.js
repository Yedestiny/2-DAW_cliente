function alerta_emergente(){
    alert('Se ha ejecutado la alerta')
}

const salta_alerta = document.getElementById('alerta');
salta_alerta.addEventListener('click',alerta_emergente);