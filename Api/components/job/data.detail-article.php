<?php
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");	
 header("Cache-Control: post-check=0, pre-check=0", false);	
  header("Pragma: no-cache");
  require_once('../../include/config.php');
   function setPathImg($filename){
      $ext = pathinfo(basename($_FILES[$filename]["name"]), PATHINFO_EXTENSION);
        if($ext !=""){
            $new_img_name = "img_".uniqid().".".$ext;
            $path = "../../environment/image-article/";
            $uploadPath = $path.$new_img_name;
            move_uploaded_file($_FILES[$filename]["tmp_name"],$uploadPath);
            $newImage = $new_img_name;
        }else{
            $newImage = "";
        }
      return $newImage; 
   }

  if($_SERVER['REQUEST_METHOD']=="GET"){
      $idArticle = $_GET['idArticle'];
       $setArticle = "SELECT * FROM health_articles WHERE articles_id='$idArticle'";
        $setQuery = mysqli_query($db,$setArticle)or die(mysqli_error());
        $setNum = mysqli_num_rows($setQuery);
         if($setNum > 0){
             $setDataArr = array();
             foreach($setQuery as $setresData){
                 $setDataArr = $setresData;
             }
             echo json_encode($setDataArr);
             mysqli_close($db);
         }else{
             echo json_encode(null);
         }
  }else if($_SERVER['REQUEST_METHOD'] == "DELETE"){
      $idTrash = $_GET['idTrash'];
      $reqArticleImg = $_GET['reqArticleImg'];
       $setTrashArticle = "DELETE FROM health_articles WHERE articles_id='$idTrash'";
        $QueryTrash = mysqli_query($db,$setTrashArticle)or die(mysqli_error());
        if($QueryTrash){
           $unFileTrash = "../../environment/image-article/".$reqArticleImg;
            unlink($unFileTrash);
            $msgSuccess = array(
                'icons'=>"success",
                'status'=>200,
                'title'=>"Delete เรียบร้อย",
                'msg'=>"ลบข้อมูล บทความเรียบร้อย",
                'path'=>"../article/"
            );
            print json_encode($msgSuccess);
        }else{
            $msgFalse = array(
                'status'=>404,
                'icons'=>'error',
                'title'=>"Delete ล้มเหลว",
                'msg'=>"ล้มเหลว ไม่สามารถลบข้อมูลดังกล่าวได้ โปรดแจ้งเจ้าหน้าที่"
            );
            print json_encode($msgFalse);
        }
  }else if($_SERVER["REQUEST_METHOD"] == "POST"){

    function editDataArticle($dbconfig,$object_file_name){
        $editId = $_POST["editId"];
        $editSubject = $_POST["editSubject"];
        $editContent = $_POST["editContent"];
        $editType = $_POST["editType"];
        $editImgValue = $_POST["editImgValue"];
        if(!$object_file_name){
            $edit_sql = "UPDATE health_articles SET text_subject='$editSubject',text_contents='$editContent',
                content_type='$editType' WHERE articles_id='$editId'";
        }else{
            $edit_sql = "UPDATE health_articles SET text_subject='$editSubject',text_contents='$editContent',
                content_type='$editType',image_article='".setPathImg("editNewImgArticle")."' WHERE articles_id='$editId'";
            $un_photo_article = "../../environment/image-article/".$editImgValue;
             unlink($un_photo_article);
        }
            $editQuery = mysqli_query($dbconfig,$edit_sql)or die(mysqli_error());
             if($editQuery){
                
                if(!$object_file_name){
                  $set_msg_true1 = array(
                    'icons'=>"success",
                    'title'=> "update เรียบร้อย!",
                    'msg'=> "แก้ไขข้อมูล บทความนี้เรียบร้อย",
                    'set'=>'1',
                    'path'=>"../detail-article/index.html?contentID=".$_POST["editId"]."&&reqImg=".$_POST["editImgValue"]." "
                  );
                  print json_encode($set_msg_true1);
                }else{
                  $set_msg_true2 = array(
                    'status'=>200,
                    'icons'=>"success",
                    'title'=> "update เรียบร้อย..",
                    'msg'=> "แก้ไขข้อมูล บทความนี้เรียบร้อย",
                    'set'=>'2',
                    'path'=>"../detail-article/index.html?contentID=".$_POST["editId"]."&&reqImg=".setPathImg("editNewImgArticle")." "
                  );
                  print json_encode($set_msg_true2);
                }
                
             }else{
                 $set_msg_false = array(
                     'status'=>404,
                     'icons'=>"error",
                     'title'=>"update ล้มเหลว",
                     'msg'=>"เกิดข้อผิดพลาด ไม่สามารถแก้ไขข้อมูลดังกล่าวได้ โปรดแจ้งเจ้าหน้าที่"
                 );
                 print json_encode($set_msg_false);
             }
    }
   editDataArticle($db,isset($_FILES["editNewImgArticle"]["tmp_name"]));

  }
?>