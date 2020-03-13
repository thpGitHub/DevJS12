/*
var a = 0, b = 0;

a = a + 1; // a passe à la valeur 1

var augmentationA = function() {
    a = a + 1;
};

var augmentationB = function() {
    b = b + 1;
};

augmentationA(); // a passe à la valeur 2
augmentationB(); // b passe à la valeur 1
augmentationA(); // a passe à la valeur 3
alert(a); // affiche 3
augmentationB(); // b passe à la valeur 2
alert(b); // affiche 2

var sonPerceuse = 0;

var changementSon = function(valeur) {
    sonPerceuse = sonPerceuse + valeur;
};

changementSon(4); // sonPerceuse passe à la valeur 4
changementSon(17); // sonPerceuse passe à la valeur 21
alert(['Son perceuse', sonPerceuse]); // affiche 21
*/


var soleil = 0, pluie = 0;

// 1 Créer une fonction pour faire varier la valeur d'une variable au choix
// 2 Il faut vérifier qu'un nombre est bien fourni, sinon la variable ne change pas

var changementValeur = function(valeurChangement,nombreOrigine) {
    var resultat;
    if (typeof(valeurChangement) == 'number') {
            resultat = valeurChangement + nombreOrigine;
    } else {
        resultat = nombreOrigine;
    }
    return resultat;
};


soleil = changementValeur(17,soleil); // soleil vaut 17
pluie = changementValeur(true,pluie); // pluie vaut 0
pluie = changementValeur(98,pluie); // pluie vaut 98

