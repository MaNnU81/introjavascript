
// console.log("1-Scalinata in un ciclo");

// let startNumber = "";
// let finalNumber = "";   //accumula startNumber fino a fine ciclo
// for (let i = 0; i < 7; i++) {
//    startNumber += "#";
//    finalNumber += startNumber + "\n" //accumula startNumber fino a fine ciclo e va a capo
// }
// console.log(finalNumber)



// console.log("2-Scalinata in un ciclo capovolta");

// let startNumber = "";
// let finalNumber = "";   //accumula startNumber fino a fine ciclo
// for (let i = 7; i > 0; i--) {
//    startNumber -= "#";
//    finalNumber += startNumber + "\n" //accumula startNumber fino a fine ciclo e va a capo
// }
// console.log(finalNumber) 

// console.log("4- usando un ciclo logga i numeri da 100 a -100")


// let finalNumber = ""
// for (let startNumber = 100; startNumber >= -100; startNumber--) {
//     finalNumber += startNumber + "\n"
// }
// console.log(finalNumber);

// console.log("5 - usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai multipli di 7"
// )
// let finalNumber = ""
// for (let startNumber = 1; startNumber <= 100; startNumber++) {
//     if (startNumber % 7 === 0) {
//         finalNumber += startNumber + "*" + "\n"
//     } else {
//         finalNumber += startNumber + "\n"
//     }
// }
// console.log(finalNumber);

// console.log ("6 - usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti")

// let finalNumber = ""
// for (let startNumber = 1; startNumber <= 100; startNumber++) {
//     if (Number.isInteger(Math.sqrt(startNumber))) {
//         finalNumber += startNumber + "*" + "\n"
//     } else {
//         finalNumber += startNumber + "\n"
//     }
// }
// console.log(finalNumber);

// console.log("7 - chiedi all'utente un numero (positivo) di partenza e poi logga tutti i numeri dal numero dato fino a 0")

// const startNumber = parseInt(prompt("Scrivi un numero positivo"));

// if (startNumber >=1) {
//     for (let finalNumber = startNumber; finalNumber >= 0; finalNumber--) {
//         console.log(finalNumber);
//     } 
    
// } else {
//     alert("Non è un numero positivo!");
// }


// console.log("8 - chiedi all'utente un numero (qualsiasi) di partenza e poi logga tutti i numeri dal numero dato fino a 100")

// const startNumber = parseInt(prompt("Scrivi un numero"));

// function countdown(startNumber) {
//     if (startNumber === 101) return; //a 101 si blocca
//     console.log(startNumber);
//     if (startNumber < 101) {
//         countdown(startNumber + 1);
//     } else {
//         countdown(startNumber - 1);
//     } 
// }

// countdown(startNumber); //numero max di loop


