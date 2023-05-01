<?php
session_start();
// Establish database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "e-learning";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $password = $_POST["password"];
  $confirm_password = $_POST["confirm-password"];

  // Check if passwords match
  if ($password != $confirm_password) {
    $error_msg = "Passwords do not match";
  } else {
    // Insert user data into database
    $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";

    if (mysqli_query($conn, $sql)) {
      // Redirect to login page
      header("Location: login.html");
      exit();
    } else {
      $error_msg = "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
  }
}

mysqli_close($conn);
?>