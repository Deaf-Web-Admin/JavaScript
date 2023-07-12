//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const clase = document.querySelector(".showme");
console.log(clase);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const clase2 = document.querySelector("h1","#pillado");
console.log(clase2);


//1.3 Usa querySelector para mostrar por consola todos los p
const clase3 = document.querySelectorAll("p");
console.log(clase3);


//1.4 Usa querySelector para mostrar por consola todos los elementos con
//la clase.pokemon
const clase4 = document.querySelectorAll(".pokemon");
console.log(clase4);

//1.5 Usa querySelector para mostrar por consola todos los elementos con
//el atributo data-function="testMe".
const clase5 = document.querySelectorAll('[data-function="testMe"]');
console.log(clase5);


//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
//data-function="testMe".
const clase6 = document.querySelectorAll('[data-function="testMe"]');
console.log(clase6[2]);
