//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers = [12, 21, 38, 5, 45, 37, 6];
let sumatoria=0
function average(param) {
    for (let contador=0;contador<param.length;contador++){
        sumatoria=sumatoria+param[contador];
        let total=(sumatoria/param.length);
    }
    return total;
    
console.log(average(numbers));

}