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
        super(name, surname, yob, nationality, gender)
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
        let bestStudent = "";

        for (let i = 0; i < this.students.length; i++) {
            const student = this.students[i];
            const mean = student.calculateMean();
            if (mean > bestMean) {
                bestMean = mean;
                bestStudent = student.name + " " + student.surname;
            }
            
        }
        return `${bestStudent} : ${bestMean}`;
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

const student1 = new Student(`laura`, `mazza`, `1984`, `it`, `f`, [7, 8, 9]);
const student2 = new Student(`eusebio`, `veizi`, `1993`, `al`, `m`, [6, 6.5]);
const student3 = new Student(`lorenzo`, `puppo`, `1993`, `it`, `m`, [5, 8, 8]);
const students = [student1, student2, student3];


const teacher1 = new Teacher(`andrea`, `asioli`, `1978`, `it`, `m`, `CS`, students)

console.log(student1.toString());
console.log(teacher1.bestStudent());
console.log(teacher1.StudentsMean());


//1)aggiungere al toString di tutte le classi gender e nationality
//2)aggiungere a tecaher le funzioni; bestStudent e StudentsMean
//3)aggiungere la classe Principal che erediterà da human e come caratteristiche avrà : 
// -un array di teachers
//-il nome della scuola
//4)aggiungere al principal due funzioni : bestTeacher (la media delle medie migliori studentsMean) e bestStudent (migliore studente tra tutti)