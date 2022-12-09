<?php
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");	
 header("Cache-Control: post-check=0, pre-check=0", false);	
  header("Pragma: no-cache");
// Set Defult Date
    date_default_timezone_set("Asia/Bangkok");
     $currentDay = date("Y-m-d");
      $currentTime = date("H:i:s");
//End
require_once('../../include/config.php'); // inc-> File Set Database Connect

 if($_SERVER['REQUEST_METHOD'] === "POST"){

   // set path image to name on database 
     $ext = pathinfo(basename($_FILES["ImageArticle"]["name"]), PATHINFO_EXTENSION);
      if($ext !=""){
          $new_img_name = "img_".uniqid().".".$ext;
          $path = "../../environment/image-article/";
          $uploadPath = $path.$new_img_name;
          move_uploaded_file($_FILES["ImageArticle"]["tmp_name"],$uploadPath);
          $newImage = $new_img_name;
      }else{
          $newImage = "";
      }  //end set image 
      $subJect = $_POST["Subject"];
      $doctorID = (int)$_POST["DoctorId"];
      $typeContent = $_POST["typeContent"];
      $contentArticle = $_POST["contentArticle"];
      
      $insertArticle = "INSERT INTO health_articles SET text_subject='$subJect',text_contents='$contentArticle',content_type='$typeContent',dete_time='$currentDay',image_article='$newImage',id_member_doctor='$doctorID'";
      $QuerySet = mysqli_query($db,$insertArticle)or die(mysqli_error());
      if($QuerySet){
          $msgSuccess = array(
              'status'=>200,
              'icons'=>'success',
              'title'=>'Insert Success',
              'msg'=>'เพิ่มช้อมูลบทความ เรียบร้อย',
              'method'=>$_SERVER['REQUEST_METHOD'],
          );
          print json_encode($msgSuccess);
      }else{
          $msgErr = array(
              'status'=>404,
              'icons'=>'error',
              'title'=>'Insert False',
              'msg'=>'ล้มเหลว ไม่สามารถเพิ่มบทความได้ โปรดแจ้งเจ้าหน้าที่',
              'method'=>$_SERVER['REQUEST_METHOD']
          );
          print json_encode($msgErr);
      }

 }else if($_SERVER['REQUEST_METHOD'] === "PUT"){
     print json_encode(array(
        'title'=>$_POST['Subject'],
        'content'=>$_POST['contentArticle'],
        'id'=>$_POST['DoctorId'],
        'img'=>$_FILES["ImageArticle"]["name"]
        )
    );
 }else if($_SERVER['REQUEST_METHOD'] === "GET"){
     $idMembers = $_GET['member_id'];
      $selectArticle = "SELECT * FROM health_articles WHERE id_member_doctor='$idMembers'";
       $getQuery = mysqli_query($db,$selectArticle)or die(mysqli_error());
        $setNum = mysqli_num_rows($getQuery);
         if($setNum > 0){
            $dataArr = array();
              foreach($getQuery as $responseData){
                $dataArr[] = $responseData;
              }
            print json_encode($dataArr);
             mysqli_close($db);
         }else{
             print json_encode(null);
         }
 }else{
     print json_encode(array(
         'icons'=> 'error',
         'title'=>'Unsuccessful',
         'msg'=>'not any request method'
     ));
 }

?>
