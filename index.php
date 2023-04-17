<?php
session_start();
date_default_timezone_set('UTC');
include("fonction.php");
?>

<html>

<head>
  <title> Doufs le je </title>

  <!-- css necessaire pour Bootstrap -->
  <link rel="stylesheet" href="./bootstrap/5.1.2/css/bootstrap.min.css">

  <!--  Mon css perso pour inclure les polices de caracteres-->
  <link rel="stylesheet" href="./css/index.css">

  <!-- scripts necessaires pour bootstrap -->
  <script src="./bootstrap/5.1.2/js/bootstrap.bundle.min.js"></script>
  <script src="./js/script.js"></script>
</head>

<body class="body">
  <div id="content" class="container">
    <?php
    if (isset($_GET["content"])) {
      include $_GET["content"] . ".php";
    } else {
      include "accueil.php";
    }
    ?>
    
  </div>
</body>
</html>