<?php

$headers="";
$headers.="MIME-Version: 1.0\r\n";
$headers.="Content-type: text/plain; charset=\"utf-8\r\n";
$headers.="From: ellena@ellena.zzz.com.ua\r\n";

$recipient = "dzmell87@gmail.com";
$sitename = "Tayan";

$name = trim($_POST["name"]);
$mail = trim($_POST["mail"]);
$sbj = trim($_POST["subject"]);
$msg = trim($_POST["message"]);

$message = "New-subscriber: \nName: $name \nEmail: $mail \nSubject: $sbj \nMessage: $msg";
$message2 = "Hello, $name ! \nThank you for subscribe. Have a good day!";


$result=mail($recipient, $sitename, $message, $headers);

$client=mail($mail, $sitename, $message2, $headers);

?>