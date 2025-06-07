<?php

$name = $_POST["name"];
$email = $_POST["email"]


require "vendor/autoload.php"

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);
$mail -> isSMTP();
$mail -> SMTPAuth = true;

$mail -> Host = "smtp.gmail.com"
$mail -> SMTPSecure = PHPMailer :: ENCRYPTION_STARTTLS;
$mail -> Port = 587;

$mail -> Username = "";
$mail -> Password = "";

$mail -> setFrom($email, $name)

// Gmail SMTP server address: smtp.gmail.com
// Gmail SMTP name: Your full name
// Gmail SMTP username : your full Gmail Address e.g. you@gmail.com
// Gmail SMTP password: The password that you use to log into the gmail
// Gmail SMTP port (TLS): 587
// Gmail SMTP port (SSL): 465

?>