function calculateSupply(dias,cantidad_por_dia){
    return "Necesitas "+dias*cantidad_por_dia+" kg por dia para sobrevivir " + dias + " dias. <br>";

};

document.write(calculateSupply(2,4));
document.write(calculateSupply(4,2));
document.write(calculateSupply(7,324));