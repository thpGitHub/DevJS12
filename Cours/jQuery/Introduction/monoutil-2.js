function monOutil(elements) {
  function init(elements) {
    this.balises = document.querySelectorAll(elements);
  }
  var outil = new init(elements);

  outil.actions = outil.__proto__;
  outil.actions.masquer = function() {
    for (var i = 0; i < this.balises.length; i++) {
      this.balises[i].style.display = "none";
    }
  };

  return outil;
}
