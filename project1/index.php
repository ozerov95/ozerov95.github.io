<?php 

$data1=$_POST['data1'];
$data2=$_POST['data2'];
$data3=$_POST['data3'];

$data4=$_POST['data4'];
$data41=$_POST['data41'];
$data42=$_POST['data42'];

$data5=$_POST['data4'];
$data51=$_POST['data51'];
$data52=$_POST['data52'];


$data6=$_POST['data4'];
$data61=$_POST['data61'];
$data62=$_POST['data62'];


$data7=$_POST['data7'];
$data8=$_POST['data8'];
$data9=$_POST['data9'];
$data10=$_POST['data10'];



$message="1 вопрос</br>
          $data1</br>
          2 вопрос</br>
          $data2</br>
          3вопрос</br>
          $data3</br>
          4 вопрос</br>
          $data4 :$data41:$data42 </br>
          5 вопрос</br>
          $data5 :$data51:$data52 </br>
          6вопрос</br>
          $data6 :$data61:$data62 </br>
          7 вопрос</br>
          $data7</br>
          8 вопрос</br>
          $data8 </br>
          9 вопрос</br>
          $data9 </br>
          Телефон</br>
          $data10 </br>";

mail("Andrej.Shadrin.87@mail.ru","Тест",$message);

?>