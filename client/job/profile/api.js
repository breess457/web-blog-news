const getsessionData = JSON.parse(sessionStorage.getItem("advisorSession"));
import {cutSession,getProfileJob,chkUpdateProfile,InputTextAll,SweetUpdateAlert as EventAlertUpdateProfile} from './main.js'
const FormUpdateProfile = document.getElementById("formUpdateProfile");

const FetchProfileJob =(sessionID,apiCallbackProfileJob)=>{
    fetch(
      `http://localhost/WebDoctor-True/Api/components/job/data.profile.php?av_id=${sessionID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((res) => res.json())
      .then((datalet) => {
        //console.log(JSON.stringify(datalet));
        apiCallbackProfileJob(datalet);
        chkUpdateProfile(datalet);
      })
      .catch((err) => console.log(err));
}
 
cutSession(getsessionData, getProfileJob, FetchProfileJob);

// Api Form UpdataProfile Doctors
FormUpdateProfile.addEventListener('submit',(evt)=>{
  evt.preventDefault();
    const ImageName = document.getElementById("defaultBtns");
    const formDatas = new FormData()
      formDatas.append('Image',ImageName.files[0]);
      formDatas.append('Fullname',InputTextAll("updateFullname"))
      formDatas.append('Email', InputTextAll("updateEmail"))
      formDatas.append('Sex',InputTextAll("updateSex"))
      formDatas.append('Age',InputTextAll("updateAge"))
      formDatas.append('Address', InputTextAll("updateAddress"))
      formDatas.append('Position',InputTextAll("updatePosition"))
      formDatas.append('Workpalce',InputTextAll("updateWorkPlace"))
      formDatas.append('Id',InputTextAll("updateId"))
      formDatas.append('getImgname', InputTextAll("getImgname"));
    console.log(InputTextAll("getImgname"));

   fetch(
     `http://localhost/WebDoctor-True/Api/components/job/data.profile.php`,
     {
       method: "POST",
       body: formDatas,
     }
   )
     .then((responsess) => responsess.json())
     .then((ResponseStatusData) => EventAlertUpdateProfile(ResponseStatusData))
     .catch(console.error);
})
