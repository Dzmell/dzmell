<?php

$headers="";
$headers.="MIME-Version: 1.0\r\n";
$headers.="Content-type: text/plain; charset=\"utf-8\r\n";
$headers.="From: ellena@ellena.zzz.com.ua\r\n";

$recipient = "dzmell87@gmail.com";
$sitename = "Tayan";

$msg = trim($_POST["text-cv"]);

$result=mail($recipient, $sitename, $msg, $headers);

?>