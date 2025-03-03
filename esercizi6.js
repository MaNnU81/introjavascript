class Human {
    constructor(name, surname, yob, nationality, gender) {
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.nationality = nationality;
        this.gender = gender;

    }

    getAge() {
        const now = new Date();   //data di oggi
        const year = now.getFullYear();
        const age = year - this.yob;
        return age;
    }

    toString() {
        const humanStr = `nome : ${this.name}
cognome : ${this.surname}
eta : ${this.getAge()}
genere : ${this.gender}
nazionalità : ${this.nationality}`
        return humanStr;
    }
}




class Student extends Human {

    constructor(name, surname, yob, nationality, gender, marks = []) {    //tra parentesi quadri creo array (vuoto) di voti perche non ne ha di patenza
        super(name, surname, yob, nationality, gender)
        this.marks = marks;
    }

    addMark(mark) {
        this.marks.push(mark);
    }


    calculateMean() {

        if (this.marks.length === 0) {
            return -1;
        }
        let sumOfMarks = 0;
        for (let i = 0; i < this.marks.length; i++) {
            const mark = this.marks[i];
            sumOfMarks += mark;
        }
        const mean = sumOfMarks / this.marks.length;
        return mean;
    }


    getBestMark() {
        let best = -1;
        for (const mark of this.marks) {
            if (mark > best) {
                best = mark;
            }
        }
        return best;

    }
    toString() {
        let studentStr = `${super.toString()}
media : ${this.calculateMean()}`
        return studentStr;
    }



    compareTo(otherStudent) {
        const name1 = this.name;
        const name2 = otherStudent.name;

        if (name1 === name2) {
            const yob1 = this.yob;
            const yob2 = otherStudent.yob;

            return yob1 - yob2;

        }
        return name1.localeCompare(name2);
    }

}

class Teacher extends Human {
    constructor(name, surname, yob, nationality, gender, subject, students = []) {
        super(name, surname, yob, nationality, gender);
        this.subject = subject;
        this.students = students;
    }


    toString() {
        const teacherStr = `${super.toString()}
materia : ${this.subject}
numero di studenti : ${this.students.length}`
        return teacherStr;
    }
    
    
    bestStudent(){
        let bestMean = 0 ;
        let bestStudent = null;

        for (let i = 0; i < this.students.length; i++) {
            const student = this.students[i];
            const mean = student.calculateMean();
            if (mean > bestMean) {
                bestMean = mean;
                bestStudent = student;
            }
            
        }
        return bestStudent;
    }

    StudentsMean(){
        let totalMean = 0 ;
        

        for (let i = 0; i < this.students.length; i++) {
            const student = this.students[i];
            const mean = student.calculateMean();
            totalMean += mean 

    }
    const meanOfMeans = totalMean / this.students.length;
    return meanOfMeans;
}
}

class Principal extends Human {
    constructor(name, surname, yob, nationality, gender,school, teachers = []) {
    super(name, surname, yob, nationality, gender);
    this.teachers = teachers;
    this.school = school;
}

bestOfTheBest() {
    let bestStudent = null;
    let highestMean = 0;

    for (let i = 0; i < this.teachers.length; i++) {
        const teacher = this.teachers[i];
        const bestOfTeacher = teacher.bestStudent(); 

        if (bestOfTeacher && bestOfTeacher.calculateMean() > highestMean) {
            highestMean = bestOfTeacher.calculateMean();
            bestStudent = bestOfTeacher;
        }
    }

    return bestStudent ? `${bestStudent.name} ${bestStudent.surname} con media ${highestMean}` : "Nessun vincitore";


 
}

bestTeacher() {
    let bestMean = 0;
    let bestTeacher = null;

    for (let i = 0; i < this.teachers.length; i++) {
        const teacher = this.teachers[i];
        const bestStudent = teacher.bestStudent();
        const mean = bestStudent ? bestStudent.calculateMean() : 0;

        if (mean > bestMean) {
            bestMean = mean;
            bestTeacher = teacher;
        }
    }
    return bestTeacher ? `il miglior insegnante è ${bestTeacher.name} ${bestTeacher.surname} ` : "Nessun insegnante trovato";
}


} 
const student1 = new Student(`laura`, `mazza`, `1984`, `it`, `f`, [7, 8, 9]);
const student2 = new Student(`eusebio`, `veizi`, `1993`, `al`, `m`, [6, 6.5]);
const student3 = new Student(`lorenzo`, `puppo`, `1993`, `it`, `m`, [5, 8, 8]);
const students = [student1, student2, student3];

const student4 = new Student(`hugo`, `martinez`, `1994`, `sv`, `m`, [9, 8, 9]);
const student5 = new Student(`jeremias`, `cedeno`, `2003`, `ec`, `m`, [9, 6, 7]);
const student6 = new Student(`sara`, `de prà`, `1989`, `it`, `f`, [5, 8, 8]);
const students1 = [student4, student5, student6];

const student7 = new Student(`giovanni`, `sussarellu`, `1981`, `it`, `m`, [7, 7, 7]);
const student8 = new Student(`jan`, `stigliani`, `2000`, `it`, `m`, [10, 7, 7]);
const students2 = [student7, student8, student1];
const totalStudents = [students, students1, students2];



const teacher1 = new Teacher(`andrea`, `asioli`, `1978`, `it`, `m`, `CS`, students);
const teacher2 = new Teacher(`edna`, `caprapall`, `1972`, `USA`, `f`, `Lettere`, students1);
const teacher3 = new Teacher(`elizabeth`, `hoover`, `1975`, `USA`, `f`, `Storia`, students2);
const teachers = [teacher1, teacher2, teacher3];

const principal1 = new Principal(`seymor`, `skinner`, `1969`, `USA`, `M`, `springfield`, teachers)

// console.log(student1.toString());
// console.log(teacher1.bestStudent());
// console.log(teacher1.StudentsMean());
// console.log(principal1.bestOfTheBest());
// console.log(principal1.bestTeacher());






//1)aggiungere al toString di tutte le classi gender e nationality
//2)aggiungere a tecaher le funzioni; bestStudent e StudentsMean
//3)aggiungere la classe Principal che erediterà da human e come caratteristiche avrà : 
// -un array di teachers
//-il nome della scuola
//4)aggiungere al principal due funzioni : bestTeacher (la media delle medie migliori studentsMean) e bestStudent (migliore studente tra tutti)


///////////////////////////


class ContoBancario {
    constructor(name, surname, yob, nationality, gender, saldo) {
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.nationality = nationality;
        this.gender = gender;
        this.saldo = Number(saldo)
        if (isNaN(this.saldo)) {
            this.saldo = 0;
        }
    }
    getAge() {
        const now = new Date();   //data di oggi
        const year = now.getFullYear();
        const age = year - this.yob;
        return age;
    }
    toString() {
        const humanStr = `nome : ${this.name}
cognome : ${this.surname}
eta : ${this.getAge()}
genere : ${this.gender}
nazionalità : ${this.nationality}
saldo : ${this.saldo}`
        return humanStr;
    }

    preleva(importo){
        if (typeof importo === "number" && this.saldo - importo > 0) {
            this.saldo -= importo;
            
        }else{
            console.log("Somma non disponibile");
            
        }
        return this.saldo;
    }
    
    versamento(importo){
        if (typeof importo === "number") {
            return this.saldo += importo;
            
        }else{
            console.log("caratteri errati");
            
        }
        
    }
}

class ContoCorrente extends ContoBancario{
    constructor(name, surname, yob, nationality, gender, saldo, limiteSpesa){
        super(name, surname, yob, nationality, gender, saldo);
        this.limiteSpesa = Number(limiteSpesa)
        if (isNaN(this.limiteSpesa)) {
            this.limiteSpesa = 0;
        }
        
    }

    paga(importo){
       if (importo <= this.limiteSpesa && importo <= this.saldo) {
        this.saldo -= importo + (importo * -0.02);
       }else{
            console.log("Somma non disponibile");
            
        }
        return this.saldo;
    }
}

class ContoRisparmio extends ContoBancario {
    constructor(name, surname, yob, nationality, gender, saldo, sogliaBonus){
        super(name, surname, yob, nationality, gender, saldo);
        this.sogliaBonus = Number(sogliaBonus)
        if (isNaN(this.sogliaBonus)) {
            this.sogliaBonus = 0;
        }
    }

    applicaBonus(){
        if (this.saldo > this.sogliaBonus) {
            return this.saldo *= 1.02;
            
        };
        
    }
}

const correntista1 = new ContoBancario(`laura`, `mazza`, `1984`, `it`, `f`, `5043`);
const correntista2 = new ContoBancario(`eusebio`, `veizi`, `1993`, `al`, `m`, `12543`);
const correntista3 = new ContoBancario(`lorenzo`, `puppo`, `1993`, `it`, `m`, `53213`);
const correntista5 = new ContoBancario(`hugo`, `martinez`, `1994`, `sv`, `m`, `3425167`);
const correntista6 = new ContoBancario(`jeremias`, `cedeno`, `2003`, `ec`, `m`, `25000`);
const correntista7 = new ContoBancario(`sara`, `de prà`, `1989`, `it`, `f`, `324325`);
const correntista8 = new ContoBancario(`giovanni`, `sussarellu`, `1981`, `it`, `m`, `3245`);
const correntista9 = new ContoBancario(`jan`, `stigliani`, `2000`, `it`, `m`, `1232`);
const correntista10 = new ContoBancario(`edna`, `caprapall`, `1972`, `USA`, `f`, `5843`);
const correntista11 = new ContoBancario(`elizabeth`, `hoover`, `1975`, `USA`, `f`, `750`);


const ContoCorrente1 = new ContoCorrente(`laura`, `mazza`, `1984`, `it`, `f`, `5043`, `2000`);
const ContoCorrente2 = new ContoCorrente(`eusebio`, `veizi`, `1993`, `al`, `m`, `12543`, `2000`);
const ContoCorrente3 = new ContoCorrente(`lorenzo`, `puppo`, `1993`, `it`, `m`, `53213`, `2000`);
const ContoCorrente4 = new ContoCorrente(`hugo`, `martinez`, `1994`, `sv`, `m`, `3425167`, `2000`);
const ContoCorrente5 = new ContoCorrente(`jeremias`, `cedeno`, `2003`, `ec`, `m`, `25000`, `5000`);
const ContoCorrente6 = new ContoCorrente(`sara`, `de prà`, `1989`, `it`, `f`, `324325`, `2000`);
const ContoCorrente7 = new ContoCorrente(`giovanni`, `sussarellu`, `1981`, `it`, `m`, `3245`, `2000`);
const ContoCorrente8 = new ContoCorrente(`jan`, `stigliani`, `2000`, `it`, `m`, `1232`, `2000`);
const ContoCorrente9 = new ContoCorrente(`edna`, `caprapall`, `1972`, `USA`, `f`, `5843`, `2000`);
const ContoCorrente10 = new ContoCorrente(`elizabeth`, `hoover`, `1975`, `USA`, `f`, `750`, `2000`);

const ContoRisparmio1 = new ContoRisparmio(`sara`, `de prà`, `1989`, `it`, `f`, `324325`, `2000`);
const ContoRisparmio2 = new ContoRisparmio(`giovanni`, `sussarellu`, `1981`, `it`, `m`, `10000`, `2000`);
const ContoRisparmio3 = new ContoRisparmio(`jan`, `stigliani`, `2000`, `it`, `m`, `1232`, `2000`);
const ContoRisparmio4 = new ContoRisparmio(`edna`, `caprapall`, `1972`, `USA`, `f`, `5843`, `2000`);
const ContoRisparmio5 = new ContoRisparmio(`elizabeth`, `hoover`, `1975`, `USA`, `f`, `750`, `2000`);

console.log(correntista10.toString());
console.log('Il nuovo saldo è di ' + correntista10.preleva(5000));
console.log('Il nuovo saldo è di ' + correntista10.versamento(5000));
console.log(ContoCorrente2.toString());
console.log('Il nuovo saldo è di ' + ContoCorrente5.paga(5000));
console.log('Abbiamo aggiunto il tuo BonusSaldo ' + ContoRisparmio2.applicaBonus());

