const numbers = [1, 2, 3, 5, 45, 37, 58];
let sumatoria=0
function sumAll(param) {
    for (let contador=0;contador<param.length;contador++){
    sumatoria=sumatoria+param[contador];
}
return sumatoria;
}
console.log(sumAll(numbers));