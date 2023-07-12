//Usa un bucle para recorrer el array de peliculas (products) y añade al
//array goodProducts los que tengan más de 20 ventas (sellCount) y al array
//badProducts los que tengan menos.
const goodProducts = [];
const badProducts = [];
const products = [
{ name: "Funko Dr. Strange", sellCount: 10 },
{ name: "Mochila de protones: Ghostbusters", sellCount: 302 },
{ name: "Sable laser FX", sellCount: 23 },
{ name: "Varita de Voldemort", sellCount: 6 },
];
for (let bucle = 0; bucle <products.length;bucle++){
    if (products[bucle].sellCount>20) {
        goodProducts.push(products[bucle].name);        
    } else {
        badProducts.push(products[bucle].name);
    }    
}
console.log("Los mas vendidos :",goodProducts);
console.log("Los menos vendidos :",badProducts);