<?php
$server = "localhost";
$username = "root";
$password = "";

$con = mysqli_connect($server, $username, $password);
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}
$uname = $_POST['uname'];
$email = $_POST['email'];
$password = $_POST['password'];
$cpassword = $_POST['cpassword'];

$sql = "INSERT INTO `soil`.`soil` ( `uname`, `email`, `password`, `cpassword`) VALUES ('$uname', '$email', '$password', '$cpassword');";
// echo $sql;

if ($con->query($sql) == true) {
    echo "Sucess";
} else {
    echo "Coonection filed: $sql<br>$con->error";
}

$con->close();
