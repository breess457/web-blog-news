const getsessionData = JSON.parse(sessionStorage.getItem("advisorSession"));
import {InputTextAll, SweetUpdateAlert as EventAlertAddArticle, sessionModify, GetEventArticles} from './main.js'
const CreateArticleForm = document.getElementById('CreateArticleForm')

// Form Api Add article All
CreateArticleForm.addEventListener('submit',(events)=>{
    events.preventDefault()
     const UpimgArticle = document.getElementById('defaultBtns')
     const FormsDataarticle = new FormData()
      FormsDataarticle.append('ImageArticle',UpimgArticle.files[0])
      FormsDataarticle.append('DoctorId', InputTextAll("doctorId"))
      FormsDataarticle.append('Subject', InputTextAll("subject"))
      FormsDataarticle.append('typeContent', InputTextAll("typeContent"))
      FormsDataarticle.append('contentArticle', InputTextAll("contentArticle"))
      console.log(typeof InputTextAll("contentArticle"));

//Error trap ->ดัก error
     try{ 
      fetch(`http://localhost/WebDoctor-True/Api/components/job/data.article.php`,{ //->fetch api to database file content.php
        method:"POST",
        body:FormsDataarticle
      })
       .then(requests => requests.json())
       .then(Datarequest => EventAlertAddArticle(Datarequest))
      .catch(console.error)
    }catch(err){
      console.log(err.message)
    }
})

const GetDataArticle = (memberId,domEventArticle)=>{
  //callbackDomarticle
  try{
    fetch(
      `http://localhost/WebDoctor-True/Api/components/job/data.article.php?member_id=${memberId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((dbrequest) => dbrequest.json())
      .then((requestsArticle) => {
        //console.log(requestsArticle)
        domEventArticle(requestsArticle);
      })
      .catch(console.error);
  }catch(err){
    console.log(`${err} Error Trap`)
  }
}
sessionModify(getsessionData,GetDataArticle,GetEventArticles)

const Elsession = (getSession) => {
  let dataList = ""
  let Getid = ""
  let x
    for (x = 0; x < getSession.length; x++) {
      dataList += getSession[x].sessionFullname
      Getid += getSession[x].sessionID
    }
   document.getElementById('doctorId').value = `${Getid}`
   console.log(`dass : ${Getid}`)
  
};
Elsession(getsessionData)

const myFunctionSearchData = () => {
  let input, filter, divData, classDataList, resData, keys, keyValue;
  input = document.getElementById("searchKeyData");
  filter = input.value.toUpperCase();
  divData = document.getElementById("GetArticle");
  classDataList = divData.getElementsByClassName("classDataList");
  for (keys = 0; keys < classDataList.length; keys++) {
    resData = classDataList[keys].querySelector(".set-data");
    if (resData) {
      keyValue = resData.textContent || resData.innerText;
      if (keyValue.toUpperCase().indexOf(filter) > -1) {
        classDataList[keys].style.display = "";
      } else {
        classDataList[keys].style.display = "none";
      }
    }
  }
};

document.getElementById("searchKeyData").onkeyup = myFunctionSearchData;
