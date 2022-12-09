const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const getIdArticle = urlParams.get("contentID");
const reqImgArticle = urlParams.get("reqImg");
import {examplesContentBlock} from './main.js'

const FetchDetaitArticleData = (methodArticleId,elementDomDetail)=>{
    try{
        fetch(
          `http://localhost/WebDoctor-True/Api/components/user/detail-article.data.php?IdArticle=${methodArticleId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            }
          }
        )
         .then(res => res.json())
         .then(jsonData => elementDomDetail(jsonData))
         .catch(errored => console.log(errored))
    }catch(ebug){
        console.log(`ติด bug try ${ebug}`)
    }
}
FetchDetaitArticleData(getIdArticle,examplesContentBlock)