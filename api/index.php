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
  if($_POST['date']!== '' && $_POST['case']>=0 && $_POST['death']>=0 && $_POST['cured']>=0 && $_POST['provinces']!== '')
  {
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
}elseif ($_GET['q']==='loaddata') {
  $query="SELECT * FROM `CoronaInfo`";
  $data=array();
  if($result=mysqli_query($link,$query)){
 	  if(mysqli_num_rows($result)>0)
 	  {
      while($row=mysqli_fetch_assoc($result))
 		  {
 			  $data[]=array("date"=>$row['date'],"case"=>$row['case'],"death"=>$row['death'],"cured"=>$row['cured'],"provinces"=>$row['provinces']);
 		  }
 	  }
 	  else
 	  {
 		  echo "no records are matching";
     }
  }
 else
 {
 	die("could not able to execue the command ".mysqli_error($link));
 }


echo json_encode($data);
mysqli_close($link);
//   echo '{
//     "message": "Data loaded Successfully",
//     "success": true
// }';
}
else{
    echo '{
      "message": "Data add Failed due to invalid q",
      "success": false
  }';
  }
?>
