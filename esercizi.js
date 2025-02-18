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

for (let i = 1; i <= 100; i++) {
    if ( i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else {
        if (i % 3 === 0) {
            console.log("fizz");
        }
         else {
            if (i % 5 === 0) {
                console.log("buzz");
            } else {
                console.log(i);
            }
        }
    }
    
    
}
