<?php


Class Tableau
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
    $this->definition_niveau();
  }

  private function definition_niveau()
  {
    $this->liste_niveau = array(
      1 =>array(7, 10, 13, 16, 9, 20));
  }

  public function creation_tableau($niveau)
  {
    $index = 0;
    for ($x=0; $x <6 ; $x++) { 
      echo('<div div="col_'.$x.'"class="row">');
      for ($y=0; $y <6 ; $y++) { 
        if (in_array($index, $this->liste_niveau[$niveau])) {
          echo('<div class="case">X</div>');
        }else{
        echo("<div class='case'></div>");
        }
        $index+=1;
        }
      }
      echo('</div>');
    }
    
  
}