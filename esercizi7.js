// Esercizio: Sistema di Gestione di una Biblioteca con Programmazione ad Oggetti in JavaScript
// 
// 
// Obiettivo:Creare un sistema di gestione di una biblioteca
// Requisiti:

//     Classi Principali:
//         Book: Rappresenta un libro generico.
//         PhysicalBook: Eredita da Book e rappresenta un libro fisico con una posizione sugli scaffali.
//         EBook: Eredita da Book e rappresenta un libro elettronico con un formato di file.
//         User: Rappresenta un utente della biblioteca.
//         PremiumUser: Eredita da User e rappresenta un utente premium con un limite massimo di libri che può prendere in prestito estendibile.
//         Library: Gestisce i libri e gli utenti della biblioteca.

//     Proprietà e Metodi:
//         Book:
//             Proprietà: title, author, isbn
//             Metodi: toString().
//         PhysicalBook:
//             Proprietà aggiuntiva: shelfLocation.
//         EBook:
//             Proprietà aggiuntiva: fileFormat.
//         User:
//             Proprietà: name, id, borrowedBooks, maxBorrowLimit(statica) = 3
//             Metodi: borrowBook(book), returnBook(book), borrowedBooksNumber(getter).
//         PremiumUser:
//             Metodo aggiuntivo: extendBorrowLimit(newLimit).
//         Library:
//             Proprietà: books, users.
//             Metodi: addBook(book), removeBook(book), isBookAvailable(isbn), addUser(user), removeUser(user), listBooks(), listUsers(), borrowBook(user, book), returnBook(user, book).

//     Funzionalità:
//         Aggiungere e rimuovere libri dalla biblioteca.
//         Aggiungere e rimuovere utenti dalla biblioteca.
//         Gestire il prestito e la restituzione dei libri agli utenti.
//         Visualizzare l'elenco dei libri disponibili e degli utenti registrati.

class Book {
    
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    // get isbn(){
    //     return `isbn + ${this.isbn}`;
    // }
    // set isbn(value){
    //     this.isbn = value;
    // }

    toString(){
        const bookStr = `
        titolo : ${this.title}
        autore : ${this.author}`;
        return bookStr;
    }

}


class PhysicalBook extends Book {
    constructor(title, author, isbn, shelfLocation) {
        super(title, author, isbn);
        this.shelfLocation = shelfLocation;
    }
    toString(){
        const bookphyStr = `
        Physical Version
         ${super.toString()}
        shelfLocation : ${this.shelfLocation}`;
        return bookphyStr;
    }

}


class EBook extends Book {
    constructor(title, author, isbn, fileFormat) {
        super(title, author, isbn);
        this.fileFormat = fileFormat;
    }
    toString(){
        const eBookStr = `
        EBook version 
         ${super.toString()}
        fileFormat : ${this.fileFormat}`;
        return eBookStr;
    }

}



class User {
    static maxBorrowLimit = 3;
    
    constructor(name, surname, id, borrowedBooks = []) {
        this.name = name;
        this.surname = surname
        this.id = id;
        this.borrowedBooks = borrowedBooks;
    }

    borrowBook(book){
        if (this.borrowedBooks.length < User.maxBorrowLimit) {
            this.borrowedBooks.push(book);
            console.log(`${this.name} ha preso in prestito "${book}".`);
        } else {
            console.log(`${this.name} ha raggiunto il limite massimo di prestiti.`);
        }
    }
    returnBook(book){
        if(this.borrowedBooks.length > 0){
            console.error('che cazzo vuoi, non hai libri da restituire, mi fai perdere tempo')
            return 
        }
        if(this.borrowedBooks.includes(book) ){
        this.borrowedBooks.splice(book);
        console.log(`hai restituito il libro finalmente ${book.title}`);
    } else {
        console.error('che cazzo vuoi, mi fai perdere tempo, sto libro non e nostro')
    }
    }
}

class PremiumUser extends User {
    constructor(name, surname, id, newLimit,  borrowedBooks = []) {
    super(name, surname, id, borrowedBooks = []);  
    this.newLimit = User.maxBorrowLimit; // Di base ha il limite standard      
    }

    extendBorrowLimit(newLimit){
        if (newLimit > User.maxBorrowLimit) {
            this.newLimit = newLimit;
            console.log(`${this.name} ora può prendere fino a ${this.newLimit} libri in prestito.`);
        } else {
            console.log(`Il nuovo limite deve essere maggiore di ${User.maxBorrowLimit}.`);
        }
        

    }

    borrowBook(book) {
        if (this.borrowedBooks.length < this.newLimit) {
            this.borrowedBooks.push(book);
            console.log(`${this.name} ha preso in prestito "${book}".`);
        } else {
            console.log(`${this.name} ha raggiunto il limite massimo di prestiti (${this.newLimit}).`);
        }
    }
}




const book1 = new Book(`il signore degli anelli`, `J.R.R. Tolkien`, 80054278);
const book2 = new Book(`Qualcuno volò sul nido del cuculo`, `Ken Kesey`, 9788807882305);
const book3 = new Book(`M. Il figlio del secolo`, `Antonio Scurati`, 9788817141934);
const book4 = new Book(`Lo Hobbit`, `J.R.R. Tolkien`, 9788804667981);
const book5 = new Book(`Vivere lavorando o morire combattendo`, `Valerio Evangelisti`, 9788860882429);
const book6 = new Book(`Chi ha del ferro ha del pane`, `Valerio Evangelisti`, 9788860882986);
const book7 = new Book(`Nella notte ci guidano le stelle`, `Valerio Evangelisti`, 9788860883570);
const book8 = new Book(`Il problema dei tre corpi`, `Liu Cixin`, 9788833312755);
const book9 = new Book(`Soffocare`, `Chuck Palahniuk`, 9788807880806);

const bookPhy1 = new PhysicalBook(`il signore degli anelli`, `J.R.R. Tolkien`, 80054278, `a-125`);
const bookPhy2 = new PhysicalBook(`il signore degli anelli`, `J.R.R. Tolkien`, 80054278, `a-153`);
const bookPhy3 = new PhysicalBook(`Qualcuno volò sul nido del cuculo`, `Ken Kesey`, 9788807882305, `a-165`);
const bookPhy4 = new PhysicalBook(`M. Il figlio del secolo`, `Antonio Scurati`, 9788817141934, `a-195`);
const bookPhy5 = new PhysicalBook(`Lo Hobbit`, `J.R.R. Tolkien`, 9788804667981, `a-5`);
const bookPhy6 = new PhysicalBook(`Vivere lavorando o morire combattendo`, `Valerio Evangelisti`, 9788860882429, `c-1`);
const bookPhy7 = new PhysicalBook(`Chi ha del ferro ha del pane`, `Valerio Evangelisti`, 9788860882986, `a-13c-2`);
const bookPhy8 = new PhysicalBook(`Nella notte ci guidano le stelle`, `Valerio Evangelisti`, 9788860883570, `c-3`);
const bookPhy9 = new PhysicalBook(`Il problema dei tre corpi`, `Liu Cixin`, 9788833312755, `b-15`);
const bookPhy10 = new PhysicalBook(`Soffocare`, `Chuck Palahniuk`, 9788807880806, `c-22`);


const eBook1 = new EBook(`il signore degli anelli`, `J.R.R. Tolkien`, 80054278, `.mobi`);
const eBook2 = new Book(`Vivere lavorando o morire combattendo`, `Valerio Evangelisti`, 9788860882429, `.mobi`);
const eBook3 = new Book(`Chi ha del ferro ha del pane`, `Valerio Evangelisti`, 9788860882986, `.pdf`);
const eBook4 = new Book(`Nella notte ci guidano le stelle`, `Valerio Evangelisti`, 9788860883570, `.mobi`);
const eBook5 = new Book(`Il problema dei tre corpi`, `Liu Cixin`, 9788833312755, `.pdf`);
const eBook6 = new Book(`Soffocare`, `Chuck Palahniuk`, 9788807880806);

const user1 = new User(`Patrik`, `Rossi`, `T-1520`);
const user2 = new User(`Elena`, `Bianchi`, `T-3841`);
const user3 = new User(`Marco`, `Verdi`, `T-9275`);
const user4 = new User(`Giulia`, `Neri`, `T-6318`);
const user5 = new User(`Luca`, `Galli`, `T-2487`);
const user6 = new User(`Francesca`, `Moretti`, `T-7652`);
const user7 = new User(`Andrea`, `Colombo`, `T-5193`);
const user8 = new User(`Valentina`, `Ferrari`, `T-8740`);
const user9 = new User(`Giorgio`, `Romano`, `T-3029`);
const user10 = new User(`Sara`, `Conti`, `T-6905`);

const premiumUser1 = new PremiumUser(`Roberto`, `Napoli`, `T-5433`);
const premiumUser2 = new PremiumUser(`Raffaella`, `Job`, `T-8430`);
const premiumUser3 = new PremiumUser(`Paolo`, `Gas`, `T-3569`);
const premiumUser4 = new PremiumUser(`Luce`, `Nana`, `T-6875`);

// console.log(bookPhy1.toString());
// console.log(eBook1.toString());
// // console.log(user1.borrowBook(bookPhy1));

// premiumUser1.extendBorrowLimit(5);
// console.log(bookPhy6.toString());
// console.log(user2.borrowBook(bookPhy6));
// console.log(user2.borrowBook(bookPhy1));
// console.log(user2.borrowBook(bookPhy7));
// console.log(user2.borrowBook(bookPhy9));
// // console.log(premiumUser1.borrowBook(bookPhy1));
// // console.log(premiumUser1.borrowBook(bookPhy4));
// // console.log(premiumUser1.borrowBook(bookPhy7));
// // console.log(premiumUser1.borrowBook(bookPhy9));
// // console.log(premiumUser1.borrowBook(bookPhy10));
// console.log(user2.borrowedBooks);


