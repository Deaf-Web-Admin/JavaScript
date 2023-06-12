//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//1.2 Cambia el primer elemento de avengers a "IRONMAN"
console.log(avengers[0].replace("HULK","IRONMAN"));

//1.3 console numero de elementos en el array usando la propiedad correcta de Array.
console.log(avengers.length);

//1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
let NuevosAvengers=avengers.concat("Morty","Summer");
console.log(NuevosAvengers[NuevosAvengers.length-1]);

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
NuevosAvengers.pop();
console.log(NuevosAvengers[0],NuevosAvengers[NuevosAvengers.length-1]);


//1.6 Elimina el segundo elemento del array y muestra el array por consola.
NuevosAvengers.splice(1,1);
console.log(NuevosAvengers);