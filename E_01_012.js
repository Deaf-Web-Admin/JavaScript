/*
Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume
 y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:


crear 2 aaray, uno que lea y distinga entre numer y string y los separe

luego contar el tamano de cada string y guardarlo en una variable

el otro contar cada number y sumarlo y guardarlo en una variable

sumar ambas variables

*/
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
//solucion por el profe
let total=0;
for (const element of param){
if (typeof element === "string"){
    total += element.length;
} else {
    total+= element;
}
}
const quantity = param.length;
console.log(total/quantity);//41 4.5
}
averageWord(mixedElements);