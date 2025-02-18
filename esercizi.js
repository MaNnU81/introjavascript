// let string = "";

// for (let i = 0; i < 7; i++) {
//     string += "#";
//     console.log(string);
// }


// esercizi per casa 

// 1- creare una piramide come quella del primo esercizio del libro utilizzando un solo consolelog.


// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 ===0) {
//         console.log("fizzbuzz");
//     } else {
//         if (i % 3 === 0) {
//             console.log("fizz");
//         }
//         else {
//             if (i % 5 === 0) {
//                 console.log("buzz");
//             }
//             else {

//                 console.log(i);
//             }
//         } 
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//         console.log("fizz");
//     } else if (i % 5 === 0) {
//         console.log("buzz");
//     } else {
//         console.log(i);
//     }
// }

// for (let y = 0; y <= 3; y++) {
//    for (let x = 0; x <= 3; x++) {
   
//       console.log( ( `x: ${x} y: ${y}`) )
      
//    }
   
// }

// for (let y = 0; y <= 3; y++) {
//     let row = ''
//    for (let x = 0; x <= 3; x++) {
//       row += `(x: ${x}, y: ${y})`
      
//    }
//    console.log(row)
// }


const numUtente = parseInt(prompt("dammi un numero per le x e le y"));
let row = '';
if (numUtente > 0 ) {
    for (let y = 0 ; y < numUtente; y++) {
        for (let x = 0; x < numUtente; x++) {
           if ((x+y) % 2 === 0) {
               row += " ";
           } else {
               row += "#";
           }
       }
       row+="\n";
   } 
} else alert("Non è un numero positivo!");
    console.log(row);


// const numUtente = parseInt(prompt("dammi un numero per le x e le y"));
// let row = '';
// for (let y = 0 ; y < numUtente; y++) {   
//      for (let x = 0; x < numUtente; x++) {
//         if ((x+y) % 2 !== 0) {
//             row += " ";
//         } else {
//             row += "#";
//         }
//     }
//     row+="\n";
// }
// console.log(row);
