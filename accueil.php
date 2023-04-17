<?php
// include_once('fonction.php');
include_once('./Class/Hero.php');
include_once('./Class/tableau.php');
// def_tableau_jeu();
$player = new Hero();
// echo($player->getLife());

$tableau = new Tableau(6, 6);

?>
<div class='center row'>
  <div class='col-5 petitcarre'>
    <?php $tableau->creation_tableau(2); ?>
  </div>
  <div class='col-7 petitcarre'>
    <div class="container cent_pour_cent">
      <div class="row cent_pour_cent">
        <!-- coté menu de 'log' qui rend compte de ce qu'il ce passe en jeu -->
        <div class="col-6 petitcarre cent_pour_cent">
          fjksqdlkfjklqmsdj
        </div>
        <!-- coté menu + hdv etc -->
        <div class="col-6 petitcarre cent_pour_cent">
          <!-- coté carac perso -->
          <div class="row petitcarre cinquante_pour_cent">

          </div>
          <!-- coté hdv -->
          <div class="row petitcarre cinquante_pour_cent">

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="row  barre_bouton ">
  <div class="col-6 petitcarre cent_pour_cent">

  </div>
  <div class="col-6 petitcarre cent_pour_cent">

  </div>
</div>