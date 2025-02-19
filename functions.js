
// const gridaSchiappa = function() {
//     console.log("SCHIAPPA!!!")
// }

// console.log(typeof gridaSchiappa)

// gridaSchiappa()

// // const gridaSchiappa2 = function(name) {
// //     console.log( name + ' SCHIAPPA!!!')
// // }

// function gridaSchiappa2(name) {       //meglio iniziare senza dichiare const o let
//     console.log( name + ' SCHIAPPA!!!')
// }

// gridaSchiappa2("Pippo")
// gridaSchiappa2("2")
// gridaSchiappa2(true)

// const logDouble = (number) => console.log(number * 2)   //arrow function

// logDouble(20)

// function sum(number1, number2){
//     if (!number1) {
//         number1 = 0
//     }
//     if (!number2) {
//         number2 = 0
//     }
//     const sum= number1 + number2
//     return sum;
// }
// const sumArrow = (n1 = 0,n2 = 0) => n1 + n2


// const sumArrow2 = (n1,n2) => {
//     const sum = n1+ n2;
//     return sum;

// }

// console.log(sum(10,8))

// const result = sum(20,12)
// console.log(result)

// const result2 = sum(20, 30, 55)
// console.log(result2)

// const result3 = sum(11); //NAN undefined+number
// console.log(result3)   

// const result4 = sum(454);
// console.log(result4)

//scopes  spazio tra due {}

// const hello = 'ciao';

// function sayHelloTo(name){
//     function createHelloString(name){
//     const helloString = hello + ' ' + name + '!'
//     return helloString;
//     }

//     const newHelloString = createHelloString(name)
//     console.log(newHelloString);
// }
// sayHelloTo('Sara')
// // console.log(helloString)

// console.log(hello)

// // clojure 

// function createCallTwice(name) {
//     const call = name + ',' + name + '!'

//     const callFunction = () => console.log(call)
//     return callFunction;
// }

// const callTwice = createCallTwice ('Andrea');

// callTwice();

// function createMultiplicator (number){

//     const multiplicatorFunction = function (numerToMultiply) {
//         return numerToMultiply * number;
//     }
//     return multiplicatorFunction;
// }
// const multiplicatorX2 = createMultiplicator (2)
// const multiplicatorX3 = createMultiplicator (3)


// console.log(multiplicatorX2(10))
// console.log(multiplicatorX2(13))

// console.log(multiplicatorX3(10))
// console.log(multiplicatorX3(13))


// function createCounter(){           //non funziona!!! verifica
//     let counter = 0;
//     const incrementCounter = function name(){
//         counter ++;
//     }
//     return increment = createCounter();
    
//     }

// const increment = createCounter();
//     console.log(increment())
//     console.log(increment())
//     console.log(increment())


// recursion

// function fact(number){
//     if (number === 0) {
//        return 1; 
//     }
//         return number * fact(number - 1);
    

// }
// console.log(fact(5));
// console.log(fact(6));
