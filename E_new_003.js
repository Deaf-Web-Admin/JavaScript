//Usa un bucle para crear 3 arrays de peliculas filtrados por categorias.
//Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos
//y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en
//por consola.
const movies = [
{ name: "Titan A.E.", durationInMinutes: 130 },
{ name: "Nightmare before Christmas", durationInMinutes: 225 },
{ name: "Inception", durationInMinutes: 165 },
{ name: "The Lord of the Rings", durationInMinutes: 967 },
{ name: "Star Wars: A New Hope", durationInMinutes: 214 },
{ name: "Terminator", durationInMinutes: 140 },
];
let smallmovie = [];
let mediummovie = [];
let bigmovie = [];
for (let bucle = 0; bucle < movies.length; bucle++){
    if (movies[bucle].durationInMinutes < 100) {
        smallmovie.push(movies[bucle].name);
    } else if(movies[bucle].durationInMinutes >200){
        mediummovie.push(movies[bucle].name);
    }else{
    bigmovie.push(movies[bucle].name);
}
}
console.log("Peliculas pequeña: ", smallmovie);
console.log("pelicula mediana: ", mediummovie);
console.log("pelicula grande: ", bigmovie);

