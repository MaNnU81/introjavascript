const array1 = [23 , 14, 56, 44, 3, 0, -1, 55, -12, 60, 8]

// ---ESERCIZIO 1---filtrare tutti i numeri minori o uguali a zero

// function keepMinZero(array) {
//     const newArray  = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
        
//         if (element <= 0) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
    
// }
//  const arrayP = keepMinZero(array1);
//  console.log(arrayP);
 
// ---ESERCIZIO 2--- convertire in gradi fahrenheit ipotizando che l'unita di partenza sia celsius

// function convertCelToFahr(array) {
//     const newArray = []
    
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
        
//         let numeroConvertito = (element * (9/5)) + 32;
//         newArray.push(numeroConvertito);
//     }
    
//     return newArray;

// }
// const arrayP = convertCelToFahr(array1);
// console.log(arrayP);




// ---ESERCIZIO 3--- fare la media dei valori

// function mediaArray(array) {

//     let somma = 0;

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         somma = somma + element;

//     }
//     const media = somma / array.length;
//     return media;

// }
// const arrayP = mediaArray(array1);
// console.log(arrayP);

// ---ESERCIZIO 4--- restituire il valore più basso e il più alto



// function maxAndMinArray(array) {

//     let maxAndMin = [0, 0];
//     let maxElement = -Infinity;
//     let minElement = Infinity;

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element > maxElement) {
//             maxElement = element;
//         }
//         if (element < minElement) {
//             minElement = element;
//         }
        
        

//     }
//     maxAndMin[0] = maxElement;
//     maxAndMin[1] = minElement
//     return maxAndMin;
// }
// const arrayP = maxAndMinArray(array1);
// console.log(arrayP);


const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', 'minnie'];


// ---ESERCIZIO 5--- filtrare tutti i nomi piu grandi di 4 caratteri




// function stringLargerOf4(array) {

//         const newArray = [];
    
//         for (let i = 0; i < array.length; i++) {
//             const element = array[i];
//             if (element.length > 4) {
//                 newArray.push(element)
//             }
    
//         }
        
//         return newArray;
    
//     }
//     const arrayP = stringLargerOf4(array2);
//     console.log(arrayP);


// ---ESERCIZIO 6--- traformare tutte le stringhe in maiuscolo

// function stringUppercase(array) {
//     const newArray = []
    
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//             let stringUpper = element.toUpperCase()
//             newArray.push(stringUpper)
//     }
    
//     return newArray;

// }
// const arrayP = stringUppercase(array2);
// console.log(arrayP);

// ---ESERCIZIO 7--- mettere SOLO le iniziali maiuscole

// function stringFirstUppercase(array) {
//     const newArray = []
    
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//             let stringUpperCase = element.charAt(0).toUpperCase() + element.slice (1);
       
//             newArray.push(stringUpperCase)
//     }
    
//     return newArray;

// }
// const arrayP = stringFirstUppercase(array2);
// console.log(arrayP);

// ---ESERCIZIO 8--- restiture una stringa composta dalle iniziale delle parole

// function stringFirst(array) {
//     const newArray = []
    
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//          let stringUpperCase = element.charAt(0).toUpperCase();
//             newArray.push(stringUpperCase)
//     }
    
//     return newArray;

// }
// const arrayP = stringFirst(array2);
// console.log(arrayP);


// ///sara version
// function allInitialsToString(arrayOfString) {
//     let finalString =
// }


// ---ESERCIZIO 9--- contare tutti i caratteri di tutte le stringhe

// function stringSum(array) {
//     let newArray = 0;

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         newArray += array[i].length;



//     }
//     return newArray;

// }
// const arrayP = stringSum(array2);
// console.log(arrayP);


// ---ESERCIZIO 10--- eliminare le vocali dalle stringhe

// function removeVowels(arrayString) {
//     const vowels = "aeiou";
//     const newStringWithoutVowels = [];
//     for (let i = 0; i < arrayString.length; i++) {
//         let element = arrayString[i];
//         let elementWithoutVowels = "";
//         for (let j = 0; j < element.length; j++) {
//             if (!vowels.includes(element[j].toLowerCase())) {
//                 elementWithoutVowels += element[j]
//             }


//         }
//         newStringWithoutVowels.push(elementWithoutVowels)

//     }
//     return newStringWithoutVowels;
// }
// const newStringWithoutVowels = removeVowels(array2)
// console.log(newStringWithoutVowels);




// function stringNoVo(array) {
//     let newArray = []
    
    
//     for (let i = 0; i < array.length; i++) {
//         const vowels = "aeiouAEIOU";
//         const element = array[i];
//             if (element !== vowels){
//                 element.pop(newArray)

//             }
        
           
//     }
    
//     return newArray;

// }
// const arrayP = stringNoVo(array2);
// console.log(arrayP);


const array3 = [[1,2,3], [3,2,1,0], [0,0,0,0,0]];


// ---ESERCIZIO 13--- sommare tutti i numeri in tutti gli array  da finire

// const sumOfNumbers = arrayToReduce => {
//             let accumulator = 0
//             for (const singleArray of arrayToReduce) {
//                 for () {
//                     const element = array[];
//                     const element = array[singleArray];
//                 }
                
//             }

// }
