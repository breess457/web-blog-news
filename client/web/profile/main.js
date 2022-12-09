
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

class modalUpdateProfile extends HTMLElement{

    connectedCallback(){
        this.renderEvent()
    }
    renderEvent(){
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
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fas fa-key text-info"></i></div>
                                        </div>
                                        <input type="password" class="form-control" id="updatePassword" name="pass" placeholder="Password" required>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <div class="input-group mb-2">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="fas fa-genderless text-info"></i></div>
                                            </div>
                                            <select class="form-control" id="updateSex">
                                                <option id="getSex2" seleted hidden></option>
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
                                        <input type="text" class="form-control" id="updateLocation" name="nombre" placeholder="Address" required>
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
customElements.define('main-update-profile', modalUpdateProfile)

/* element fetch data api*/
const chkProfileJob = (imgName, tagImg) => {
  if (!imgName.img_profile) {
    if(imgName.sex === "woman"){
      tagImg.src = `../../../Assets/image/Svg/woman-doctor.jpg`
    }else if(imgName.sex === "man"){
      tagImg.src = `../../../Assets/image/Svg/man-doctor.jpg`;
    }
  } else {
    tagImg.src = `http://localhost/WebDoctor-True/Api/environment/image-user/${imgName.img_profile}`;
      
  }
}
/* get data profile port */
const createNode = (elemant) => {
  return document.createElement(elemant);
}
const append = function (parent, el) {
  return parent.appendChild(el);
}
const getProfileUser =(dataProfile)=>{
    return dataProfile.map((Getdata)=>{
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
      let textsex = createNode('h5')
      let ageTxt = createNode('h5')
      let addressTxt = createNode('h6')
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
      ageTxt.className = "text-teal";
      textsex.className = "text-info"
      addressTxt.className = "text-purple";


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
      
        if (!Getdata.location) {
          ageDivAlert.innerHTML = `<strong>!Warning</strong> <h6 class="mt-1 ml-4">is not Profile PleaseUpdate</h6>`;
          append(bioContent, ageDivAlert);
        } else {
          ageTxt.innerHTML = `Age: ${Getdata.age} Years`;
          textsex.innerHTML = `Position: ${Getdata.sex}`;
          addressTxt.innerHTML = `Address: ${Getdata.location}`;
          append(bioContent, ageTxt);
          append(bioContent, textsex);
          append(bioContent, addressTxt);
        }

    })
}

const cutSession = (session, CallFn, CallbackApi) => {
  let _cheangeData = "";
  let i;
  for (i = 0; i < session.length; i++) {
    _cheangeData += session[i].sessionID;
  }
  CallbackApi(_cheangeData, CallFn);
}; 

const updateImgPriview = (_nameImg,_tagImg,_tagImgname,_clsActive,_btnRemove)=>{
    const imageId = document.getElementById(_tagImg)
    const imgName = document.querySelector(_tagImgname)
    const wrapper = document.querySelector(_clsActive);
    const btnTrash  = document.querySelector(_btnRemove)
    if(_nameImg){
      imgName.textContent =`${_nameImg}`
      imageId.src = `http://localhost/WebDoctor-True/Api/environment/image-user/${_nameImg}`;
      wrapper.classList.add('active')
      btnTrash.classList.remove('active')
    }
} 
const fnUpdateProfile = (getIdUpdate, getDataAsMapping) => {
  return (document.getElementById(getIdUpdate).value = `${getDataAsMapping}`)
}
const updateEventProfile = function(dataEvents){
    return dataEvents.map(setDataEvents =>{
      fnUpdateProfile("updateId", setDataEvents.user_id);
      fnUpdateProfile("updateFullname", setDataEvents.fullname);
      fnUpdateProfile("updateEmail", setDataEvents.user_name);
      fnUpdateProfile("updatePassword",setDataEvents.passkey)
      fnUpdateProfile("updateAge", setDataEvents.age);
      fnUpdateProfile("updateLocation", setDataEvents.location);
      fnUpdateProfile("getImgname", setDataEvents.img_profile);
      updateImgPriview(setDataEvents.img_profile, "privewImg",".file-name",".wrapper","#cancel-btn");
      var optionSex = document.getElementById("getSex2");
      optionSex.innerHTML = `default: ${setDataEvents.sex}`;
      optionSex.value = setDataEvents.sex;
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

export {getProfileUser,cutSession,updateEventProfile,InputTextAll,SweetUpdateAlert}