<?php

$con = mysqli_connect('127.0.0.1','root','');
if (!$con) {
	echo"not connected to server";
}
if(!mysqli_select_db($con,'ajaxdb')){
	echo"the database not selected";
}

$userid =$_POST['userid'];
$password = $_POST['password'];
$email = $_POST['email'];
$security1 = $_POST['security1'];
$security2 = $_POST['security2'];
$telnumber = $_POST['telnumber'];
$comment = $_POST['comment'];
if (isset($_POST['userid'])) {
	$sql = "INSERT INTO ajaxdb (userid,password,email,security1,security2,telnumber,comment) VALUES ('$userid','$password','$email','$security1','$security2','$telnumber','$comment')"; //Insert Query
	mysqli_query($con, $sql);
	echo "Form Submitted succesfully";
}


?> 

