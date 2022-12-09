<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");	
header("Cache-Control: post-check=0, pre-check=0", false);	
header("Pragma: no-cache");
 require_once('../../include/config.php');

    if($_SERVER['REQUEST_METHOD'] == "GET"){
        $setDataArticle = mysqli_query($db,"SELECT * FROM health_articles")or die(mysqli_error());
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