console.log("hello world");

console.log("ciao mondo");

// typeo

console.log(typeof 5);
console.log(typeof "hello world");
console.log(typeof true);

//numbers

5 //integer
7.68 //float
//310000 esponenziali
3.1e5

Infinity //numero piu grande possibile
-Infinity //numero piu piccolo possibile
NaN //Not a Number...ma è un numero
console.log(typeof NaN)  //verifica che sia veramente numero
console.log(0/0)  //prova per far uscire un NaN
console.log("somma 5+7", 5+7, "ciao");
console.log("sottrazione 5-7", 5-7);
console.log("negativo", -7);
console.log("prodotto 5*7", 5*7);
console.log("divsione 5/7", 5/7);
console.log("potenza 2**5", 5**7);

//MODULO
console.log("modulo 5%2", 5 % 2 );
console.log("modulo 12%5", 12 % 5 );

//tutte le operazioni possibile sono queste, per altre bisogna usare MATH

console.log("radice quadrata 9", Math.sqrt(9));
console.log("arrotondamento 9.6", Math.round(9.6)); //math.round come matematica, math.floor verso il basso math.ceil verso l'alto

//stringhe testo, anche se sono numeri ma scritto risultano testo
console.log("234", 234);
console.log("io sono una stringa");
console.log('io sono una stringa');
console.log('io sono una "stringa"');
console.log("\"l'apostrofo\" è importante");
console.log("\"l'apostrofo\" è importante \n non ne posso fare a meno");

console.log(`"l'apostrofo" è importante
    non ne posso fare  a meno`);   //alt+96 va a capo se vado a capo senza comando \n e al suo interno posso inserire del codice, non esiste in italiano e non rompe come le "" o ''
    
console.log(` la somma di 5 e 7 è ${7+5}`);  //esempio

console.log('ciao a tutti' + ' sono Mannu');


//Boolean
console.log("Vero", true);
console.log("Falso", false);

//not  !
console.log("not+vero", !true);
console.log("not+falso", !false);

//and  &&
console.log("true and true", true && true);
console.log("true and false", true && false);
console.log("false and true", false && true);
console.log("false and false", false && false);

//or maiusc+backslash (double pipe) ||

console.log("true or true", true || true);
console.log("true or false", true || false);
console.log("false or true", false || true);
console.log("false or false", false || false);

//undefind null

console.log(typeof undefined);  //mai definito
console.log(typeof null);     //per forzare il fatto che sia vuoto

//operatori di confronto 

//uguaglianza  ==/===  mai usare il ==(vecchio metodo, esiste ma non si usa)
//diverso !=/!==  stesso concetto (rifarti esempio, viene al contrario)

console.log("5 è uguale a 5", 5==5);  //non usare
console.log("5 è uguale a 6", 5==6);  //non usare
console.log("5 è uguale a 5", 5===5); 
console.log("5 è uguale a 6", 5===6); 
console.log("la stringa 5 è uguale a 5", "5"==5);  //motivo per la quale non si usa, forza le cose
console.log("la stringa 5 è uguale a 5", "5"===5); 

//confronto </<=  >/>=
console.log("5 è minore di 6", 5<6); 
console.log("5 è maggiore di 6", 5>6); 

console.log("a è maggiore di b", "a">"b"); 
console.log("a è minore di b", "a"<"b"); 
console.log("A è minore di b", "A"<"b"); //maiuscole sono maaggiori...vedi ordine di valori

//Variabili var, let, const   

let pippo = 5;
console.log(pippo);
console.log(pippo+2);


pippo="stocazzo"  //let cambia ache senza rimettere let, quindi contenitore che puo cambiare valore, non tipato quindi tipo anche diverse
console.log(pippo)

const pluto = 9;
console.log(pluto+2);
//pluto = stocazzo   const non si puo camabiare
//console.log(pluto)


//NON usare MAI VAR !!!!!!!!! ma usa let
//paperino = 10 ;
//console.log(paperino)
//var paperino

let pippo2 = 5 * 5;
console.log (pippo2 + 5);
//CamelCase e assegnazione

const numeroDaElevareAPotenza = 9;
const esponenteDellaPotenza = 2;
console.log(numeroDaElevareAPotenza ** esponenteDellaPotenza);

//short circuit operator 

const qui = 5 || 6;  //operatore logico nella variabili, da spiegare meglio nel futuro
console.log(qui);
//const qui2 = false || 6;  
//console.log(qui2); 

const qua = 5 ?? 6;  
console.log(qua); 
const qua2 = false ?? 6;   //si rompe solo se il primo è undefinied o nan il ?? controlla solo se è vuoto
console.log(qua2); 

const quo = (5 > 4) ? 10 : 20 ;    //operatore ternario se vero inserisce primo dei due successivi valori
console.log(quo); 
const quo2 = (5 < 4) ? 10 : 20 ;    //operatore ternario se falso inserisce secondo dei due successivi valori
console.log(quo2); 































