//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers = [12, 21, 38, 5, 45, 37, 6];


function average(param) {
let sumatoria=0;
    for (let contador=0;contador<param.length;contador++){
        sumatoria=sumatoria+param[contador];
    }
    let sumatoria2=0;
    return (sumatoria/param.length);
    }
console.log(average(numbers));