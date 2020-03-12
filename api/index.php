<?php
$user="root";
$pass="payam123";
$db='corona';
$host='localhost';
$link=mysqli_connect($host,$user,$pass );;
mysqli_select_db($link,$db);
mysqli_error($link);

if($_GET['q']==='add'){
  $_POST = json_decode(file_get_contents('php://input'), true);
  if($_POST['date']!== '' && $_POST['case']>=0 && $_POST['death']>=0 && $_POST['cured']>=0 && $_POST['provinced']!== ''){
    mysqli_query($link,"INSERT INTO `CoronaInfo` ( `date`, `case`, `death`, `cured`, `provinces`) VALUES ( '$_POST[date]', '$_POST[newcase]', '$_POST[death]', '$_POST[cured]', '$_POST[provinces]');");
    // print_r($_POST);
    mysqli_error($link);
    echo '{
      "message": "Data Added Successfully",
      "success": true
  }';
  }else{
      echo '{
        "message": "Data add Failed due to invalid input",
        "success": false
    }';}
}
else{
    echo '{
      "message": "Data add Failed due to invalid q",
      "success": false
  }';
  }
?>
