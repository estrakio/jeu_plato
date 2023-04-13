<?php
// include_once('fonction.php');
include_once('./Class/Hero.php');
include_once('./Class/tableau.php');
// def_tableau_jeu();
$player = new Hero();
// echo($player->getLife());

$tableau = new Tableau(6,6);

echo("<div class='text-center'>");
$tableau->creation_tableau(1);
echo("</div>");


?>




<!-- <div class="row">

  <div class="case"></div>
  <div class="case"></div>
  <div class="case"></div>
  <div class="case"></div>
</div>
<div class="row">

  <div class="case"></div>
  <div class="case"></div>
  <div class="case"></div>
  <div class="case"></div>
    <div class="case"></div>
  <div class="case"></div>
  </div> -->