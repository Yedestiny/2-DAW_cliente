function random(numero) {
    return Math.floor(Math.random() * (numero+1));
};
  

function cambia_color(div) {
    const color = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    div.style.backgroundColor = color;
};

function contar(div,contador){
    contador ++;
    console.log("el div: "+ div+" se a pulsado " + contador + " veces")

}


div1 = document.getElementById("1")
div2 = document.getElementById("2")
div3 = document.getElementById("3")
div4 = document.getElementById("4")

contador1=0
contador2=0
contador3=0
contador4=0

cambia_color(div1)
cambia_color(div2)
cambia_color(div3)
cambia_color(div4)

div1.addEventListener('click', function(){contador1 ++;
    console.log("el div: "+ div1.style.backgroundColor+" se a pulsado " + contador1 + " veces")});

div2.addEventListener('click', function(){contador2 ++;
        console.log("el div: "+ div2.style.backgroundColor+" se a pulsado " + contador2 + " veces")});

div3.addEventListener('click', function(){contador3 ++;
        console.log("el div: "+ div3.style.backgroundColor+" se a pulsado " + contador3 + " veces")});

div4.addEventListener('click', function(){contador4 ++;
    console.log("el div: "+ div4.style.backgroundColor+" se a pulsado " + contador4 + " veces")});