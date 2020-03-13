function monOutil(elements) {
  function init(elements) {
    this.balises = document.querySelectorAll(elements);
  }
  var outil = new init(elements);

  outil.actions = outil.__proto__;
  outil.actions.balayage = function(action) {
    for (var i = 0; i < this.balises.length; i++) {
      action(this.balises[i]);
    }
  };
  outil.actions.masquer = function() {
    this.balayage(function(cible) {
      cible.style.display = "none";
    });
    return this;
  };
  outil.actions.texte = function(nouveauTexte) {
    this.balayage(function(cible) {
      cible.innerHTML = nouveauTexte;
    });
    return this;
  };
  outil.actions.unStyle = function(leStyle, laValeur) {
    this.balayage(function(cible) {
      cible.style[leStyle] = laValeur;
    });
    return this;
  };

  return outil;
}
