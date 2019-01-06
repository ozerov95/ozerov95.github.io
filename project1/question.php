<?php 

$email=$_POST['email'];
$text=$_POST['ta'];

$message = "Email: ".$email.": Сообщение: ".$text;

mail("Andrej.Shadrin.87@mail.ru","Вопросы",$message);


?>