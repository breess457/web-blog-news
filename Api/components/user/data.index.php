<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");	
header("Cache-Control: post-check=0, pre-check=0", false);	
header("Pragma: no-cache");
 require_once('../../include/config.php');
    if(isset($_GET["path"]) == "article"){

       $result = mysqli_query($db,"SELECT * FROM health_articles AS A LEFT JOIN logkey_doctor AS L ON L.doctor_id=A.id_member_doctor LIMIT 4");
        $num = mysqli_num_rows($result);
          if($num > 0){
              $data = array();

              while($row = mysqli_fetch_assoc($result)){
                  $data[] = $row;
              }
              echo json_encode($data);
          }else{
              echo json_encode(null);
          }

    }else if($_SERVER['REQUEST_METHOD'] == "GET"){

        $setDataArticle = mysqli_query($db,"SELECT * FROM profile_doctor AS P LEFT JOIN logkey_doctor AS L ON L.doctor_id = P.id_logkey LIMIT 4")or die(mysqli_error());
         $setNums = mysqli_num_rows($setDataArticle);
          if($setNums){
              $dataArr = array();
               foreach($setDataArticle as $responseData){
                   $dataArr[] = $responseData;
               }
              echo json_encode($dataArr);
          }else{
              echo json_encode(null);
          }
    }

?>