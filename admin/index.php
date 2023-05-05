<?php 
  session_start();
  if(isset($_SESSION['id_admin'])) {
    header("Location: dashboard.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Placement Login</title>

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
            <li style="padding-right: 25px;"><a href="user/dashboard.php" style="font-size: 24px; color: #053a5a; line-height: 42px;">Dashboard</a></li>
            <li style="padding-right: 25px;"><a href="logout.php" style="font-size: 24px; color: #053a5a; line-height: 42px;">Logout</a></li>
            <?php 
            } else if(isset($_SESSION['id_user']) && isset($_SESSION['companyLogged'])){
            ?>
            <li style="padding-right: 25px;"><a href="company/dashboard.php" style="font-size: 24px; color: #053a5a; line-height: 42px;">Dashboard</a></li>
            <li style="padding-right: 25px;"><a href="logout.php" style="font-size: 24px; color: #053a5a; line-height: 42px;">Logout</a></li>
            <?php } else { 
            ?>
            <li style="padding-right: 25px;"><a href="../search.php" style="font-size: 24px; color: #053a5a; line-height: 42px;">Search for Jobs</a></li>
            <li style="padding-right: 25px;"><a href="../mainregister.php" style="font-size: 24px; color: #053a5a; line-height: 42px;">Register</a></li>
            <li style="padding-right: -25px;"><a href="../mainlogin.php" style="font-size: 24px; color: #053a5a; line-height: 42px;">Login</a></li>
          <?php } ?>
          </ul>
        </div>
        
      </div>
    </nav>
  </header>
  </div>
  </div>
  </section>

      <div style="background-color: #053a5a; height: 65px;">
    <p style="font-size: 34px; color: white; text-align: center; line-height: 65px;">Placement Login</p>
  </div>
  <br>

    <section>
      <div class="container">
        <div class="row" align="center">

            <form method="post" action="checklogin.php">
            <table>
              <tr>
                <td style="font-size: 22px;">Username&nbsp;&nbsp;&nbsp;</td>
                <td style="font-size: 22px;">:&nbsp;&nbsp;&nbsp;</td>
                <td><input type="text" id="username" name="username" placeholder="Username" required="" style="font-size: 20px; padding-left: 10px; padding-right: 10px; padding-top: 5px; padding-bottom: 5px; border-radius: 5px; border:1px solid black;"></td>
              </tr>
              <tr>
                <td colspan="3"><br></td>
              </tr>
              <tr>
                <td style="font-size: 22px;">Password</td>
                <td style="font-size: 22px;">:</td>
                <td><input type="password" id="password" name="password" placeholder="Password" required="" style="font-size: 20px; padding-left: 10px; padding-right: 10px; padding-top: 5px; padding-bottom: 5px; border-radius: 5px; border:1px solid black;"></td>
              </tr>
              <tr>
                <td colspan="3"><br></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td><button type="submit" style="font-size: 18px; color: white; background-color: #053a5a; border-color: transparent; border-radius: 5px; width: 70%; height: 45px;">Submit</button></td>
              </tr>

            </table> 

              <br>
              <?php
              if(isset($_SESSION['loginError'])){                
                ?>
              <div>
                <p style="text-align: center; color: red; font-size: 28px;">Invalid Username or Password</p>
              </div>
              <?php
              unset($_SESSION['loginError']);}
              ?>
            </form>

          </div>
        </div>
      </div>
    </section>

    <Br><br>
    <br><br><br><br>

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
							<a href="#">Placement Login</a>
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

    <!-- Navigation Bar End -->

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  
    <script type="text/javascript">
      $(function(){
        $("#successMessage:visible").fadeOut(5000);
      });
    </script>
  </font>
  </body>
</html>