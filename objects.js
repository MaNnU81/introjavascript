//  dizionario (struttura dati, non programm oggetti) k-value  "la k è una stringa se voglio usarla senza usare le regole stringhe, come per esempio con spazi, la metto tra ""


// const emptyObj = {};

// const student = {

//     name: "andrea",
//     surname: "asioli",
//     yob: 1978,
//     marks: [9, 10, 8],
//     address: {
//         street: "via canneto il curto", 
//         streetNumber: 12,
//         cap: 16123
//     },
//     "is Married": false
//     // marksMean : function () {
//     //     const sum = 0
//     //     for (let i = 0; i < student.marks.length; i++) {
//     //         const element = student.marks[i];
//     //         sum = sum + element
            
//     //     }
//     //     const mean = sum / student.marks.length;
//     //     return mean;
//     // }

// }

// console.log(student);

// console.log(student.name);   //object.k che mi interessa

// console.log(student["surname"]);

// // console.log(student["is married"]);
// console.log(student.address.street);
// console.log(student.marks[0]);


// const startinObj = {};
// console.log(startingObj);

// // startinObj.name = "starting object"
// startinObj.crationDate = "21/02/2025"

// const book1 = {
// title: "eloquent js",
// author: "marjin Haverbeke",
// edition: 4,
// jop: 2024,
// isAvaiable: true

// }

// // for (const key in book1) {
// //     if (Object.prototype.hasOwnProperty.call(book1, key)) {
// //         const value = book1[key];
// //         console.log(`il valore associato alla chiave $(key) è $(value)`);
// //     }
// // }


// const arrayOfKeys = Object.keys(book1);
// console.log(arrayOfKeys);

// for (let i = 0; i < Object.keys(book1).length; i++) {
//     const key = Object.keys(book1)[i];
//     const value = book1[key]
//     console.log('il valore associato alla chiave $(key) è $(value)');
// }


// const number1 = 0;

// number1= 12;      // ERRORE const é un COSTANTE

// book1 = {
//     title: "odissea",
//     author: "omero",
//     edition: "112000";
//     yop: 2023,
//     isAvaiable: false

// }
// Object.freeze(book1)

// book1.title = "odissea";
// book1.author = "omero";


// const book2 = book1
// book2.title = `le porno avventure`
// console.log(book1);

const student = {

    name: "andrea",
    surname: "asioli",
    yob: 1978,
    marks: [9, 10, 8],
    address: {
        street: "via canneto il curto", 
        streetNumber: 12,
        cap: 16123
    }
}

console.table(JSON.stringify(student));

student.name = "andreino"

console.log(student);

student.address.streetNumber = 100000000000;

console.table(JSON.stringify(student));


const studentString = `{"name":"Giovanni","surname":"Sussarellu","yob":1981,"marks":[9,10,8],"address":{"street":"via calda","streetNumber":55,"cap":16123}}

`

const student2 = JSON.parse(studentString)

console.log(student2);
