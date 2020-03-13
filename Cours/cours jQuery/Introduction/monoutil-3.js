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
    var realisation = function(cible) {
      cible.style.display = "none";
    };
    this.balayage(realisation);
  };

  return outil;
}
