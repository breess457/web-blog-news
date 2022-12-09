
import {CardDetailAdvisor, GetEventArticles} from './main.js';
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
const getidadvisor = urlParams.get("id_advisor")

const FetchDetailAdvisor = (paramId,domelementcarddetail)=>{
    try{
        fetch(
          `http://localhost/WebDoctor-True/Api/components/user/detail-advisor.data.php?doctor_Id=${paramId}&&path=advisor`,
          {
            method:"GET",
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
          }
        )
          .then((response) => response.json())
          .then((datajson) => domelementcarddetail(datajson))
          .catch((errorr) => console.log(errorr));
    }catch(err){
        console.log(err)
    }
}
FetchDetailAdvisor(getidadvisor,CardDetailAdvisor);

const FetchDataArticleMe = (paramsID,domarticlecard)=>{
    try{
        fetch(
          `http://localhost/WebDoctor-True/Api/components/user/detail-advisor.data.php?article_Id=${paramsID}&&path=article`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
          }
        )
          .then((result) => result.json())
          .then((datajson) => domarticlecard(datajson))
          .catch((error2)=>console.log(error2))
    }catch(ebug){ 
        console.log('try:'+ebug)
    }
}
FetchDataArticleMe(getidadvisor, GetEventArticles);