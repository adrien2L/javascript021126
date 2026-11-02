// On doit parfois executer un ode différent selon une certaine condition
//Si a > b alors on affiche "Bonjour" sinon on affiche "Au revoir"

let a = 12;
let b = 14;

if (a > b)                    // Si a plus grand que b
    {
    console.log("Bonjour");   // On écrit Bonjour (bloc 1)
    alert("Bonjour");         // On affiche PopUp Bonjour
    }
else                          // Sinon
    console.log("Au revoir"); // On écrit au revoir (bloc 2)

// IMPORTANT Si un bloc contient plus d'une instruction, if faut l'encadrer par {}

/* (bloc de commentaire)
Opérateurs de comparaison
> Plus grand que, < Plus petit que, >= Plus grand ou égal, <= Plus petit ou égal
== égal en valeur, === égal en valeure et en type.
5 === 5 -> vrai / "5" === 5 -> faux / "5" == 5 -> vrai
*/