 
const getsessionData = JSON.parse(sessionStorage.getItem("userSession"));
import {getProfileUser,cutSession,updateEventProfile,InputTextAll,SweetUpdateAlert} from './main.js'
const FormUpdateProfile = document.getElementById("formUpdateProfile");

const FetchProfileUser = (sessionID,CardElementProfileUser)=>{
    try{
        fetch(
          `http://localhost/WebDoctor-True/Api/components/user/data.profile.php?user_id=${sessionID}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
          }
        )
          .then((result) => result.json())
          .then((setdata) => {
              CardElementProfileUser(setdata);
              updateEventProfile(setdata);
          })
          .catch((err) => console.log("fetch err:" + err))
    }catch(efalse){
        console.log('err try:'+ efalse)
    }
}
cutSession(getsessionData,getProfileUser,FetchProfileUser)

FormUpdateProfile.addEventListener('submit',function(setEvent){
    setEvent.preventDefault()
    const ImageName = document.getElementById("defaultBtns");
    const formDatas = new FormData();
     formDatas.append('setId', InputTextAll("updateId"))
     formDatas.append('setImage',ImageName.files[0])
     formDatas.append('setFullname', InputTextAll("updateFullname"))
     formDatas.append('setEmail', InputTextAll("updateEmail"))
     formDatas.append('setPassword', InputTextAll("updatePassword"))
     formDatas.append('setSex',InputTextAll("updateSex"))
     formDatas.append('setAge', InputTextAll("updateAge"))
     formDatas.append('setLocation', InputTextAll("updateLocation"))
     formDatas.append('imageName', InputTextAll("getImgname"))

    try{
        fetch(
          `http://localhost/WebDoctor-True/Api/components/user/data.profile.php`,
          {
              method:"POST",
              body:formDatas
          }
        )
          .then(result => result.json())
          .then(responseData => SweetUpdateAlert(responseData))
          .catch(err => console.log(err))
    }catch(ebug){
        console.log('try err:' + ebug)
    }
})