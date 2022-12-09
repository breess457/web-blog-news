<?php
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");	
header("Cache-Control: post-check=0, pre-check=0", false);	
header("Pragma: no-cache");
include('../../include/config.php');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
     $getID = $_GET['av_id'];
      $result = "SELECT * FROM logkey_doctor D LEFT JOIN profile_doctor P ON P.id_logkey = D.doctor_id WHERE D.doctor_id='$getID'";
      $avQuery = mysqli_query($db,$result)or die(mysqli_error());
    
       $av_num = mysqli_num_rows($avQuery);
      if($av_num > 0){
          $av_data = array();
          foreach($avQuery as $av_result){
              $av_data = $av_result;
          }
          echo json_encode($av_data);
          mysqli_close($db);
      }else{
          echo json_encode(null);
      }
  } else if($_SERVER['REQUEST_METHOD'] == "POST"){
      // set path image to name on database
    function setImgpath($imageName){
      $ext = pathinfo(basename($_FILES[$imageName]["name"]), PATHINFO_EXTENSION);
        if($ext !=""){
            $new_img_name = "img_".uniqid().".".$ext;
            $path = "../../environment/image-job/";
            $uploadPath = $path.$new_img_name;
            move_uploaded_file($_FILES[$imageName]["tmp_name"],$uploadPath);
            $newImage = $new_img_name;
        }else{
            $newImage = "";
        }
        return $newImage; 
    }
 //end set image 

     $Fullname = $_POST['Fullname'];
     $Email = $_POST['Email'];
     $sex = $_POST['Sex'];
     $Age = $_POST['Age'];
     $Address = $_POST['Address'];
     $position = $_POST['Position'];
     $Workplace = $_POST['Workpalce'];
     $doctorId = $_POST['Id'];
     $getImgname = $_POST['getImgname'];

      $Check = "SELECT * FROM logkey_doctor WHERE doctor_id!='$doctorId' && user_name='$Email'";
      $QeuryCheck = mysqli_query($db,$Check)or die(mysqli_error());
      $RowCheck = mysqli_num_rows($QeuryCheck);
        if($RowCheck > 0){
            $msgResponseUpdate = array(
                'status'=>403,
                'icons'=>'warning',
                'title'=>'Warning Alert',
                'msg'=>'Email ซํ้ากัน โปรดใช้ Email อื่น'
            );
            print json_encode($msgResponseUpdate);
        }else{
             if(isset($_FILES["Image"]["tmp_name"]) == ""){
               /* is not Change image The episode update */
                $CodeUpdateL = "UPDATE logkey_doctor
                  SET user_name='$Email',fullname='$Fullname',sex='$sex'
                WHERE doctor_id='$doctorId'";

                $CodeUpdateP = "UPDATE profile_doctor 
                  SET age='$Age',position='$position',address='$Address',work_place='$Workplace'
                WHERE id_logkey='$doctorId'";
             }else{
                $CodeUpdateL = "UPDATE logkey_doctor
                  SET user_name='$Email',fullname='$Fullname',sex='$sex'
                WHERE doctor_id='$doctorId'";
                $CodeUpdateP = "UPDATE profile_doctor 
                  SET age='$Age',position='$position',address='$Address',doctor_profile='".setImgpath("Image")."',work_place='$Workplace'
                WHERE id_logkey='$doctorId'";
                /* check image is not null and delete image Contained in database */
                if($getImgname !=''){
                  $unFileProfile = "../../environment/image-job/".$getImgname;
                  unlink($unFileProfile);
                }
             }
            $QueryUpdateL = mysqli_query($db,$CodeUpdateL)or die(mysqli_error());
            $QueryUpdateP = mysqli_query($db,$CodeUpdateP)or die(mysqli_error());
              if($QueryUpdateL && $QueryUpdateP){
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