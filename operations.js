// Les 5 opérations arithmetiques + - / * %(modulo)

let n1 = 12;
let n2 = 45;
let n3 = 2.3;

console.log("n1 = " + n1);
console.log("n2 = " + n2);
console.log("n3 = " + n3);

console.log(n1+n2);
console.log(n3-n2);
console.log(n1*n2);
console.log(n2/n3);
console.log(n2%n1);

// L'addition dans différents cas
// 12 + 12 => 24  -> number + number = number
// "12" + 12 => 1212  -> "12" + "12" le number est convertit en string + concaténation
// "5" * 6 = 30  -> = 5 * 6 la string est convertit en number

// concaténation = collage de 2 string
"Bonjour" + "les amis"