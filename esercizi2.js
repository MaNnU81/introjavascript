//console.log("Primo esercizio ---minimo---")

// function minimo (number1, number2){
//     return Math.min(number1,number2)

// }


// console.log(minimo(15,4));

// console.log("Primo esercizio ---harrow minimo---")
// const minimo = (number1,number2) => Math.min(number1,number2)
//     console.log(minimo(15,4));




// console.log("Secondo esercizio ------")

// function isEven(number) {
//     if (number === 0) {
//         return true;
//     } else if (number === 1) {
//         return false;
//     } else {
//         if (number >= 0) {
//             return isEven(number - 2);
//         } else {
//             return isEven(number + 2);
//         }
//     }

// }

// console.log(isEven(136));


// function isEven(number) {
//     number = Math.abs(number)
//     if (number === 0) {
//         return true;
//     } else if (number === 1) {
//         return false;
//     } else {
//          return isEven(number - 2);
//     }

// }

// console.log(isEven(-136));

// console.log("terzo esercizio ---conteggio specifico carattere---")  verificare!!!!!!

// function countBs(string) {
//     let contatore = 0;

//     for (let i = 0; i < string.lenght; i++) {
//         if (string[i] === "B"); {
//             contatore++;
//             debugger;
//         }
       
//     }
//     return contatore;
// }
// console.log(countBs( "BOB" ));