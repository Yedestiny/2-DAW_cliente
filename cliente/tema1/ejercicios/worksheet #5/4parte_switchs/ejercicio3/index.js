var num1 = parseInt(prompt("Pon un numero:"))
var operacion = prompt("Elige un operador +,-,*,/")
var num2 = parseInt(prompt("Pon otro numero:"))


switch(operacion){
    case '+':
        document.write(`${num1} + ${num2} = ` + (num1+num2));
        break;

    case '-':
        document.write(`${num1} - ${num2} = ` + (num1-num2));
        break;

    case '*':
        document.write(`${num1} * ${num2} = ` + (num1*num2));
        break;

    case '/':
        document.write(`${num1} / ${num2} = ` + (num1/num2));
        break;     
    
    default:
        alert("Error, pruebe de nuevo");
        break;
        
}