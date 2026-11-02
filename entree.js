// Entrée : récupere une valeure fournie par un utilisateur ou un dispositif
// une seule instruction : prompt

// Affiche un PopUp avec un message
alert("Message");

// Affiche un PopUp avec un chamo de saisie
prompt("Quel est votre nom?");

// Récuperer la valeure saisie par l'utilisateur
let nom = prompt("Quel est votre nom ?");
console.log(nom);

//prompt retourne toujours une string
let nombre1 = prompt("veuillez entrer un nombre");
console.log(typeof nombre1)

let nombre2 = Number(prompt("Veuillez entrer un nombre"));
console.log(typeof nombre2);
