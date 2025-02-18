
// console.log("1-Scalinata in un ciclo");

// let startingString = "";
// let finalString = "";   //accumula startString fino a fine ciclo
// for (let i = 0; i < 7; i++) {
//    startingString += "#";
//    finalString += startingString + "\n" //accumula startString fino a fine ciclo e va a capo
// }
// console.log(finalString)



// // console.log("2-Scalinata in un ciclo capovolta");

// let startingString = "";
// let finalString = "";   //accumula startString fino a fine ciclo
// for (let i = 7; i > 0; i--) {
//    startingString -= "#";
//    finalString += startingString + "\n" //accumula startString fino a fine ciclo e va a capo
// }
// console.log(finalString) 

// console.log("4- usando un ciclo logga i numeri da 100 a -100")


// let finalString = ""
// for (let startString = 100; startString >= -100; startString--) {
//     finalString += startString + "\n"
// }
// console.log(finalString);

// console.log("5 - usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai multipli di 7"
// )
// let finalString = ""
// for (let startString = 1; startString <= 100; startString++) {
//     if (startString % 7 === 0) {
//         finalString += startString + "*" + "\n"
//     } else {
//         finalString += startString + "\n"
//     }
// }
// console.log(finalString);

// console.log ("6 - usando un ciclo logga i numeri da 1 a 100 mettendo un asterisco vicino ai quadrati perfetti")

// let finalString = ""
// for (let startString = 1; startString <= 100; startString++) {
//     if (Number.isInteger(Math.sqrt(startString))) {
//         finalString += startString + "*" + "\n"
//     } else {
//         finalString += startString + "\n"
//     }
// }
// console.log(finalString);

console.log("7 - chiedi all'utente un numero (positivo) di partenza e poi logga tutti i numeri dal numero dato fino a 0")

const startString = parseInt(prompt("Scrivi un numero positivo"));

for (let finalString = startString; finalString >= 0; finalString--) {
    console.log(finalString);
} 

