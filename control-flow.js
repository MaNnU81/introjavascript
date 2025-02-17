// console.log(console.log("ciao")) //tutte le funzioni hanno un ritorno,  e se non lo hanno riportano undefinied dopo aver fatto quello che si chiede

//console.log(prompt("come ti chiami?"))  //riporta cio che viene risposto nel form

// const userName = prompt ("come ti chiami?");
// console.log ("ciao " + userName);
// alert("ciao " + userName)

//if

// const userAgeString = prompt("quanti anni hai? ");

// if(parseInt (userAge) > 18) {
//     console.log("benvenuto nel sito di incontri piaccanti") 
// }
// else{ 
//     console.log("torna a mangiare il gelato")
// }

// const useraAgenNumber = parseInt(userAgeString);

// if((useraAgenNumber) >= 18 && parseInt(userAge) <80) {

// console.log("benvenuto nel sito di incontri piaccanti")
// } else if ((useraAgenNumber) >= 80) { 
// console.log("il cuore poterebbe non reggere")
// } else {
// console.log("torna a mangiare il gelato")
// }

//cicli 

//WHILE


// let i = 0
// while (i < 11) {
//     console.log(i)
//     i = i + 1;
// }
// console.log("ho finito il ciclo while");

// let i = 0
// while (i < 11) {
//     console.log(i)
//     i ++;   //zucchero sintattico i++; uguale a i = i +1; come sopra
// }
// console.log("ho finito il ciclo while");

// let j = 0
// while (j < 11) {
//     console.log(j)
//     j = j + 2;    //zucchero sintattico per diverso da +1 +=numero che voglio incrementare
// }
// console.log("ho finito il ciclo while pari");

// let k = 10
// while (k > 0) {
//     console.log(k)
//      k -= 2;    //zucchero sintattico con -= 
// }
// console.log("ho finito il ciclo while al contrario");

// let i = 0 
// while (i<=10) {
//     console.log(i**2)
//     i ++ ;
// }
  
// let i = 0;    //uguale ma mogliore come codice. 
// while (i<=10) {
// const square  = i **2;
// console.log(square);
// i++;
// }

const secretNumber = Math.round(Math.random() *10)
while (true) {
   const guessedString = prompt ("indovina il numero che sto pensando...(da unoa dieci")
   const guessedNumber = parseInt (guessedString)
   if (guessedNumber===6) {
    alert("bravo, sei un campione!!");
    break;
   } else{("schiappa!!")
   }
}
