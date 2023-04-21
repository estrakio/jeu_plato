document.addEventListener("DOMContentLoaded", function(event){
  
  
  // Appel des Classes
  const Hero    = new Hero();
  const Tableau = new Tableau();
  const Combat  = new Combat();
  const Enemi   = new Enemi();
  
  // Récupération des éléments HTML
  const bouton_test = document.getElementById('generate_level');
  
  // Lancement des fonctions nécessaire à la récupération de données.
  Tableau.recuperer_terrain();
  
  
  // ajout d'un écouteur d'évenement sur le bouton
  bouton_test.addEventListener("click", function() {
    Tableau.generer_mur();
    Tableau.depart_hero();

  });

});