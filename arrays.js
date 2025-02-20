
// const pippo = 12
// const array1 = [ "ciao", 23, 23.12,  true, [], ['mondo'], pippo];  // è possibile ma nn raccomandabile 


// console.log(array1);


// const array2 = []


// array2.push(4)
// array2.push(8)

// console.log('array2 push', array2);

// array2.pop();  //toglie ultimo valore

// console.log('array2 pop', array2);



// array2.unshift(12)  //inserisce un valore nell'array all'inizio e non in fondo  
// array2.unshift(11) 
// console.log('array2 unshift', array2);

// //da completare la github labparte sopra, riprendere da github di gruppo







// const array3 = [123, 12, 45, 34, 1, 2, 45, 34]
// for (let i = 0; i < array3; i++) {
//     const element = array3[i]
    
// }

// const array4 = [1000, 1001];
// const array5 = array3.concat(array4);
// console.log('concat', array5)


// array5.splice(1, 3)
// console.log('splice', array5);


// array5.sort();
// console.log('sort', array5);

// const index = array5.indexOf(1000);
// console.log('1000 è a indice', index);

//pattern



// const array7 = [2, 4, 1, 33, 56, 78, 12, 5, 6, 7, 4]


//mapping

// function doubleArrayElements(arrayOfNumbers) {
//     const newArray = []
    
//     for (let i  = 0; i  < arrayOfNumbers.length; i ++) {
//         const element = arrayOfNumbers[i];

//         const double = element * 2;  //eseguo trasformazione
//         newArray.push(double);

//     }
    
// return newArray

// }

// const array8 = doubleArrayElements(array7)
// console.log('map', array8);



// //filtering sbagliato

// function removeLargerThan30(arrayOfNumbers) {
//     const newArray = [];
//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];
//         if (element <= 30) {
//             newArray.push(element)
            
//         }
//         return newArray
//     }
// }
// const array10 = removeLargerThan30(array7)
// console.log('filter', array10);

//new filter

// function keepEvenElements(arrayOfNumbers) {
//     const newArray = []
    
//     for (let i  = 0; i  < arrayOfNumbers.length; i ++) {
//         const element = arrayOfNumbers[i];

//         if (element %2 === 0) {
//             newArray.push(element)
            
//         }

//     }
    
// return newArray

// }

// const array9 = keepEvenElements(array7)
// console.log('filter', array9);

//Reducing      *** const array7 = [2, 4, 1, 33, 56, 78, 12, 5, 6, 7, 4]***

// function sumAllElements(arrayOfNumbers) {
//     let accumulator = 0                                         //let mi raccomando e attento a zero o 1 a seconda dell'operazione (0 nn funziona per moltiplicazione x esempio)
//     for (let i  = 0; i  < arrayOfNumbers.length; i ++) {
//          const element = arrayOfNumbers[i];

//         accumulator = accumulator + element;
             
// }
// return accumulator;
// }
// const array12 = sumAllElements(array7)
// console.log('reduce', array12);

// function multiplyAllElements(arrayOfNumbers) {
//     let accumulator = 1                                         //let mi raccomando e attento a zero o 1 a seconda dell'operazione (0 nn funziona per moltiplicazione x esempio)
//     for (let i  = 0; i  < arrayOfNumbers.length; i ++) {
//          const element = arrayOfNumbers[i];

//         accumulator = accumulator * element;
             
// }
// return accumulator;
// }
// const array13 = multiplyAllElements(array7)
// console.log('reduce', array13);


// function sumAllOddElements(arrayOfNumbers) {
//     let accumulator = 0                                         //let mi raccomando e attento a zero o 1 a seconda dell'operazione (0 nn funziona per moltiplicazione x esempio)
//     for (let i  = 0; i  < arrayOfNumbers.length; i ++) {
//          const element = arrayOfNumbers[i];

//         if(element % 2 !== 0) {
//             accumulator = accumulator + element;
//         } 
             
// }
// return accumulator;
// }
// const array14 = sumAllOddElements(array7)
// console.log('reduce', array14);

//reduce per somma dei pari e dei dispari separatamente


// function sumEvenAndSumOdd(arrayOfNumbers) {
//     let accumulatorEven = 0;
//     let accumulatorOdd =0;

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];

//         if (element %2 === 0) {
//             accumulatorEven = accumulatorEven + element;
//         }else{
//             accumulatorOdd = accumulatorOdd + element;
//         }
        
//     }
//     return[accumulatorEven, accumulatorOdd]
// }
// const array16 = sumEvenAndSumOdd(array7);

// console.log('function concatenation', array16);


// function sumEvenAndSumOdd(arrayOfNumbers) {
//     let accumulator = [0, 0]  //sumOfEven, sumOfOdd
  

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];

//         if (element %2 === 0) {
//            accumulator [0] = accumulator [0] + element;
//         }else{
//             accumulator [1] = accumulator [1] + element;
//         }
        
//     }
//     return accumulator
// }
// const array16 = sumEvenAndSumOdd(array7);

// console.log('function concatenation', array16);

////////////////intervallo

let number1 = 27;

function stupidfunction(number) {
    number = number * 2
}

stupidfunction(number1)
console.log(number1);
 

let array1 = [27];
function stupidfunction2(array) {
    array [0] = array1 * 2
    
}

stupidfunction2(array1);
console.log(array1);




function lessStupidFunction(array) {
    const newArray = [];
    for (let i  = 0; i < array.length; i++) {
        const element = array[i];
        newArray.push(element)
        
    }
    newArray[0] = newArray[0] * 2
    return newArray
}

array1 =lessStupidFunction(array1)
console.log(array1);
