
import {GetEventArticles as CardelementArticle} from './main.js'

const fetchDataByArticle =(DataapiByArticle,getElementByArticle)=>{
    try{
        fetch(DataapiByArticle,{
            method:"GET",
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
        })
         .then(responseApi => responseApi.json())
         .then(resArticle => getElementByArticle(resArticle))
         .catch(errs => console.log(errs))
    }catch(e){
        console.log("err :" + e)
    }
}
fetchDataByArticle(`http://localhost/WebDoctor-True/Api/components/user/data.article.php`,CardelementArticle);