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


const arraystudents = [lorenzo, jeremias, giovanni, Jan, laura, sara, hugo, eusebio];


console.log(arraystudents);


//2) scrivete una funzione che restituisca l'eta media degli studenti

function meanAge(array) {
    let media = 0;

for (let i = 0; i < array.length; i++) {
    const element = array[i];

    
}

    return media;
}


function getAge(yob, yot) {


    return yot - yob
}
//3 scrivete una funzione che restituisca im array di stringhe ed ogni stringa dovrà 
//  mettete gli oggetti dentro un arrayavere questo formato "nome/cognome"
//4) scrivete una funzione che restituisca la somma dei maschi e delle femmine
//5) scrivete una funzione che restituisca la media delle medie degli studenti
//6) scrivete una funzione che restituisca un ogetto cosi strutturato


//7) https://jessbayer.com/