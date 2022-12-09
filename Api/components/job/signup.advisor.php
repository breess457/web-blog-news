<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");	
header("Cache-Control: post-check=0, pre-check=0", false);	
header("Pragma: no-cache");
require_once('../../include/config.php');

$json_data = array();
 if($_SERVER['REQUEST_METHOD'] == "GET"){
    echo json_encode($json_data);
 }elseif($_SERVER['REQUEST_METHOD'] == "OPTIONS"){
     echo json_encode($json_data);
 }elseif($_SERVER['REQUEST_METHOD'] == "POST"){
    $json = file_get_contents('php://input');
    $postData = json_decode($json,TRUE);

    $fname = $postData['fnames'];
    $lname = $postData['lnames'];
    $fullname = join(array($fname," ",$lname));
    $emails = $postData['emails'];
    $passwd = $postData['passwds'];
    $sex = $postData['sexs'];
    $status = 2;
   

    $chk_username = mysqli_query($db,"SELECT * FROM logkey_doctor WHERE user_name='$emails'")or die(mysqli_error());
     $num_chk = mysqli_num_rows($chk_username);
        if($num_chk > 0)
        {
            $msgArray = array(
                'status'=>403,
                'msg' =>'Email นี้มีการใช้งานอยู่แล้ว โปรดใช้ Email อื่น'
            );
            echo json_encode($msgArray);
        }else{

            $Insert = mysqli_query($db,"INSERT INTO logkey_doctor(user_name,passkey,fullname,status,sex)
                VALUES('$emails','$passwd','$fullname','$status','$sex')");
            if($Insert)
            {
                $insID = mysqli_insert_id($db);
                    mysqli_query($db,"INSERT INTO profile_doctor(id_logkey)VALUES('$insID')")or die(mysqli_error());
                $msgArray = array(
                    'status'=>200,
                    'msg'=>'สมัคใช้งานเรียบร้อยแล้ว กรุณาLogin...'
                );
                echo json_encode($msgArray);
            }else{
                $msgArray = array(
                    'status'=>500,
                    'msg'=>'เกิดข้อผิดพลาด สมัคใช้งานไม่ได้...'
                );
                echo json_encode($msgArray);
            }
             
        }
 }

?>