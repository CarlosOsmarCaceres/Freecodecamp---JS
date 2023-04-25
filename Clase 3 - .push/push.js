
// Configuración
const myArray = [["John", 23], ["cat", 2]];
// Cambia solo el código debajo de esta línea
myArray.push(["dog",3])
console.log(myArray);


const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

// Configuración
const myArray1 = [["John", 23], ["cat", 2]];
// Cambia solo el código debajo de esta línea
const removedFromMyArray = myArray1.pop();
console.log(removedFromMyArray);
console.log(myArray1);

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
console.log(removedFromOurArray);
console.log(ourArray);


// Configuración
const myArray10 = [["John", 23], ["dog", 3]];
myArray10.shift();

// Cambia solo el código debajo de esta línea
myArray10.unshift(["Paul", 35])
console.log(myArray10)
/* 
Lista de compras
Crea una lista de compras en la variable myList. La lista debe ser un arreglo multidimensional que contenga varios sub-arreglos.

El primer elemento de cada sub-arreglo debe contener una cadena con el nombre del artículo. El segundo elemento debe ser un número que represente la cantidad, por ejemplo.

["Chocolate Bar", 15]
Debe haber al menos 5 sub-arreglos en la lista. */

const myList = [["banana", 5],["manzana", 4],["pera", 8],["cebolla", 7],["choclo", 25]];
console.log(myList);
