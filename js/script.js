document.addEventListener("DOMContentLoaded", function(event){
  // code to be executed when the document is ready
  
  // permet de récuperer un element du html
  const bouton_test = document.getElementById('generate_level');

  // permet d'appeler une classe
  const test = new Hero();
  const tableau = new Tableau();
  tableau.recuperer_terrain();
  // alert(tableau.terrain);


  // appel la méthode "hello" de la classe Hero
  // test.hello();
  
  // permet de mettre une valeur dans le html
  // this.getElementById('testou').innerHTML = test.hp;
  
  // permet d'ajouter un écouteur d'évènement sur le bouton et d'executer la fonction anonyme qui suis
  bouton_test.addEventListener("click", function() {
    tableau.generer_mur();
    tableau.depart_hero();
  });

});