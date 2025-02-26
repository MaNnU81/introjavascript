const array1 = [23, 14, 56, 44, 3, 0, -1, 55, -12, 60, 8];

//1) filtrare tutti i numeri minori o uguali a zero (FILTER)
function isSmallerThan0(number) {
    if (number <= 0) {
        return true;
    } else return false;

}
const result1_1 = array1.filter(isSmallerThan0);
console.log(`Risultato 1_1`, result1_1); 


//soluz due
const result1_2 = array1.filter(numb => numb <= 0);
console.log(`Risultato 1_2`, result1_2); 


//2) convertire in gradi fahrenheit ipotizando che l'unita di partenza sia celsius (MAP)

function convertToFahr(number){
convertedNumber = (Math.round((number * (9 / 5)) + 32));
return convertedNumber;
}
const result2_1 = array1.map(convertToFahr);
console.log(`Risultato 2_1`, result2_1); 

//soluz due
const result2_2 = array1.map(numb => Math.round((numb * (9 / 5)) + 32));
console.log(`Risultato 2_2`, result2_2); 

//3) fare la media dei valori (REDUCE)

function sumNumbers(accumulator, current){
const newAccomulator = accumulator + current;
return newAccomulator

}
const result3_1 = array1.reduce(sumNumbers, 0) / array1.length;
console.log(`Risultato 3_1`, result3_1); 

//soluz due
const result3_2 = array1.reduce((acc, number) => acc = acc + number) / array1.length;
console.log(`Risultato 3_2`, result3_2); 



//4) restituire il valore più basso e il più alto (REDUCE)

function getMinMax(acc, curr){
    acc.min = Math.min(acc.min, curr); 
    acc.max = Math.max(acc.max, curr);
    return acc;
}
const result4_1 = array1.reduce(getMinMax, {min: Infinity, max:-Infinity});
console.log(`Risultato 4_1`, result4_1); 



//soluz due

const result4_2 = array1.reduce((acc, current) => { 
    acc.min = Math.min(acc.min, current); 
    acc.max = Math.max(acc.max, current);
    return acc;
}, { min: Infinity, max: -Infinity });
console.log(`Risultato 4_2`, result4_2); 






const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie'];

//5) filtrare tutti i nomi piu grandi di 4 caratteri (FILTER)

function biggerOfFour(array) {
    if (array.length > 4) {
        return true;
    } else {
        return false;
    }

}
const result5_1 = array2.filter(biggerOfFour);
console.log(`Risultato 5_1`, result5_1); 

//soluz 2

const result5_2 = array2.filter(str => str.length > 4);
console.log(`Risultato 5_2`, result5_2); 


//6) traformare tutte le stringe in maiuscolo (MAP)
function allUpperCase(str){
stringUpper =  str.toUpperCase();
return stringUpper
}


const result6_1 = array2.map(allUpperCase);
console.log(`Risultato 6_1`, result6_1); 

//soluz 2
const result6_2 = array2.map(str => str.toUpperCase());
console.log(`Risultato 6_2`, result6_2); 

//7) mettere SOLO le iniziali maiuscole (MAP)

function onlyFirstUpperCase(str){
stringUpper = str.charAt(0).toUpperCase() + str.slice(1);
return stringUpper
}
const result7_1 = array2.map(onlyFirstUpperCase);
console.log(`Risultato 7_1`, result7_1); 

//soluz 2

const result7_2 = array2.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log(`Risultato 7_2`, result7_2); 

//8) restiture una stringa composta dalle iniziale delle parole (REDUCE)

function firstCar(acc,arrayOfString){

onlyFirst = acc + arrayOfString[0];
return onlyFirst;
}
const result8_1 = array2.reduce(firstCar, "");
console.log(`Risultato 8_1`, result8_1); 

//soluz 2
const result8_2 = array2.reduce((acc, arrayOfString) => acc = acc + arrayOfString[0], "");
console.log(`Risultato 8_2`, result8_2);

//9) sommare tutti i caratteri di tutte le stringhe (REDUCE)
function sumOfStrings(acc, arrayOfString){
all = acc + arrayOfString;
return all;
}
const result9_1 = array2.reduce(sumOfStrings);
console.log(`Risultato 9_1`, result9_1); 

//soluz 2
const result9_2 = array2.reduce((acc, arrayOfString) => acc = acc + arrayOfString);
console.log(`Risultato 9_2`, result9_2);

//10) eliminare le vocali dalle stringhe (MAP)
function noVowels(arrayOfString){
   noVow = arrayOfString.replace(/[aeiou]/gi, '');  //copilot gi = globale + insensitive
   return noVow
}
const result10_1 = array2.map(noVowels);
console.log(`Risultato 10_1`, result10_1);

//soluz 2
const result10_2 = array2.reduce((acc, arrayOfString) => acc + arrayOfString.replace(/[aeiou]/gi, ""),'');  //copilot, non ho capito bene...serve a partire dal primo valore
console.log(`Risultato 10_2`, result10_2);

//11) restituire un array di numeri che sono le lunghezze delle singole parole (MAP)




/////
const array3 = [[1,2,3], [3,2,1,0], [0,0,0,0,0]];

//12) restituire un array di numeri che sono le lunghezze dei sigoli array (MAP)
//13) sommare tutti i numeri in tutti gli array (REDUCE)
//14) sommare tutte le lunghezze degli array (REDUCE)
//15) sommare tutti i numeri con indice uguale e restituire un array di risultati (REDUCE)