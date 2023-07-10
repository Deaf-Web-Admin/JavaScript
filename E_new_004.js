//Usa un bucle para sumar el total de las ventas (sellCount)
//de todos los productos.
const products = [
{ name: "Funko Dr. Strange", sellCount: 10 },
{ name: "Mochila de protones: Ghostbusters", sellCount: 302 },
{ name: "Sable laser FX", sellCount: 23 },
{ name: "Varita de Voldemort", sellCount: 6 },
];
let sumatotal=0;
for (let bucle = 0; bucle < products.length; bucle++){
    sumatotal = sumatotal + products[bucle].sellCount;
}
console.log(sumatotal);
