class Tableau {
  constructor() {
    this.terrain = [];
  }

  nombre_random(max) {
    return Math.floor(Math.random() * max);
  }

  recuperer_terrain() {

    // Format de l'objet Case_terrain
    // var Case_terrain = {
    //   x: 0,
    //   y: 0,
    //   mur: false,
    //   div: null
    // }

    for (let i = 0; i < 6; i++) {
      var ligne = [];
      for (let j = 0; j < 6; j++) {
        var div = new Object();
        div.x = i;
        div.y = j;
        div.mur = false;
        div.div = document.getElementById('case_' + i + '_' + j);
        ligne.push(div);
      }
      this.terrain.push(ligne);
    }

    console.log(this.terrain);
  }

  generer_mur() {
    // Generation d'une liste de 6 coordonnées ou seront les murs
    var liste_mur = [];
    for (let i = 0; i < 6; i++) {
      coord_x = this.nombre_random(6);
      coord_y = this.nombre_random(6);
    }
  }
}


