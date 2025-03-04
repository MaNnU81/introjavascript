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

const book1 = new Book(`il signore degli anelli`, `J.R.R. Tolkien`, 80054278);

console.log(book1.isbn);

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
const bookPhy1 = new PhysicalBook(`il signore degli anelli`, `J.R.R. Tolkien`, 80054278, `a-15`);
console.log(bookPhy1.toString());

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
const eBook1 = new EBook(`il signore degli anelli`, `J.R.R. Tolkien`, 80054278, `.mobi`);
console.log(eBook1.toString());

class User {
    static maxBorrowLimit = 3;
    constructor(name, id, borrowedBooks = []) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = borrowedBooks;
    }

    borrowBook(book){
        if(this.borrowedBooks.length >= User.maxBorrowLimit){
            console.error('hai superato il limite di libri che puoi prendere in prestito!!!!!!!!!')
            return 
        }
        this.borrowedBooks.push(book);
        console.log(`hai preso in prestito ${book.title}`);
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
const user1 = new User(`Patrik`, `T-1520` );
console.log(user1.borrowBook(bookPhy1));