class Tableau {
  constructor() {
    this.terrain = [];
    this.liste_mur = [];
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

    for (let i = 0; i < 6; i++) {
      var ligne = [];
      for (let j = 0; j < 6; j++) {
        var div = new Object();
        div.div_name = "case_" + i + "_" + j;
        div.mur = false;
        div.div = document.getElementById('case_' + i + '_' + j);
        ligne.push(div);
      }
      this.terrain.push(ligne);
    }

    console.log(this.terrain);
  }

  generer_mur() {
    // 
    if (this.liste_mur.length > 0 ) {
      this.liste_mur.forEach(element => {
        var coord = element.split('_');
        var x = coord[1];
        var y = coord[2];
        this.terrain[x][y].mur = true;
        this.terrain[x][y].div.classList.remove('case_mur');
        this.terrain[x][y].div.classList.add('case');
      });
      this.liste_mur = [];
    } else {
      
    }
    // Generation d'une liste de 6 coordonnées ou seront les murs
    while (this.liste_mur.length < 6) {
      var coord_x = this.nombre_random(6);
      var coord_y = this.nombre_random(6);
      var coord = "case_" + coord_x + "_" + coord_y;
      if (!this.liste_mur.includes(coord)) {
        this.liste_mur.push(coord);
      }
    }

    this.liste_mur.forEach(element => {
      var coord = element.split('_');
      var x = coord[1];
      var y = coord[2];
      this.terrain[x][y].mur = true;
      this.terrain[x][y].div.classList.remove('case');
      this.terrain[x][y].div.classList.add('case_mur');
    });

    console.log(this.liste_mur);
  }

  depart_hero() {
    var case_valide = false;
    while (case_valide) {
      var coord_x = this.nombre_random(6);
      var coord_y = this.nombre_random(6);
      var coord = "case_" + coord_x + "_" + coord_y;
      if (!this.liste_mur.includes(coord)) {
        case_valide = true;
      }
    }

    this.terrain.forEach(element => {
      element.forEach(case => {
        case.div_name
      });
      this.terrain[x][y].div.classList.remove('case');
      this.terrain[x][y].div.classList.add('hero');
    });

  }
}

// Path: js\script.js