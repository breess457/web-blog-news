<?php
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");	
header("Cache-Control: post-check=0, pre-check=0", false);	
header("Pragma: no-cache");
require_once('../../include/config.php');

 $json_data = array();
 if($_SERVER['REQUEST_METHOD'] == "POST"){
    $json = file_get_contents('php://input');
    $postData = json_decode($json,TRUE);

    $email = $postData['Iemail'];
    $password = $postData['Ipassword'];

    $UserSQL = "SELECT * FROM logkey_user WHERE user_name='$email' && passkey='$password'";
    $UserQuery = mysqli_query($db,$UserSQL)or die(mysqli_error());
    $FetchUserSQL = mysqli_fetch_array($UserQuery);
     if(!$FetchUserSQL){
         $AdvisorSQL = "SELECT * FROM logkey_doctor WHERE user_name='$email' && passkey='$password'";
         $AdvisorQuery = mysqli_query($db,$AdvisorSQL)or die(mysqli_error());
         $FetchAdvisorSQL = mysqli_fetch_array($AdvisorQuery);
          if(!$FetchAdvisorSQL){
              $msgLogin = array(
                  'status'=>401,
                  'msg'=>"ชื่อผู้ใช้งาน หรือ รหัสผ่าน ไม่ถูกต้อง"
              );
              echo json_encode($msgLogin);
          }else{
              $msgLogin = array(
                  'session'=>$FetchAdvisorSQL['doctor_id'],
                  'sessionfullname'=>$FetchAdvisorSQL['fullname'],
                  'status' =>200,
                  'msg'=>'ยินดีต่อนรับ คุนคือทีมที่ปรึกษา...'
                  
              );
              echo json_encode($msgLogin);
          }
     }else{
        $msgLogin = array(
            'session'=>$FetchUserSQL['user_id'],
            'sessionfullname'=> $FetchUserSQL['fullname'],
            'status'=>201,
            'msg'=>'ยินดีต่อนรับ คุนคือผู้ใช้งานทั่วไป...'
        );
        echo json_encode($msgLogin);
     }
 }else{
     echo json_encode($json_data);
 }
?>