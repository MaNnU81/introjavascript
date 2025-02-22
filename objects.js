// const emptyObj = {};

// const student = {
//     name: "andrea",
//     surname: "asioli",
//     yob: 1978,
//     marks: [9, 10, 8, 10],
//     address: {
//         street: "via canneto il curto",
//         streetNumber: 12,
//         cap: 16123
//     },
//     "is Married": false,
//     // marksMean : function () {
//     //     let sum = 0;
//     //     for (let i = 0; i < student.marks.length; i++) {
//     //         const element = student.marks[i];
//     //         sum = sum + element
//     //     }
//     //     const mean = sum / student.marks.length;
//     //     return mean;
//     // }
// }

// console.log(student.marksMean());

// console.log(student.name);
// console.log(student["surname"]);
// console.log(student["is Married"]);
// console.log(student.address.street);
// console.log(student.marks[0]);

// const startingObj = {};

// console.log(startingObj);

// startingObj.name = "starting Object"
// startingObj.creationDate = "21/02/2025"

// console.log(startingObj);


// const book1 = {
//     title: "eloquent js",
//     author: "Marijn Haverbeke",
//     edition: 4,
//     yop: 2024,
//     isAvailable: true
// }

// for (const key in book1) {
//     if (Object.prototype.hasOwnProperty.call(book1, key)) {
//         const value = book1[key];
//         console.log(`il valore associato alla chiave ${key} è ${value}`)
//     }
// }

// const arrayOfKeys = Object.keys(book1);
// console.log(arrayOfKeys);


// for (let i = 0; i < Object.keys(book1).length; i++) {
//     const key = Object.keys(book1)[i];
//     const value = book1[key];
//     console.log(`il valore associato alla chiave ${key} è ${value}`)
// }


// const arrayOfValues = Object.values(book1);
// console.log(arrayOfValues);


// const arrayOfEntries = Object.entries(book1);
// console.log(arrayOfEntries);


// const number1 = 6

// number1 = 12;  ////ERRORE é UNA COSTANTE!!

// book1 = {
//     title: "odissea",
//     author: "omero",
//     edition: 112000,
//     yop: 2023,
//     isAvailable: false
// }
// Object.freeze(book1)

// book1.title = "odissea";
// book1.author = 'omero';

// console.log(book1)


// const book2 = book1;

// book2.title = 'le porno avventure di biancaneve';

// console.log(book1)

const student = {
    name: "andrea",
    surname: "asioli",
    yob: 1978,
    marks: [9, 10, 8, 10],
    address: {
        street: "via canneto il curto",
        streetNumber: 12,
        cap: 16123
    }
}

console.table(JSON.stringify(student));

student.name = "andreino";
student.address.streetNumber = 100000000000;

console.table(JSON.stringify(student));

const studentString = '{"name":"giovanni","surname":"sussarellu","yob":1981,"marks":[9,10,8,10],"address":{"street":"via calda","streetNumber":17,"cap":16123}}'

const sudent2 = JSON.parse(studentString);

console.log(sudent2);
console.log(sudent2.surname);