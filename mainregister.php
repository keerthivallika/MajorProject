<?php

session_start();
require_once("db.php");

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Register</title>

    <link rel="icon" href="img/favicon.png" type="image/x-icon"/>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

  </head>
  <body>

  <font face="calibri">
    
  <!-- Navigation Bar Start -->

  <section>
  <div class="container">
  <div class="row">
  <header>
    <nav class="navbar navbar-default" style="margin-bottom: 0; height: 80px; background-color: white; border-color: transparent;">
      <div class="container-fluid">

        <div class="navbar-header">
          <a class="navbar-brand" style="font-size: 24px; color: #053a5a; line-height: 42px;" href="index.php">Placement Management System</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">     
          <ul class="nav navbar-nav navbar-right">
          <?php
          if(isset($_SESSION['id_user']) && empty($_SESSION['companyLogged'])) {
            ?>
            <li><a href="user/dashboard.php">Dashboard</a></li>
            <li><a href="logout.php">Logout</a></li>
            <?php 
            } else if(isset($_SESSION['id_user']) && isset($_SESSION['companyLogged'])){
            ?>
            <li><a href="company/dashboard.php">Dashboard</a></li>
            <li><a href="logout.php">Logout</a></li>
            <?php } else { 
            ?>
            <li style="padding-right: 25px;"><a href="search.php" style="font-size: 24px; color: #053a5a; line-height: 42px;">Search for Jobs</a></li>
            <li style="padding-right: 25px;"><a href="mainregister.php" style="font-size: 24px; color: #053a5a; line-height: 42px;">Register</a></li>
            <li style="padding-right: -25px;"><a href="mainlogin.php" style="font-size: 24px; color: #053a5a; line-height: 42px;">Login</a></li>
          <?php } ?>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  </div>
  </div>
  </section>

  <!-- Navigation Bar End -->

  <div style="background-color: #053a5a; height: 65px;">
    <p style="font-size: 34px; color: white; text-align: center; line-height: 65px;">Register</p>
  </div>

  <br>
  <br>

  <div class="container" align="center">
    <div class="row">
      <div style="">
        <h1 style="color: black; line-height: 75px;"><a href="register.php" style="color: black;background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 38;
  -moz-border-radius: 38;
  border-radius: 38px;
  font-family: Arial;
  color: #ffffff;
  font-size: 30px;
  padding: 20px 20px 20px 20px;
  text-decoration: none; background: #3cb0fd;
  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  text-decoration: none;"> Candidate Register </a></h1>
      </div>
      <br>
      <br>
      <div style="">
        <h1 style="color: black; line-height: 75px;"><a href="company-register.php" style="color: black;background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 38;
  -moz-border-radius: 38;
  border-radius: 38px;
  font-family: Arial;
  color: #ffffff;
  font-size: 30px;
  padding: 20px 20px 20px 20px;
  text-decoration: none; background: #3cb0fd;
  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  text-decoration: none;"> Company Register </a></h1>
      </div>
    </div>
  </div>

  <br>
  <br>
  <br>
  <br>
  <br>
  <br>

  <!-- Footer Start -->
  
  <footer id="footer" style="background-color: #000000; height: 200px;">

<div class="footer">
  <div class="container">
    <div class="col-md-6 ftr_navi ftr">
      <h3>NAVIGATION</h3>
      <ul>
        <li>
          <a href="index.php">Home</a>
        </li>
        <li>
          <a href="login.php">Student Login</a>
        </li>
        <li>
          <a href="company-login.php">Company Login</a>
        </li>
        <li>
          <a href="admin/index.php">Placement Login</a>
        </li>
      </ul>
    </div>
    <div class="col-md-6 get_in_touch ftr">
      <h3>CONTACT US</h3>
      <p>IIIT RGUKT</p>
      <p>Idupulapaya, Andhra Pradesh, India</p>
      <p>1234567890</p>
      <a href="mailto:iiitrguktrkvalley@gmail.com">iiitrguktrkvalley@gmail.com</a>
    </div>
    
  </div>

</footer>

  <!-- Footer End -->

  </font>

  </body>
</html>