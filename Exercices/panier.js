let prix = Number(prompt("Entrez le prix"));
let quantite = Number(prompt("Entrez la quantité"));

let total = (prix * quantite);

if (total > 50)
{
    total = total * 0.9;
    alert("Prix après réduction = " + total);
}
else
    alert("Aucune réduction, prix = " + total);
