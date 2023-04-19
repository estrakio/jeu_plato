class Case {
  constructor(x, y, div_name, element) {
    this.x = x;
    this.y = y;
    this.div_name = div_name;
    this.etat;
    this.div = element;
  }
  set_case(nom_class, etat) {
    //alert('oui');
    this.div.classList.value = "";
    this.div.classList.add(nom_class);
    this.etat = etat;
  }
}