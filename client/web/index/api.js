
import {getElementByOurteam,getAuther as cartArticle} from './main.js'

/* get Data api */
const fetchData = (getDataapi, elementAuther) => {
    fetch(getDataapi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        elementAuther(data);
      })
      .catch((err) => console.log(`Error : ${err} `));
};
fetchData("http://localhost/WebDoctor-True/Api/components/user/data.index.php?path='article'",cartArticle)

/* fetch data ourteam */
const fetchDataByOurTeam = (responseApibyOurTeam, eventByOurTeam)=>{
  try{
    fetch(responseApibyOurTeam, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      }, 
    })
     .then(ConvertData => ConvertData.json())
     .then(responseDatas => {
       console.log(responseDatas)
       eventByOurTeam(responseDatas)
      })
     .catch(errs => console.log(errs))
  }catch(Err){
    console.log(Err)
  }
}
fetchDataByOurTeam("http://localhost/WebDoctor-True/Api/components/user/data.index.php",getElementByOurteam);