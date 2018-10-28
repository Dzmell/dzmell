<?php

$headers="";
$headers.="MIME-Version: 1.0\r\n";
$headers.="Content-type: text/plain; charset=\"utf-8\r\n";
$headers.="From: ellena@ellena.zzz.com.ua\r\n";

$recipient = "dzmell87@gmail.com";
$sitename = "Tayan";

$email = trim($_POST["mail"]);

$message = "New-subscriber: \nEmail: $email ";
$message2 = "Thank you for subscribe. Have a good day!";


$result=mail($recipient, $sitename, $message, $headers);

$client=mail($email, $sitename, $message2, $headers);

?>