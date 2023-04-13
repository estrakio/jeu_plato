<?php

class Hero
{
  // Déclaration des Variables
  private int $life_max = 100;
  private int $pa_max   = 4;
  private int $pm_max   = 3;
  private int $level    = 1;

  private int $life     = 100;
  private int $pa       = 4;
  private int $pm       = 3;
  private int $xp       = 0;
  private int $xp_up = 100;
  
  // déclarations des méthodes
  public function __construct()
  {
  }

  public function getLife()
  {
    return $this->life;
  }
  public function getPa()
  {
    return $this->pa;
  }
  public function getPm()
  {
    return $this->pm;
  }
  public function setLife($life)
  {
    $this->life = $life;
  }
  public function setPa($pa)
  {
    $this->pa = $pa;
  }
  public function setPm($pm)
  {
    $this->pm = $pm;
  }
  public function add_xp($xp)
  {
    $this->xp += $xp;
  }

  public function gain_niveau($xp)
  {
    while ($xp != 0) {      
      if (($this->xp_up - $xp) < 0) {
        
      }
    }

  }

}