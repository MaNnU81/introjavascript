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

const result4_1 = array1.reduce(sumNumbers, 0) / array1.length;
console.log(`Risultato 4_1`, result4_1); 






const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie'];

//5) filtrare tutti i nomi piu grandi di 4 caratteri (FILTER)
//6) traformare tutte le stringe in maiuscolo (MAP)
//7) mettere SOLO le iniziali maiuscole (MAP)
//8) restiture una stringa composta dalle iniziale delle parole (REDUCE)
//9) sommare tutti i caratteri di tutte le stringhe (REDUCE)
//10) eliminare le vocali dalle stringhe (MAP)
//11) restituire un array di numeri che sono le lunghezze delle singole parole (MAP)


const array3 = [[1,2,3], [3,2,1,0], [0,0,0,0,0]];

//12) restituire un array di numeri che sono le lunghezze dei sigoli array (MAP)
//13) sommare tutti i numeri in tutti gli array (REDUCE)
//14) sommare tutte le lunghezze degli array (REDUCE)
//15) sommare tutti i numeri con indice uguale e restituire un array di risultati (REDUCE)