//1) creare un oggetto studente per ogni partecipante al corso 
// l'oggetto dovà avere le seguenti keys : name, surname, gender, marks, yob, region, nationality

const lorenzo = {
    name: 'lorenzo',
    surname: 'puppo',
    marks: [7, 8 ,4],
    yob: 1995,
    nationality: 'italy',
    gender: 'm',
  }
  
  const Jan = {
    name: 'jan',
    surname: 'stigliani',
    marks:  [7, 9 ,9],
    yob: 2000,
    nationality: 'italy',
    gender: 'm'
  }
  
  const giovanni = {
    name: 'giovanni',
    surname: 'sussarellu',
    marks:  [5, 8 ,3],
    yob: 1981,
    nationality: 'italy',
    gender: 'm'
  }
  
  const sara =  {
    name: 'sara',
    surname: 'de prà',
    marks:  [9, 4 ,7],
    yob: 1989,
    nationality: 'italy',
    gender: 'fluid'
  }
  
  const jeremias = {
    name: 'jeremias',
    surname: 'cedeno',
    marks:  [7, 9 ,9],
    yob:2003,
    nationality: 'ecuador',
    gender: 'm'
  }
  
  const laura = {
    name: 'laura',
    surname: 'mazza',
    marks:  [3, 8 ,9],
    yob: 1984,
    nationality: 'italy',
    gender: 'f'
  }
  
  const eusebio = {
    name: 'eusebio',
    surname: 'veizi',
    marks:  [8, 8 ,8],
    yob: 1993,
    nationality: 'albanese',
    gender: 'peanut'
  }
  
  const hugo = {
    name: 'hugo',
    surname: 'martinez',
    marks:  [5, 8 ,8],
    yob: 1994,
    nationality: 'elSalvador',
    gender: 'f'
  }


const arrayStudents = [lorenzo, jeremias, giovanni, Jan, laura, sara, hugo, eusebio];


// console.log(arraystudents);


//2) scrivete una funzione che restituisca l'eta media degli studenti


// function averageAge(arrayStudents) {
//   const today = 2025;
//   let ageTotal = 0;
//     for (let i = 0; i < arrayStudents.length; i++) {
//       const element = arrayStudents[i];
//       let age = today - element.yob;
//       ageTotal += age ;       //calcola l'eta degli studenti e ad ogni ciclo li inserisce nel contenitore ageTotal
      

//   }
//  const averageTotal = ageTotal / arrayStudents.length
//  return averageTotal   // calcola la media dell'età e restituisce averageTotal
// }

// const valore = averageAge (arrayStudents);
// console.log(valore);


//3 scrivete una funzione che restituisca im array di stringhe ed ogni stringa dovrà 
//  mettete gli oggetti dentro un arrayavere questo formato "nome/cognome"

// function nameAndSurname(arrayStudents) {
//   let nameTotal = [];
//   for (let i = 0; i < arrayStudents.length; i++) {
//     const element = arrayStudents[i];
//       nameTotal.push  (`${element.name} / ${element.surname}`);
  
//   } 

//   return nameTotal;
// }
// const nameTotal = nameAndSurname (arrayStudents);
// console.log(nameTotal);





//4) scrivete una funzione che restituisca la somma dei maschi e delle femmine

// function genderCount(arrayStudents) {
//   let male = 0;
//   let female = 0;
//   let otherGender = 0;

//   for (let i = 0; i < arrayStudents.length; i++) {
//     const element = arrayStudents[i];
//     if (element.gender === "m") {
//       male++;
//     }
//     else if (element.gender === "f") {
//         female++;
//       } else {otherGender++;
//        }
    
//   }return {male, female, otherGender}
// }
// const genderTotal = genderCount (arrayStudents)
// console.log(genderTotal);


//5) scrivete una funzione che restituisca la media delle medie degli studenti

function meanOfMeans() {

  let meansArray = []  //creo un array con tutte le medie degli studenti

  for (let i = 0; i < arrayStudents.length; i++) {
    const element = arrayStudents[i];
    let sum = 0;
    for (let j = 0; j < element.marks.length; j++) {
      sum += element.marks[j];

    }
    let mean = sum / element.marks.length;
    meansArray.push(mean);

  }
  // return meansArray
  let sumOfaverage = 0;         //laavorando su array apena creato trovo la media delle medie

  for (let x = 0; x < meansArray.length; x++) {
    sumOfaverage += meansArray[x];


  }
  let finalAverage = sumOfaverage / meansArray.length;
  return finalAverage;



}

////// soluzione due


function calculateMean(arrayStudents) {
  const = 0;
  for (let i = 0; i <arrayStudents.length; i++) {
    const element = arrayStudents[i];
    sum = sum + element;
    
  }
  const mean = meanOfMeans(arrayStudents);
  console.log(mean);
  
  
}

// const final = meanOfMeans (arrayStudents);
// console.log(final);
const finalAverageOfAverage = meanOfMeans(arrayStudents);
console.log('la media delle medie è', finalAverageOfAverage);




//6) scrivete una funzione che restituisca un ogetto cosi strutturato //{nationality1{student1Name, student2Name...}, nationality2{student1Name, student2Name...}}




//7) https://jessbayer.com/

