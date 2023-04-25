/* Cree una ifdeclaración dentro de la función para devolver Yes, that was truesi el parámetro wasThatTruees truey devolver No, that was falseen caso contrario. */

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue){
        return "Yes, that was true";
        }
        return "No, that was false";
    // Only change code above this line

}
console.log(trueOrFalse(true))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Agregue el operador de igualdad a la línea indicada para que la función devuelva la cadena Equalcuando valsea equivalente a 12. */

// Setup
function testEqual(val) {
    if (val==12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
    }

console.log(testEqual(10));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Escribe sentencias if / else if encadenadas para cumplir con las siguientes condiciones:

num < 5 - devuelve Tiny
num < 10 - devuelve Small
num < 15 - devuelve Medium
num < 20 - devuelve Large
num >= 20 - devuelve Huge */

function testSize(num) {
    // Cambia solo el código debajo de esta línea
    if (num <5 ){
            return "Tiny"
        } else if (num <10){
            return "Small"
        } else if (num <15){
            return "Medium"
        } else if(num <20){
            return "Large"
        } else{
            return "Huge"
        }
    
    return "Change Me";
    // Cambia solo el código encima de esta línea
}
let newtest = testSize(7);
console.log(newtest)


////////////////////////////////////////////////////////////////////////////////////

let par = 10%2;
console.log(par)

//////////////////////////////////////////////////////////////////////////////////////

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

    // Cambia solo el código debajo de esta línea
    let promedio = par - strokes;
    if (strokes == 1){
        return names[0]
    } else if (par == strokes){
        return names[3]
    } else if (promedio >= 2){
        return names[1]
    } else if ((par-strokes) == 1){
        return names[2]
    } else if(promedio == -1){
        return names[4]
    } else if(promedio == -2){
        return names[5]
    } else {
        return names[6]
    }

    return "Change Me";
  // Cambia solo el código encima de esta línea
}

console.log(golfScore(10, 10));

////////////////////////////////////////////////////////////////////////////////////////////////


/* Escribe una declaración switch que pruebe val y establezca answer con las siguientes condiciones:
1 - alpha
2 - beta
3 - gamma
4 - delta */



function caseInSwitch(val) {
    //let answer = "";
    // Cambia solo el código debajo de esta línea
    switch(val){
            case 1:
            answer = "alpha";
            break;
            case 2:
            answer = "beta";
            break;
            case 3:
            answer = "gamma";
            break;
            case 4:
            answer = "delta";
            break;
        }
    
    
        // Cambia solo el código encima de esta línea
        return answer;
    }

console.log(caseInSwitch(3));


///////////////////////////////////////////////////////////////////////////////////////////////

/* Escribe una declaración switch para establecer answer con las siguientes condiciones:
a - apple
b - bird
c - cat
default - stuff */

function switchOfStuff(val) {
    let answer = "";
    // Cambia solo el código debajo de esta línea
    switch(val){
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }

    // Cambia solo el código encima de esta línea
    return answer;
}
console.log(switchOfStuff(1))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sequentialSizes(val) {
    let answer = "";
    // Cambia solo el código debajo de esta línea
    switch(val){
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 6:
      case 5:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
    }
  
  
    // Cambia solo el código encima de esta línea
    return answer;
  }
  
  console.log(sequentialSizes(5));

  ////////////////////////////////////////////////////////////////////////////////////////////////
  
/* Cambia la cadena de sentencias if/else if por una sentencia switch. */

  function chainToSwitch(val) {
    let answer = "";
    // Cambia solo el código debajo de esta línea
  
/*     if (val === "bob") {
      answer = "Marley";
    } else if (val === 42) {
      answer = "The Answer";
    } else if (val === 1) {
      answer = "There is no #1";
    } else if (val === 99) {
      answer = "Missed me by this much!";
    } else if (val === 7) {
      answer = "Ate Nine";
    }
   */
  
    switch (val){
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer = "Ate Nine";
        break;
    }
  
    // Cambia solo el código encima de esta línea
    return answer;
  }
  
  console.log(chainToSwitch(7));

  ////////////////////////////////////////////////////////////////////////////


  function isLess(a, b) {
    // Only change code below this line
/*     if (a < b) {
      return true;
    } else {
      return false;
    } */
  
    return a < b;
    // Only change code above this line
  }
  
  console.log(isLess(10, 15));

  ////////////////////////////////////////////////////////////////////////////////////////////

  // Configuración
function abTest(a, b) {
    // Cambia solo el código debajo de esta línea
  
    if (a < 0 || b < 0) {
      return undefined;
    }
    
  
    // Cambia solo el código encima de esta línea
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  console.log(abTest(2,2)); 

  ///////////////////////////////////////////////////////////////////////////////////
  
    let count = 0;
  function cc(card) {
    // Only change code below this line
    let regex = /[JQKA]/;
    if (card > 1 && card < 7) {
      count++;
    } else if (card === 10 || regex.test(card)) {
      count--;
    }
    
    if (count > 0)  return count + " Bet";
    return count + " Hold";
    
    // Only change code above this line
  }
  
  
  console.log(cc(10)); console.log(cc("A"));console.log(cc("A"));console.log(cc("K"));console.log(cc("K"));
 // c1=cc("10"); c2=cc("A");c3=cc("A");c4=cc("A");c5=cc("A");
 // cctotal=(c1+c2)
  //console.log(cc(cctotal))
  console.log(count)
  

let er = /ab+c/i; // notación literal
let er1 = new RegExp('ab+c', 'i') // constructor con patrón de cadena como primer argumento
let er2 = new RegExp(/ab+c/, 'i') // constructor con expresión regular literal como primer argumento (a partir de ECMAScript 6)
console.log(er2)

const paragraph = 'The quick brown fox jumps over the lazy dog. aBKJBKJt barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);

let coun = 0;

function cc1(card) {
  // Only change code below this line
  if (card == 2 || card == 3 ||card == 4 ||card == 5 ||card == 6 ) {
    coun++;
  } else if(card == 10 || card == "J" || card == "Q" || card == "A" || card == "k")  {
    coun--;
  }
if (coun > 0) return coun + " Bet";
  return coun + " Hold";
  return "Change Me";
  // Only change code above this line
}

cc1(10); cc1("A"); cc1("A"); cc1('A'); cc1('A');
console.log(coun)