var a = [1,2,3,4,5,6,7,2,3,4]

function todosCero(a)
{
    a.forEach((valor, indice) => {
        a[indice] = 0;
    });
}

function mas_uno(a)
{
    a.forEach((valor, indice) => {
        a[indice] += 1;
    });
}

function espacio(a)
{
    a.forEach((valor, indice) =>{
        document.write(a[indice] + '&nbsp;');
    });
}


console.log(todosCero(a));
mas_uno(a);
espacio(a);
