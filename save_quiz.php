<?php 


//echo "<pre>posted data";print_r($_POST);

//echo "<pre>posted data";print_r($_GET);exit;


//$con = mysqli_connect("localhost","your_localhost_database_user","your_localhost_database_password","your_localhost_database_db");


// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '','emotional_intelligence');

// get the post records
$userEmp_id = $_GET['userEmp_id'];
$userMail_id = $_GET['userMail_id'];
$selfAwareScore = $_GET['selfAwareScore'];
$manageEmoScore = $_GET['manageEmoScore'];
$motivateOneScore = $_GET['motivateOneScore'];
$empathyScore = $_GET['empathyScore'];
$socialSkillsScore = $_GET['socialSkillsScore'];
$dateTime=date('Y-m-d H:i:s');

// database insert SQL code
$sql = "INSERT INTO `user_score_details` (`employee_id`, `email_id`, `self_awareness_score`, `managing_emotions_score`,`motivating _oneself_score`,`empathy_score`,`social_skills_score`,`created_at`,`updated_at`) VALUES ('$userEmp_id', '$userMail_id', '$selfAwareScore' , '$manageEmoScore' , '$motivateOneScore', '$empathyScore', '$socialSkillsScore' ,'$dateTime','$dateTime')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	//echo "emotiona intelligence scores  Inserted";
	header('Location: score.html');
exit;
}




?>
