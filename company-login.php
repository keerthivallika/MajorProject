<?php 

  session_start();

  if(isset($_SESSION['id_user'])) {
    header("Location: user/dashboard.php");
    exit();
  }

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Company Login</title>

    <link rel="icon" href="img/favicon.png" type="image/x-icon"/>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">


  </head>
  <body>

  <font face="calibri">

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

  <div style="background-color: #053a5a; height: 65px;">
    <p style="font-size: 34px; color: white; text-align: center; line-height: 65px;">Company Login</p>
  </div>

  <br>
  <br>

  <section>
    <div class="container">
      <div class="row" align="center">
        <form method="post" action="checkcompanylogin.php">
          <div>

            <table style="border:none;">

              <tr>
                <td><label for="email" style="font-size: 22px; color: #053a5a;">Email Address&nbsp;&nbsp;&nbsp;&nbsp;</label></td>
                <td style="font-size: 22px; color: #053a5a;">:&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td><input style="font-size: 20px; padding:4px; padding-left: 10px; padding-right: 10px; border: 1px solid black; border-radius: 5px;" type="email" id="email" name="email" placeholder="Email" required=""></td>
              </tr>

              <tr>
                <td colspan="3">&nbsp;</td>
              </tr>

              <tr>
                <td><label for="password" style="font-size: 22px; color: #053a5a;">Password</label></td>
                <td style="font-size: 22px; color: #053a5a;">:</td>
                <td><input style="font-size: 20px; padding:4px; padding-left: 10px; padding-right: 10px; border: 1px solid black; border-radius: 5px;" type="password" id="password" name="password" placeholder="Password" required=""></td>
              </tr>

              <tr>
                <td colspan="3">&nbsp;</td>
              </tr>
              
              <tr>
                <td></td>
                <td></td>
                <td><button type="submit" style="font-size: 18px; background-color: #053a5a; color: white; width: 50%; height: 50px; border-color: transparent; border-radius: 5px;">Submit</button></td>
              </tr>
              

              <tr>
                <td colspan="3">&nbsp;</td>
              </tr>

              

              <tr>
                <td></td>
                <td></td>
                <td><a href="companyforgot-password.php" style="font-size: 15px; color: blue;">Forgot Password? Click Here...</a></td>
              </tr>

            </table>

            <br>

          </div>

          <?php
          if(isset($_SESSION['registerCompleted'])){                
          ?>
          <div>
          <p id="successMessage" style="text-align: center; color: green; font-size: 28px;">You have registered successfully!</p>
          </div>
          <?php
          unset($_SESSION['registerCompleted']);}
          ?>

          <?php
          if(isset($_SESSION['loginError'])){                
          ?>
          <div>
          <p style="text-align: center; color: red; font-size: 20px;">Invalid Email or Password!</p>
          </div>
          <?php
          unset($_SESSION['loginError']);}
          ?>

        </form>
      </div>
    </div>
  </section>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
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

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

  <script type="text/javascript">
    $(function(){
      $("#successMessage:visible").fadeOut(5000);
    });
  </script>

  </font>
  </body>
</html>