console.log("Crea una función llamada reusableFunction que imprima la cadena Hi World en la consola de desarrollo. Llama a la función." )

function reusableFunction(){
    console.log("Hi World")
}
reusableFunction();

function reusableFunction1(){
    return("Hi Worlds")
}
console.log(reusableFunction1())
//reusableFunction();



"/* Crea una función llamada functionWithArgs que acepte dos argumentos y muestre la suma de ellos en la consola de desarrollador. Llama a la función con dos números como argumentos. */"
function functionWithArgs(var1,var2){
    console.log(var1+var2)
    }
functionWithArgs(7,9); 

// Crea una función timesFive que acepte un argumento, lo multiplique por 5y devuelva el nuevo valor.

function timesFive(num){
    return num *5;
    }
console.log(timesFive(5));

/////////////////////////////////////////////////////////////

// Declara la variable myGlobal debajo de esta línea
let myGlobal = 10;
function fun1() {
    oopsGlobal = 5;
    }
fun1(5);

function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
console.log(fun2());
//////////////////////////////////////////////////////////////
// Configuración
const outerWear = "T-Shirt";

function myOutfit() {
  // Cambia solo el código debajo de esta línea
    let outerWear = "sweater";
  // Cambia solo el código encima de esta línea
    return outerWear;
}

console.log(myOutfit());
///////////////////////////////////////////////////////////////////

// Configuración
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);
// Cambia solo el código debajo de esta línea
console.log(processed);

//////////////////////////////////////////////////////////////////////
/* 
Escribe una función nextInLine que tome un arreglo (arr) y un número (item) como argumentos.

Agrega el número al final del arreglo, luego elimina el primer elemento del arreglo.

La función nextInLine debe entonces devolver el elemento que fue removido. */

function nextInLine(arr, item) {
    // Cambia solo el código debajo de esta línea
    arr.push(item)
    return arr.shift();
    // Cambia solo el código encima de esta línea
  }
  
  // Configuración
  let testArr = [1, 2, 3, 4, 5];
  
  // Muestra el código
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
  console.log(testArr)