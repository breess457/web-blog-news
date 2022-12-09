
import {getElementByOurteam} from './main.js'

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
fetchDataByOurTeam("http://localhost/WebDoctor-True/Api/components/user/data.advisor.php",getElementByOurteam);