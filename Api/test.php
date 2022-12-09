<?php

include('include/config.php');
$doctorId=$_GET['av_id'];
 $setImgfalse = mysqli_query($db,"SELECT * FROM profile_doctor WHERE id_logkey='$doctorId' AND doctor_profile IS NOT NULL")or die(mysqli_error());
  $setNumImg = mysqli_num_rows($setImgfalse);
   if($setNumImg > 0){
       echo "xxx";
   }
?>