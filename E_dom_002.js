//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const createDiv = document.createElement("div");
document.body.appendChild(createDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const createP = document.createElement("p");
createP.innerHTML = "Soy el parrafo";
document.body.appendChild(createP);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
//loop con javascript.
//aqui me comenzo a doler la cabeza...........
const createAnotherDiv = document.createElement("div");
for (let i = 0; i < 6; i++) {
    const createSixParagraph = document.createElement("p");
    createSixParagraph.innerHTML = `parafo ${i}`;
    createAnotherDiv.appendChild(createSixParagraph)
  }
document.body.appendChild(createAnotherDiv);

//2.4 Inserta dinamicamente con javascript en un html una p con el
//texto 'Soy dinámico!'.
const createThirdP = document.createElement("p");
createThirdP.innerHTML = "Soy dinámico!";
document.body.appendChild(createThirdP);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const primeraInsercion = document.querySelector("h2", ".fn-insert-here");
primeraInsercion.innerHTML = "Wubba Lubba dub dub";
document.body.appendChild(primeraInsercion)

//2.6 Basandote en el siguiente array crea una lista ul > li con
//los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me


//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//Recuerda que no solo puedes insertar elementos con .appendChild.


//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
//.fn-insert-here
