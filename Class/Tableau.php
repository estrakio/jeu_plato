<?php


class Tableau
{

  private int $taille_vertical;
  private int $taille_horizontal;
  private array $tableau;
  private array $liste_niveau;
  private array $spawn;

  public function __construct($taille_vertical, $taille_horizontal)
  {
    $this->taille_vertical = $taille_vertical;
    $this->taille_horizontal = $taille_horizontal;
    // $this->definition_niveau();
  }
  // public function getliste_niveau()
  // {
  //   return $this->liste_niveau[2];
  // }
  // private function definition_niveau()
  // {
  //   $random = $this->niveau_random();
  //   $this->liste_niveau = array(
  //     1 => array(7, 10, 13, 16, 9, 20),
  //     2 => $random
  //   );

  // }
  // private function niveau_random()
  // {
  //   $liste = array();
  //   while (count($liste) < 6) {
  //     $random_chiffre = rand(0, 35);
  //     if (!in_array($random_chiffre, $liste)) {
  //       $liste[] = $random_chiffre;
  //     }
  //   }
  //   return $liste;
  // }


  public function creation_tableau($niveau)
  {
    $index = 0;
    for ($x = 0; $x < 6; $x++) {
      echo ('<div div="col_' . $x . '"class="">');
      for ($y = 0; $y < 6; $y++) {
          echo ('<div id ="case_'.$x.'_'.$y.'"class="case_mur"></div>');
        $index += 1;
      }
      echo ('</div>');
    }
  }


}