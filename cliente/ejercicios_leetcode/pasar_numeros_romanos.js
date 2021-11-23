var intToRoman = function(num) {
    var letras_romanas = {M: 1000,CM: 900,D: 500,CD: 400,C: 100,XC: 90,L: 50,XL: 40,X: 10,IX: 9,V: 5,IV: 4,I: 1};
  var str = '';

  for (var i of Object.keys(letras_romanas)) {
    var mitad = Math.floor(num / letras_romanas[i]);
    num -= mitad * letras_romanas[i];
    str += i.repeat(mitad);
  };

  return str;
};
    