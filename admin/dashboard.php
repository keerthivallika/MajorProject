<?php
session_start();
if(empty($_SESSION['id_admin'])) {
  header("Location: index.php");
  exit();
}
require_once("../db.php");
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Dashboard</title>

    <link rel="icon" href="../img/favicon.png" type="image/x-icon"/>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>

    <font face="calibri">
    
    <!-- NAVIGATION BAR -->
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
            <li style="padding-right: 25px;"><a href="../logout.php" style="font-size: 24px; color: #053a5a; line-height: 42px;">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  </div>
  </div>
  </section>

      <div style="background-color: #053a5a; height: 80px;">
    <p style="font-size: 34px; color: white; text-align: center; line-height: 73px;">Admin Panel</p>
  </div>
  <br>

    <div class="container">
      <div class="row">
        <div class="col-md-12" align="center">
          <div class="list-group" align="center" style="width: 50%; border: 1px solid #053a5a; border-radius: 5px;">
            <a href="dashboard.php" class="list-group-item active" style="font-size: 20px;">Dashboard</a>
            <a href="user.php" class="list-group-item" style="font-size: 20px;">Users</a>
            <a href="company.php" class="list-group-item" style="font-size: 20px;">Company</a>
            <a href="job-posts.php" class="list-group-item" style="font-size: 20px;">Job Posts</a>
          </div>
        </div>
        <div class="col-md-12" align="center">
          <h3 style="font-size: 30px;">Welcome To Dashboard, Admin!</h3>
        </div>
      </div>
    </div>
    <br><Br>
    <footer id="footer" style="background-color: #000000; height: 200px;">

<div class="footer">
			<div class="container">
				<div class="col-md-6 ftr_navi ftr">
					<h3>NAVIGATION</h3>
					<ul>
						<li>
							<a href="../index.php">Home</a>
						</li>
						<li>
							<a href="../login.php">Student Login</a>
						</li>
						<li>
							<a href="../company-login.php">Company Login</a>
						</li>
            <li>
							<a href="../admin/index.php">Placement Login</a>
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
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  </font>
  </body>
</html>