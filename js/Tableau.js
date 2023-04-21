class Tableau {
  constructor() {
    // Contient des Objets Case du tableau php
    this.terrain;
    // Contient les pairs de coordonnées des murs
    this.liste_mur;
    this.liste_hero;
    this.liste_entite;
  }

  nombre_random(max) {
    return Math.floor(Math.random() * max);
  }

  recuperer_terrain() {

    // Format de l'objet Case_terrain
    // var Case_terrain = {
    //   div_name: "",
    //   mur: false,
    //   div: null
    // }
    var terrain_ephemere = [];
    for (let i = 0; i < 6; i++) {
      var ligne = [];
      for (let j = 0; j < 6; j++) {
        var name = "case_" + i + "_" + j;
        var div_html = document.getElementById(name);
        var case_ = new Case(i, j, name, div_html);
        ligne.push(case_);
      }
      terrain_ephemere.push(ligne);
    }
    this.terrain = terrain_ephemere;
    console.log(this.terrain);
  }

  generer_mur() {
    // Si réappui sur le bouton changer les murs
    this.liste_mur?this.liste_mur.forEach(couple_case => {
      this.terrain[couple_case[0]][couple_case[1]].set_case("case", "");
    }):null;
    
    // Générer 6 coordonnées de murs aléatoires différentes
    var list_mur_ephemere = [];
    while (list_mur_ephemere.length < 6) {
      var couple = [this.nombre_random(6), this.nombre_random(6)];
      if (!list_mur_ephemere.includes(couple)) {
        //alert("je rentre dans la condition pd ");
        list_mur_ephemere.push(couple);
        // Changer les class CSS des divs auquel les coordonnées 
        this.terrain[couple[0]][couple[1]].set_case("case_mur", "mur");
      }
    }
    // alert('je sors de la condition');
    this.liste_mur = list_mur_ephemere;
  }

  depart_hero() {
    // Si réappui sur le bouton changer le départ
    this.liste_hero?this.terrain[this.liste_hero[0]][this.liste_hero[1]].set_case("case", ""):null;

    var depart = [this.nombre_random(6), this.nombre_random(6)];
    // alert(depart);
    this.terrain[depart[0]][depart[1]].set_case("case_hero", "hero");
    this.liste_hero = depart;
    Hero.pos_x = depart[0];
    Hero.pos_y = depart[1];
  }

  deppart_monstre() {
  
  
  
  }

}



// Path: js\script.js