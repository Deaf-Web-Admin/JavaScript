const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

//let sumatoria=0;

function findLongestWord(param) {
let  temporal=param;//olvide crear una variable scope, siempre me daba la respuesta del param porque esta fuera de scope
    while (temporal[1].length=0){

        if (temporal[0].length <= temporal[1].length){
        temporal.shift();

        } else {        temporal.splice(1,1)

        }

    }

return temporal[0];
}
const temporal2=findLongestWord(avengers);
console.log(temporal2);//me daba la respuesta de la variable global, no la de la funcion

//for (let contador=0;contador<avengers.length;contador++){
    //console.log(avengers[contador]);//muestra el nombre
    //console.log(avengers[contador].length);//muestra el tamano de la palabra
    //sumatoria=sumatoria+(avengers[contador].length)//me va sumando cada tamano de palabra
    //console.log("------")           //solo para referencia de separacion
    //console.log(sumatoria);         //me muestra el total
//}


