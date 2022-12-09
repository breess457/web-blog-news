import {CardDetailArticle,SweetAlertTrash,editDataArticles,InputTextAll} from './main.js'
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const getIdArticle = urlParams.get("contentID");
const reqImgArticle = urlParams.get("reqImg");
const btnIdTrash = document.getElementById("btnTrash");
const setUpdateArticleForm = document.getElementById("setUpdateArticleForm");


const FetchDataDetailContents = (getMethod, domElementDetailContent) => {
  try {
    fetch(
      `http://localhost/WebDoctor-True/Api/components/job/data.detail-article.php?idArticle=${getMethod}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((responses) => responses.json())
      .then((responseData) => {
        //console.log(responseData)
        domElementDetailContent(responseData);
      })
      .catch((err) => console.log(err));
  } catch (errs) {
    console.log(errs.message);
  }
};
/* Funtion Get DataArticle */
FetchDataDetailContents(getIdArticle, CardDetailArticle);
/* Function Update DataArticle */
FetchDataDetailContents(getIdArticle, editDataArticles);

/* function button dalete data article */
btnIdTrash.onclick = function (evt) {
  evt.preventDefault();
  try {
    fetch(
      `http://localhost/WebDoctor-True/Api/components/job/data.detail-article.php?idTrash=${getIdArticle}&reqArticleImg=${reqImgArticle}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((RequestJson) => RequestJson.json())
      .then((ResultDataTrue) => SweetAlertTrash(ResultDataTrue))
      .catch((E) => console.log(E));
  } catch (bug) {
    console.log(bug);
  }
};

setUpdateArticleForm.addEventListener('submit',(eventEdit)=>{
  eventEdit.preventDefault()
  const editImgNewsValue = document.getElementById("editImgNewsValue")
  const editFormData = new FormData()
   editFormData.append('editNewImgArticle',editImgNewsValue.files[0])
   editFormData.append("editSubject", InputTextAll("editArticleSubject"))
   editFormData.append("editContent", InputTextAll("editArticleContent"))
   editFormData.append("editType", InputTextAll("editArticleType"))
   editFormData.append("editImgValue", InputTextAll("editImageArticle"))
   editFormData.append("editId", InputTextAll("editArticleId"))
    //console.log(InputTextAll("editArticleId"));
  try{
    fetch(
      `http://localhost/WebDoctor-True/Api/components/job/data.detail-article.php`,{
        method:"POST",
        body:editFormData
      }
    ).then(responeArr => responeArr.json())
     .then(dataMessage => SweetAlertTrash(dataMessage))
     .catch(errmsg => console.log(errmsg))
  }catch(e){
    console.log('bug trap :' + e)
  }
})