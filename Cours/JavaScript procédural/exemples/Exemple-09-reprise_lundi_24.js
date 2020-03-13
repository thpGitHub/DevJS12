// Création d'un tableau vide qui est stocké dans une variable
var monTableau = [];

monTableau[0] = 'soleil';
monTableau[1] = 'pluie';
monTableau[2] = 'vent';

alert(monTableau[1]); // affichera 'pluie'

var repere = 0;
while (repere < 3) {
    alert(monTableau[repere]);
    // repere = repere + 1; qui est équivalent à :
    repere++;
}

monTableau[3] = 'orage';
monTableau[4] = 'bruine';

// for (VALEUR_DE_DEPART;LIMITE (TEST);INCRÉMENTATION) {

// }

for (var i=0;i<5;i++) {
    alert(monTableau[i]);
}