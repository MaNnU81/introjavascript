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

// const secretNumber = Math.round(Math.random() * 10)
// while (true) {
//    const guessedString = prompt("indovina il numero che sto pensando...(da unoa dieci")
//    const guessedNumber = parseInt(guessedString)
//    if (guessedNumber===secretNumber) {
//     alert("bravo, sei un campione!!");
//     break;
//    } else{("schiappa!!");
//    }
// }


// 11 asterischi di seguito
// let startingString = '';

// while (startingString.length <=10) {      
//    startingString = startingString + '*';
// }
// console.log(startingString);



// do while   fa almeno una voilta il ciclo anche se non rispetta condition, poi si blocca, a differenza di while che se non è vero non cicla
// const pippo = 10;
// const pluto = 20;

// while (pippo > pluto) {
//    console,console.log('sono entrato nel while');
   
// }

// do {
//    console('sono entrato nel do...while')
// } while (pippo > pluto);


// for (let i = 0; i < 10; i++) {
//    console.log('sono nel ciclo for e sto facendo il giro' + i)
   
// }

// let startingString = ""

// for (;;) {
   
//    startingString += '#'
//    if (startingString.length===10) {
//       break;
//    }
// }
// console.log(startingString)


// piano cartesiano doppio ciclo

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


//switch

// const ageString = prompt ('in che anno sei nato?')

// switch (ageString) {
//    case "1978":
//       alert("sei nato nel mio stesso anno")
//       break;
//    case "1990":
//       alert("sei nato nell'anno dei mondiali in Italia")
//       break;
//    case "1984":
//       alert("sei nato nello stesso anno di Laura")
//       break;

//    default:
//       alert("in che anno noioso sei nato")
//       break;
// }

