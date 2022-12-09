<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");	
header("Cache-Control: post-check=0, pre-check=0", false);	
header("Pragma: no-cache");
 require_once('../../include/config.php');

    if($_SERVER['REQUEST_METHOD'] == "GET"){
        $setDataAdvisor = mysqli_query($db,"SELECT * FROM profile_doctor AS P LEFT JOIN logkey_doctor AS L ON L.doctor_id = P.id_logkey")or die(mysqli_error());
         $setNums = mysqli_num_rows($setDataAdvisor);
          if($setNums){
              $dataArr = array();
               foreach($setDataAdvisor as $responseData){
                   $dataArr[] = $responseData;
               }
              echo json_encode($dataArr);
          }else{
              echo json_encode(null);
          }
    }

?>