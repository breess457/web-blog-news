<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");	
header("Cache-Control: post-check=0, pre-check=0", false);	
header("Pragma: no-cache");
 require_once('../../include/config.php');

    if($_SERVER['REQUEST_METHOD'] == "GET" AND $_GET['path'] == "advisor"){
        $doctorId = $_GET['doctor_Id'];
        $setDataAdvisor = mysqli_query($db,"SELECT * FROM profile_doctor AS P 
            LEFT JOIN logkey_doctor AS L ON L.doctor_id = P.id_logkey WHERE P.id_logkey='$doctorId'")or die(mysqli_error());
        $set_row = mysqli_num_rows($setDataAdvisor);
          if($set_row == 1){
              $setArray = array();
              foreach($setDataAdvisor as $mysetdata){
                $setArray[] = $mysetdata;
              }
              echo json_encode($setArray);
          }else{
              echo json_encode($set_row);
          }
    }else if($_SERVER['REQUEST_METHOD'] == "GET" AND $_GET['path'] == "article"){
        $article_Id = $_GET['article_Id'];
        $setArticleData = "SELECT * FROM health_articles WHERE id_member_doctor='$article_Id'";
        $set_query = mysqli_query($db,$setArticleData)or die(mysqli_error());
        $set_num = mysqli_num_rows($set_query);
            if($set_num > 0){
                $dataArr = array();
                foreach($set_query as $responseData){
                    $dataArr[] = $responseData;
                }
                echo json_encode($dataArr);
            }else{
                echo json_encode(null);
            }
    } else{
        echo json_encode(null);
    }

?>