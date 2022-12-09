<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");	
header("Cache-Control: post-check=0, pre-check=0", false);	
header("Pragma: no-cache");
require_once('../../include/config.php');

 $jsonData = array();
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    echo json_encode($jsonData);
  }elseif($_SERVER['REQUEST_METHOD'] == "OPTIONS"){
    echo json_encode($jsonData);
  }elseif($_SERVER['REQUEST_METHOD'] == "POST"){
    $json = file_get_contents('php://input');
    $postData = json_decode($json,TRUE);

    $fname = $postData['fname'];
    $lname = $postData['lname'];
    $fullname = join(array($fname," ",$lname));
    $img = "no";
    $email = $postData['email'];
    $passwd = $postData['passwd'];
    $sex = $postData['sex'];
    $status = 1;

    $chk_email = mysqli_query($db,"SELECT * FROM logkey_user WHERE user_name='$email'") or die(mysqli_error());
    $num_chk = mysqli_num_rows($chk_email);
      if($num_chk > 0)
      {
        $msgResponse = array(
          'status' =>403,
          'msg' =>'Email นี้มีการใช้งานอยู่แล้ว โปรดใช้ Email อื่น'
        );
        echo json_encode($msgResponse);
      }
      else{
        $insert = mysqli_query($db,"INSERT INTO logkey_user(user_name,passkey,img_profile,fullname,status,sex)
          VALUES('$email','$passwd','$img','$fullname','$status','$sex')");
          if($insert){
            $msgResponse = array(
              'status'=>200,
              'msg'=>'สมัคใช้งานเรียบร้อยแล้ว กรุณาLogin...'
            );
            echo json_encode($msgResponse);
          }else{
            $msgResponse = array(
              'status'=>500,
              'msg'=>'เกิดข้อผิดพลาด สมัคใช้งานไม่ได้...'
            );
            echo json_encode($msgResponse);
          }
      }
      //print json_encode($msgResponse); 

     //$msgResponse = array('fname'=>$fname,'lname'=>$lname,'email'=>$email,'passwd'=>$passwd,'sex'=>$sex,'status'=>$status);
     // print json_encode(array('date'=>$date));

  }

?>