<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");	
header("Cache-Control: post-check=0, pre-check=0", false);	
header("Pragma: no-cache");
 require_once('../../include/config.php');
    function setImgpath($imageName){
      $ext = pathinfo(basename($_FILES[$imageName]["name"]), PATHINFO_EXTENSION);
        if($ext !=""){
            $new_img_name = "img_".uniqid().".".$ext;
            $path = "../../environment/image-user/";
            $uploadPath = $path.$new_img_name;
            move_uploaded_file($_FILES[$imageName]["tmp_name"],$uploadPath);
            $newImage = $new_img_name;
        }else{
            $newImage = "";
        }
        return $newImage; 
    }

  if($_SERVER['REQUEST_METHOD'] == "GET"){
      $user_id = $_GET['user_id'];
      $setSQL = "SELECT * FROM logkey_user WHERE user_id='$user_id'";
      $setQuery = mysqli_query($db,$setSQL)or die(mysqli_error());
      $setNum = mysqli_num_rows($setQuery);
      $resData_array = array();
       if($setNum > 0){
           foreach($setQuery as $getDataByProfile){
              $resData_array[] = $getDataByProfile;
           }
           echo json_encode($resData_array);
       }else{
           echo json_encode($resData_array);
       }
  }else if($_SERVER['REQUEST_METHOD'] == "POST"){
      $set_id = $_REQUEST['setId'];
      $setFullname = $_REQUEST['setFullname'];
      $setEmail = $_REQUEST['setEmail'];
      $setPassword = $_REQUEST['setPassword'];
      $setSex = $_REQUEST['setSex'];
      $setAge = $_REQUEST['setAge'];
      $setLocation = $_REQUEST['setLocation'];
      $imageName = $_REQUEST['imageName'];

      $check_data = "SELECT user_id,user_name FROM logkey_user WHERE user_id!='$set_id' && user_name='$setEmail'";
       $set_Query = mysqli_query($db,$check_data)or die(mysqli_error());
       $set_num = mysqli_num_rows($set_Query);
        if($set_num > 0){
            $msgResponseUpdate = array(
                'status'=>403,
                'icons'=>'warning',
                'title'=>'Warning Alert',
                'msg'=>'Email ซํ้ากัน โปรดใช้ Email อื่น'
            );
            print json_encode($msgResponseUpdate);
        }else{
            if(isset($_FILES["setImage"]) == ""){
                $main_update = "UPDATE logkey_user SET user_name='$setEmail',passkey='$setPassword',fullname='$setFullname',sex='$setSex',age='$setAge',location='$setLocation'
                WHERE user_id='$set_id'";
            }else{
                $main_update = "UPDATE logkey_user SET user_name='$setEmail',passkey='$setPassword',fullname='$setFullname',sex='$setSex',
                img_profile='".setImgpath("setImage")."',age='$setAge',location='$setLocation'
                WHERE user_id='$set_id'";
                
                if($imageName !='no'){
                    $unImg = "../../environment/image-user/".$imageName;
                    unlink($unImg);
                }
            }
            $query_update = mysqli_query($db,$main_update)or die(mysqli_error());
             if($query_update){
                  $msgSuccess = array(
                       'status'=> 200,
                       'msg'=> 'Update ข้อมูลเรียบร้อยแล้ว',
                       'icons'=>'success',
                       'title'=>'Update Success Fully'
                   );
                   print json_encode($msgSuccess);
             }else{
                 $msgErr = array(
                      'status'=> 404,
                      'iconst'=>'error',
                      'title'=> 'Update Error Is not Update Fully',
                      'msg'=> 'เกิดข้อผิดพลาด ทางระบบ ไม่สามารถ update ข้อมูลได้'
                  );
                  print json_encode($msgErr);
             }
        }
  }

?>