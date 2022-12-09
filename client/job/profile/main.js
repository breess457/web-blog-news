class ImagePriviews extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.renderImg();
  }
  renderImg() {
    this.innerHTML = `
            <div class="container c-img">
                <div class="wrapper">
                    <div class="image">
                       <img src="" alt="" id="privewImg"> 
                    </div>
                    <div class="content">
                        <div class="icon">
                            <i class="fas fa-cloud-upload-alt"></i>
                        </div>
                        <div class="text">No file chosen , yet! s</div>
                    </div>
                    <div id="cancel-btn">
                        <i class="fas fa-times"></i>
                    </div>
                    <div class="file-name">File name hear</div>
                </div>
                <input type="file" id="defaultBtns" class="cxx" hidden>
                <p id="custom-btn">Choose a file</p>
            </div>
        `;
  }
}
customElements.define("main-priview-image", ImagePriviews);

class ModalProfileUpdate extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.renderModal();
  }
  renderModal() {
    this.innerHTML = `
            <div class="modal fade" id="modalUpdateProfile" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Modal Update Prifile <i class="fas fa-user-cog"></i></h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                            <form id="formUpdateProfile" class="signup-form">
                              <input type="hidden" id="updateId" />
                             <div class="d-flex">
                              <div class="col-md-4 mr-auto">
                                <main-priview-image></main-priview-image>
                              </div>
                              <div class="col-md-8 ml-auto">
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                        </div>
                                        <input type="text" class="form-control" id="updateFullname" name="nombre" placeholder="fullname" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fas fa-at text-info"></i></div>
                                        </div>
                                        <input type="text" class="form-control" id="updateEmail" name="nombre" placeholder="email" required>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="fas fa-genderless text-info"></i></div>
                                            </div>
                                            <select class="form-control" id="updateSex">
                                                <option id="getSex"></option>
                                                <option value="man">man</option>
                                                <option value="woman">woman</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="fas fa-user-clock text-info"></i></div>
                                            </div>
                                            <input type="text" class="form-control" id="updateAge" name="nombre" placeholder="Age" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fas fa-street-view text-info"></i></div>
                                        </div>
                                        <input type="text" class="form-control" id="updateAddress" name="nombre" placeholder="Address" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fas fa-user-tie text-info"></i></div>
                                        </div>
                                        <input type="text" class="form-control" id="updatePosition" name="nombre" placeholder="Position" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fas fa-building text-info"></i></div>
                                        </div>
                                        <input type="text" class="form-control" id="updateWorkPlace" name="nombre" placeholder="Work Place" required>
                                    </div>
                                </div>
                                <input type="hidden" id="getImgname" />
                              </div>
                             </div>
                             <div class="form-group mb-0">
                                <div class="input-group mb-0">
                                  <div class="col-md-12 text-center">
                                    <button class="btn btn-primary btn-update" type="submit">
                                        <i class="far fa-edit"></i> Click Update Profile
                                    </button>
                                  </div>
                                </div>
                                <p class="text-center mb-0 mt-3">
                                    how to click <a class="txt-setfont">reset password</a>
                                  </p>
                             </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }
}
customElements.define("modal-profile-update", ModalProfileUpdate);

/* element fetch data api*/
const chkProfileJob = (imgName, tagImg) => {
  if (!imgName.doctor_profile) {
    if(imgName.sex === "woman"){
      tagImg.src = `../../../Assets/image/Svg/woman-doctor.jpg`
    }else if(imgName.sex === "man"){
      tagImg.src = `../../../Assets/image/Svg/man-doctor.jpg`;
    }
  } else {
    tagImg.src = `http://localhost/WebDoctor-True/Api/environment/image-job/${imgName.doctor_profile}`;
      
  }
}
/* get data profile port */
const createNode = (elemant) => {
  return document.createElement(elemant);
}
const append = function (parent, el) {
  return parent.appendChild(el);
}
const getProfileJob =(dataProfile)=>{
    return [dataProfile].map((Getdata)=>{
      /* Ereate Element */
       
      let infoDiv = createNode("div")
      let Divrow = createNode("div")
      let colDiv = createNode("div")
      let _rowDiv = createNode("div")
      let _col12 = createNode("div")
      let imgDiv = createNode("div")
      let img = createNode("img")
      let _col6 = createNode("div")
      let bioContent = createNode("div")
      let txtName = createNode("h2");
      let txtEmail = createNode("p");
      let ageDivAlert = createNode('div')//alert is not profile
      //let Dflex = createNode("div")
      let positionTxt = createNode('h5')
      let ageTxt = createNode('h5')
      let addressTxt = createNode('h6')
      let workPlaceTxt = createNode('h6')
      let cardSocial = createNode("div") //Create Card Social
      //cardSocial.setAttribute("id","card-social")
      const getidText = document.getElementById("replayProfile");
      

      infoDiv.className = "bio-info";
      Divrow.className = "row";
      colDiv.className = "col-md-6";
      _rowDiv.className = "row";
      _col12.className = "col-md-12";
      imgDiv.className = "bio-image";
      img.className = "img-prifile";
      _col6.className = "col-md-6";
      bioContent.className = "bio-content";
      ageDivAlert.className = "alert alert-warning d-flex";//add class alert not profile
     // Dflex.className = "d-flex";
      ageTxt.className = "text-teal";
      positionTxt.className = "text-info"
      addressTxt.className = "text-purple";
      workPlaceTxt.className = "text-secondary";
      cardSocial.className =`row w-100 mt-4`


      append(imgDiv, img);
      append(_col12, imgDiv);
      append(_rowDiv, _col12);
      append(colDiv, _rowDiv);
      append(Divrow, colDiv);
      append(infoDiv, Divrow);
      append(bioContent, txtName);
      append(bioContent, txtEmail);
      append(_col6, bioContent);
      append(Divrow, _col6);
      append(getidText, infoDiv);
      
      chkProfileJob(Getdata,img);
      txtName.innerHTML = `${Getdata.fullname}`;
      txtEmail.innerHTML = `${Getdata.user_name}`;
      
        if (!Getdata.address) {
          ageDivAlert.innerHTML = `<strong>!Warning</strong> <h6 class="mt-1 ml-4">is not Profile PleaseUpdate</h6>`;
          append(bioContent, ageDivAlert);
        } else {
          ageTxt.innerHTML = `Age: ${Getdata.age} Years`;
          positionTxt.innerHTML = `Position: ${Getdata.position}`;
          addressTxt.innerHTML = `Address: ${Getdata.address}`;
          workPlaceTxt.innerHTML = `WorkPlace: ${Getdata.work_place}`;
          //append(bioContent,Dflex)
          append(bioContent, ageTxt);
          append(bioContent, positionTxt);
          append(bioContent, addressTxt);
          append(bioContent, workPlaceTxt);
        }
      append(bioContent,cardSocial) 
        cardSocial.innerHTML = ` 
        <div class="col-md-4 mt-4">
            <div class="card border-purple mx-sm-1">
                <div class="card border-purple shadow text-purple p-3 my-card" ><i class="fas fa-rss-square"></i></div>
                <div class="text-purple text-center mt-3">
                  <small>Followers</small>
                </div>
                <div class="text-purple text-center mt-0 mb-0">
                  <h6>234</h6>
                </div>
            </div>
        </div>
        <div class="col-md-4 mt-4">
            <div class="card border-info mx-sm-1">
                <div class="card border-info shadow text-info p-3 my-card" >
                  <i class="fas fa-newspaper"></i>
                </div>
                <div class="text-info text-center mt-3">
                  <small>Content</small>
                </div>
                <div class="text-info text-center mt-0 mb-0">
                  <h6>10</h6>
                </div>
            </div>
        </div>
        <div class="col-md-4 mt-4">
            <div class="card border-danger mx-sm-1">
                <div class="card border-danger shadow text-danger p-3 my-card" >
                  <i class="fas fa-heart"></i>
                </div>
                <div class="text-danger text-center mt-3">
                  <small>Like</small>
                </div>
                <div class="text-danger text-center mt-0 mb-0">
                  <h6>1M</h6>
                </div>
            </div>
        </div>
        `;
    })
}
const fnUpdateProfile =(getIdUpdate,getDataAsMapping)=>{
  return document.getElementById(getIdUpdate).value = `${getDataAsMapping}`
}
const updateImgPriview = (_nameImg,_tagImg,_tagImgname,_clsActive,_btnRemove)=>{
    const imageId = document.getElementById(_tagImg)
    const imgName = document.querySelector(_tagImgname)
    const wrapper = document.querySelector(_clsActive);
    const btnTrash  = document.querySelector(_btnRemove)
    if(_nameImg){
      imgName.textContent =`${_nameImg}`
      imageId.src = `http://localhost/WebDoctor-True/Api/environment/image-job/${_nameImg}`;
      wrapper.classList.add('active')
      btnTrash.classList.remove('active')
    }
} 
const chkUpdateProfile = (datagetUpdate)=>{
    return [datagetUpdate].map((_toDataAsmapping)=>{
        fnUpdateProfile("updateId",_toDataAsmapping.doctor_id);
        fnUpdateProfile("updateFullname",_toDataAsmapping.fullname);
        fnUpdateProfile("updateEmail",_toDataAsmapping.user_name);
        fnUpdateProfile("updateAge",_toDataAsmapping.age);
        fnUpdateProfile("updateAddress",_toDataAsmapping.address);
        fnUpdateProfile("updatePosition", _toDataAsmapping.position);
        fnUpdateProfile("updateWorkPlace", _toDataAsmapping.work_place);
        updateImgPriview(_toDataAsmapping.doctor_profile, "privewImg",".file-name",".wrapper","#cancel-btn");
        fnUpdateProfile("getImgname",_toDataAsmapping.doctor_profile)
        
        let sexOption = document.getElementById('getSex')
        sexOption.innerHTML = `defult: ${_toDataAsmapping.sex}`
        sexOption.value = _toDataAsmapping.sex
    })
}

/* function priview image update */
const wrapper = document.querySelector(".wrapper");
const fileName = document.querySelector(".file-name");
const cancleBtn = document.querySelector("#cancel-btn i");
const defaulBtn = document.querySelector("#defaultBtns");
const img = document.querySelector("#privewImg");
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
document.getElementById("custom-btn").onclick = () => {
  defaulBtn.click();
};

defaulBtn.addEventListener("change", function () {
 //console.log(this.files)
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      //console.log(reader.result)
      img.src = result;
      wrapper.classList.add("active");
    };
    cancleBtn.addEventListener("click", () => {
      img.src = "";
      wrapper.classList.remove("active");
    });
    reader.readAsDataURL(file);
  }
  if (this.value) {
    let valueStore = this.value.match(regExp);
    fileName.textContent = valueStore;
  }
});
 
const cutSession = (session, CallFn, CallbackApi) => {
  let _cheangeData = "";
  let i;
  for (i = 0; i < session.length; i++) {
    _cheangeData += session[i].sessionID;
  }
  console.log(`tts: ${_cheangeData}`);
  CallbackApi(_cheangeData, CallFn);
} 

const InputTextAll = (_inputId)=>{
    return document.getElementById(_inputId).value
}

const SweetUpdateAlert =(_getDatas)=>{
    if(_getDatas.status === 404){
        Swal.fire({
          icon: _getDatas.icons,
          title: _getDatas.title,
          text: _getDatas.msg,
          confirmButtonText: `ตกลง`,
          footer: "<a href>ติดต่อ เจ้าหน้าที่</a>",
        }).then((result) => {
          location.reload();
        });
    }else{
        Swal.fire({
          icon: _getDatas.icons,
          title: _getDatas.title,
          text: _getDatas.msg,
          confirmButtonText: `ตกลง`,
        }).then((resultx) => {
            location.reload()
        })
    }
}

export {cutSession,getProfileJob,chkUpdateProfile,InputTextAll,SweetUpdateAlert}
