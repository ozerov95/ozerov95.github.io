<?php 

$email=$_POST['email'];
$tx=$_POST['tx'];

$message= "Email: ".$email.": Сообщение: ".$tx;
mail("Andrej.Shadrin.87@mail.ru","Обратный звонок",$message);
?>