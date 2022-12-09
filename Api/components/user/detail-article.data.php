<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");	
header("Cache-Control: post-check=0, pre-check=0", false);	
header("Pragma: no-cache");
 require_once('../../include/config.php');

 if($_SERVER['REQUEST_METHOD'] == "GET"){
      $idArticle = $_GET['IdArticle'];
        $setSQL = "SELECT * FROM health_articles
        INNER JOIN logkey_doctor ON logkey_doctor.doctor_id = health_articles.id_member_doctor 
        INNER JOIN profile_doctor ON profile_doctor.id_logkey = health_articles.id_member_doctor
        WHERE health_articles.articles_id='$idArticle'";
        $setQuery = mysqli_query($db,$setSQL)or die(mysqli_error());
        $setRow = mysqli_num_rows($setQuery);
         if($setRow > 0){
            $resArr = array();
             foreach($setQuery as $result_data){
                 $resArr[] = $result_data;
             }
            echo json_encode($resArr);
         }else{
             echo json_encode(null);
         }
 }else{
     echo json_encode(null);
 }

?>