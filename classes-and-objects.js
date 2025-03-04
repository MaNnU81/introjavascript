// class Human {
//     #yob;
//     #name
//     #surname;
//     constructor(name, surname, yob, nationality, gender) {
//         // const uppercaseName = name.toUpperCase()
//         // this.#name = uppercaseName;
//         this.name = name;
//         this.#surname = surname;
//         this.#yob = yob;
//         this.nationality = nationality;
//         this.gender = gender;
//     }

//     get name(){
//         return this.#name;
//     }

//     set name(value){
//         const uppercaseName = value.toUpperCase();
//         this.#name = uppercaseName;
//     }

//     get surname(){
//         const upperSurname = this.#surname.toUpperCase();
//         return upperSurname;
//     }


//     //getter yob
//     get yob(){
//         return this.#yob;
//     }
//     //settet yob
//     set yob(value){
//         const now = new Date();
//         const year = now.getFullYear();
//         if(value > year){
//             console.log('errore, hai inserito una data futura')
//         } else if (value < (year - 150)){
//             console.log('errore, non accettiamo vampiri')
//         } else {
//             this.#yob = value;
//         }
//     }

//     #getAge(){
//         const now = new Date();
//         const year = now.getFullYear();
//         const age = year - this.#yob;
//         return age;
//     }

//     toString(){
//         const humanStr = `Nome: ${this.name}\n` + 
//                          `Cognome: ${this.surname}\n` + 
//                          `Età: ${this.#getAge()}`;
//         return humanStr;
//     }

// }


// class Student extends Human{
//     #marks
//     constructor(name, surname, yob, nationality, gender, marks = []) {
//         super(name, surname, yob, nationality, gender)
//         this.#marks = marks;
//     }

//     getMarks(){
//         return this.#marks;
//     }

//     setMarks(value){
//         return this.#marks = value;
//     }
    
//     addMark(mark){
//         this.#marks.push(mark);
//     }

//     get mean(){
//         if(this.#marks.length === 0){
//             return -1;
//         }
//         let sumOfMarks = 0;
//         for (let i = 0; i < this.#marks.length; i++) {
//             const mark = this.#marks[i];
//             sumOfMarks += mark;
//         }
//         const mean = sumOfMarks / this.#marks.length;
//         return mean;
//     }

//     // calculateMean(){
//     //     if(this.marks.length === 0){
//     //         return -1;
//     //     }
//     //     let sumOfMarks = 0;
//     //     for (let i = 0; i < this.marks.length; i++) {
//     //         const mark = this.marks[i];
//     //         sumOfMarks += mark;
//     //     }
//     //     const mean = sumOfMarks / this.marks.length;
//     //     return mean;
//     // }

//     getBestMark(){
//         // let best = -1;
//         // for (const mark of this.marks) {
//         //     if(mark > best){
//         //         best = mark;
//         //     }
//         // }
//         // return best;

//         // const max = Math.max(...this.marks);
//         // return max >= 0 ? max : -1;

//         // return this.marks.reduce((a,c)=> Math.max(a,c), 0);

//         if (this.#marks.length === 0){
//             return -1;
//         }
//         return Math.max(...this.#marks);
//     }

//     toString(){
//         const studentStr = `${super.toString()}
// Media: ${this.mean}`
//         return studentStr;
//     }

//     compareTo(otherStudent){
//         const name1 = this.name;
//         const name2 = otherStudent.name;
//         if (name1 === name2) {
//             const yob1 = this.yob;
//             const yob2 = otherStudent.yob;

//             return yob1 - yob2;
//         }
//         return name1.localeCompare(name2);
//     }

// }


// class Teacher extends Human {

//     constructor(name, surname, yob, nationality, gender, subject, students = []) {
//         super(name, surname, yob, nationality, gender);
//         this.subject = subject;
//         this.students = students;
//     }


//     toString(){
//         const teacherStr = `${super.toString()}
// Materia: ${this.subject}
// Numero di studenti: ${this.students.length}`;
//         return teacherStr;
//     }

// }

// const student1 = new Student('laura', 'mazza', 1984, 'it', 'f', [8, 7]);
// student1.addMark(2);
// const student2 = new Student('eusebio', 'veizi', 1993, 'alb', 'm', [6, 6.5]);
// const student3 = new Student('lorenzo', 'puppo', 1995, 'it', 'm');

// console.log(student1 + '');
// console.log(student2.toString());


// const students = [student1, student2, student3];

// const teacher = new Teacher('andrea', 'asioli', 1978, 'it', 'm', 'CS', students);

// console.log(teacher.toString());

// students.sort((s1, s2) => s1.compareTo(s2));

// console.log(students);

// console.log(student1.getBestMark())
// console.log(student3.yob)

// student3.yob = 2050;

// console.log(student3.yob)

// student3.yob = 1050;

// console.log(student3.yob)

// student3.yob = 1950;

// console.log(student3.yob)

// console.log(student3.getMarks())

// console.log(student3.name)

// student3.name = 'giordano';

// console.log(student3.name)


// class Circle {

//     static PI = 3.14;

//     constructor(centerX, centerY, r) {
//         this.centerX = centerX;
//         this.centerY = centerY;
//         this.r = r;
//     }

//     get diameter(){
//         return this.r * 2;
//     }

//     calculatePerimeter(){
//         return 2 * this.r * Circle.PI;
//     }

//     calculateArea(){
//         return (this.r ** 2) * Circle.PI;
//     }

// }

// const circle1 = new Circle(0, 0, 10);

// console.log(circle1.diameter);

// console.log(circle1.calculatePerimeter())

// const circle2 = new Circle(0, 0, 20);

// console.log(circle2.diameter);

// console.log(circle2.calculatePerimeter())

// console.log(Circle.PI)

// console.log(circle2.calculateArea())


/* The Math2 class contains static methods for performing mathematical operations such as addition,
finding absolute value, and calculating the cube of a number. */
class Math2 {

    /**
     * The function "sum" takes two parameters and returns their sum.
     * @param {number} n1 - The parameter `n1` is the first number that will be used in the `sum` function to
     * perform addition.
     * @param {number} n2 - The parameter `n2` is the second number that will be added to `n1` in the `sum`
     * function.
     * @returns {number} The `sum` function is returning the sum of `n1` and `n2`.
     */
        static sum(n1, n2){
            return n1 + n2;
        }
    
        static absolute(n){
            if(n >= 0){
                return n;
            }
            return n * -1;
        }
    
        static cube(n){
            return n * n * n;
        }
    
    }
    
    
    console.log(Math2.cube(5))
    
    console.log(Math2.sum(Math2.cube(-5), Math2.cube(Math2.absolute(-3))));
    
    
    ///POLIMORFISMO
    
    // class Animal {
    
    //     constructor(name) {
    //         this.name = name;
    //     }
    
    //     sayName() {
    //         return `I'm ${this.name}`
    //     }
    
    //     speak(){
    //         return '?';
    //     }
    
    // }
    
    // class Dog extends Animal{
    
    //     constructor(name) {
    //         super(name)
    //     }
    
    //     speak(){
    //         return 'bau';
    //     }
    // }
    
    // class Cat extends Animal{
    
    //     constructor(name) {
    //         super(name);
    //     }
    
    //     speak(){
    //         return 'miao';
    //     }
    // }
    
    // const cat1 = new Cat('laura');
    // const cat2 = new Cat('lorenzo');
    // const dog1 = new Dog('giovanni');
    // const dog2 = new Dog('jan');
    // const cat3 = new Cat('hugo');
    // const cat4 = new Cat('eusebio');
    // const cat5 = new Cat('jeremias');
    
    
    // const animals = [cat1, cat2, dog1, dog2, cat3, cat4, cat5];
    
    // for (let i = 0; i < animals.length; i++) {
    //     const animal = animals[i];
    //     console.log(animal.sayName(), animal.speak())
    // }