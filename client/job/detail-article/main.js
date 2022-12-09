/* Class Object DomHtml */
class PriviewImage extends HTMLElement {
  constructor() {
    super();
  }
  get wrapper(){
    return this.getAttribute("wrapper");
  }
  get cancle(){
    return this.getAttribute("cancle")
  }
  get filename(){
    return this.getAttribute("filename")
  }
  get btnDefault(){
    return this.getAttribute("defaultBtn")
  }
  get getImageName(){
    return this.getAttribute("getImage")
  }
  get custom(){
    return this.getAttribute("custom")
  }

  connectedCallback(){
    this.renderImg()
  }
  renderImg(){
    this.innerHTML = `
      <div class="container c-img">
          <div class="wrapper ${this.wrapper}">
              <div class="image">
                 <img src="" alt="" class="${this.id}"> 
              </div>
              <div class="content">
                  <div class="icon">
                      <i class="fas fa-cloud-upload-alt"></i>
                  </div>
                  <div class="text">No file chosen , yet! s</div>
              </div>
              <div class="cancel-btn" id="${this.cancle}">
                  <i class="fas fa-times"></i>
              </div>
              <div class="file-name ${this.filename}">File name hear</div>
          </div>
          <input type="file" id="${this.getImageName}" class="${this.btnDefault}" hidden>
          <p class="custom-btn" id="${this.custom}">Choose a file</p>
      </div>
    `;
  }
}
customElements.define('main-image-priview',PriviewImage)

class ModalUpdateArticle extends HTMLElement{
  connectedCallback(){
    this.renderEdit()
  }
  renderEdit(){
    this.innerHTML = `
      <div class="modal fade" id="modalUpdateAritcle" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-xl" role="document" style="width:1250px;">
              <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabelx">Modal Update Article <i class="fas fa-newspaper text-success"></i></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                      <form id="setUpdateArticleForm" class="row col-md-12">
                        <input type="hidden" class="" id="editArticleId" />
                        <input type="hidden" id="editImageArticle" />
                        <div class="col-md-4 mr-auto">
                          <main-image-priview id="editImageArticleTrue" wrapper="editWrapper" cancle="editBtnCancle"
                            filename="editFilename" defaultBtn="editDefaultBtn" getImage="editImgNewsValue" custom="editCustomBtn">
                          </main-image-priview>
                        </div>
                        <div class="col-md-8">
                          <div class="row">
                            <div class="input-group col-md-8">
                              <div class="input-group-prepend">
                                  <div class="input-group-text"><i class="fas fa-heading text-purper"></i></div>
                              </div>
                              <input type="text" class="form-control" id="editArticleSubject" placeholder="หัวข้อบทความ" required/>
                            </div>
                            <div class="input-group col-md-4">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fas fa-bookmark text-info"></i></div>
                                </div>
                                <select class="form-control" id="typeContent" required>
                                    <option id="editArticleType" selected hidden></option>
                                    <option value="food">อาหารการกิน(Diet)</option>
                                    <option value="health">การดูแลด้านสุขภาพ</option>
                                    <option value="exercise">การออกกำลังเพื่อสุขภาพ</option>
                                </select>
                            </div>
                          </div>
                          <label class="ml-1 mt-1 mb-1 set-font-thai font-weight-bold text-success">เนื้อหาบทความ</label>
                          <div class="form-group">
                             <textarea class="form-control" rows="6" id="editArticleContent"></textarea>
                          </div>
                        </div>
                        <div class="modal-footer container">
                          <button type="button" class="btn btn-secondary mr-auto" data-dismiss="modal">cancel</button>
                          <button type="submit" class="btn btxSubmit">OK, Got it! <i class="fas fa-edit"></i></button>
                        </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    `;
  }
}
customElements.define('main-edit-article',ModalUpdateArticle)

/* Create DomElement CartArticle */
const CardDetailArticle = (dataDetailArticle) => {
  let createDomEl = function (params) {
    return document.createElement(params);
  };
  let addAppend = function (cover, el) {
    return cover.appendChild(el);
  };
let myDataSocial = (eventSocial,viewmunber,likenumber,dislikenumber) => {
   return (eventSocial.innerHTML = `
              <div class="col-md-4 mt-4">
                  <div class="card border-purple mx-sm-4">
                      <div class="card border-purple shadow text-purple p-3 my-card" ><i class="fas fa-rss-square"></i></div>
                      <div class="text-purple text-center mt-3">
                        <small>Followers</small>
                      </div>
                      <div class="text-purple text-center mt-0 mb-0">
                        <h6>${viewmunber}</h6>
                      </div>
                  </div>
              </div>
              <div class="col-md-4 mt-4">
                  <div class="card border-info mx-sm-4">
                      <div class="card border-info shadow text-info p-3 my-card" >
                        <i class="fas fa-heart"></i>
                      </div>
                      <div class="text-info text-center mt-3">
                        <small>Like</small>
                      </div>
                      <div class="text-info text-center mt-0 mb-0">
                        <h6>${likenumber}</h6>
                      </div>
                  </div>
              </div>
              <div class="col-md-4 mt-4">
                  <div class="card border-danger mx-sm-4">
                      <div class="card border-danger shadow text-danger p-3 my-card" >
                        <i class="fas fa-heart"></i>
                      </div>
                      <div class="text-danger text-center mt-3">
                        <small>DistLike</small>
                      </div>
                      <div class="text-danger text-center mt-0 mb-0">
                        <h6>${dislikenumber}</h6>
                      </div>
                  </div>
              </div>
            `);
};
  return [dataDetailArticle].map((mappingDataDetail) => {
    let domCartDetail = document.getElementById(
      "FetchDetailArticle"
    ); /* Get Id Cart */

    /* Start Create Element */
    let infoDiv = createDomEl("div"),
      Divrow = createDomEl("div"),
      colDiv = createDomEl("div"),
      _rowDiv = createDomEl("div"),
      _col12 = createDomEl("div"),
      imgDiv = createDomEl("div"),
      img = createDomEl("img"),
      _col6 = createDomEl("div"),
      bioContent = createDomEl("div"),
      h3Title = createDomEl("h3"),
      divForm = createDomEl("div"),
      contentTextarea = createDomEl("textarea"),
      divFlex = createDomEl("div"),
      h6Day = createDomEl("h6"),
      divEventSocial = createDomEl("div"),
      h6Type = createDomEl("h6"); /* End */
    /* Create Style Element */
    infoDiv.className = "bio-info";
    Divrow.className = "row w-100";
    colDiv.className = "col-md-4";
    _rowDiv.className = "row";
    _col12.className = "col-md-12";
    imgDiv.className = "bio-image";
    img.className = "img-profile";
    _col6.className = "col-md-8";
    bioContent.className = "bio-content";
    divFlex.className = "d-flex col-md-11 ml-auto mt-4 mb-0"; /* End */
    contentTextarea.className = "form-control";
    h6Day.className = "text-purple col-sm-5 txt-space";
    h6Type.className = "text-teal col-sm-7 txt-space";
    h3Title.className = "set-font-thai mt-0"
    divEventSocial.className = "row w-100 mt-0";
    contentTextarea.cols = 60; /* setAttrbute */
    contentTextarea.rows = 5;
    contentTextarea.maxLength = 5000;
    contentTextarea.readOnly = true;
    /* Start AppendChild */
    addAppend(imgDiv, img);
    addAppend(_col12, imgDiv);
    addAppend(_rowDiv, _col12);
    addAppend(colDiv, _rowDiv);
    //addAppend(colDiv)
    addAppend(Divrow, colDiv);
    addAppend(infoDiv, Divrow);
    addAppend(bioContent, h3Title);
    addAppend(bioContent, contentTextarea);
    addAppend(bioContent, divEventSocial);
    addAppend(bioContent, divFlex);
    addAppend(divFlex, h6Day);
    addAppend(divFlex, h6Type);
    addAppend(_col6, bioContent);
    addAppend(Divrow, _col6);
    addAppend(domCartDetail, infoDiv); /* End */
    /* Start Fetch Data */
    h3Title.innerHTML = `${mappingDataDetail.text_subject}`;
    contentTextarea.innerHTML = mappingDataDetail.text_contents;
    img.src = `http://localhost/WebDoctor-True/Api/environment/image-article/${mappingDataDetail.image_article}`;
    h6Day.innerHTML = `โพสต์เมื่อ: ${mappingDataDetail.dete_time}`;
    switch (mappingDataDetail.content_type) {
      case "food":
        h6Type.innerHTML = `ประเภท: อาหารการกิน(Diet)`
        break
      case "health":
        h6Type.innerHTML = `ประเภท: การดูแลด้านสุขภาพ(Health)`
        break
      case "exercise":
        h6Type.innerHTML = `ประเภท: การดูแลด้านสุขภาพ(exercise)`;
        break
      default:
        h6Type.innerHTML = `ประเภท: ${mappingDataDetail.content_type}`;
    }
    myDataSocial(divEventSocial,'100k','1k','500')
  });
};

const SweetAlertTrash = (_getDatas) => {
  if (_getDatas.status === 404) {
    Swal.fire({
      icon: _getDatas.icons,
      title: _getDatas.title,
      text: _getDatas.msg,
      confirmButtonText: `ตกลง`,
      footer: "<a href>ติดต่อ เจ้าหน้าที่</a>",
    }).then((result) => {
      location.reload();
    });
  } else {
    Swal.fire({
      icon: _getDatas.icons,
      title: _getDatas.title,
      text: _getDatas.msg,
      confirmButtonText: `ตกลง`,
    }).then((resultx) => {
      window.location = _getDatas.path;
    });
  }
};

const operationImagePrivew = (keyWrapper,keyTagImg,btnCancleKey,keyFileName,keyDefaultHidden,keyCustomBtn)=>{
  let wrapperClass = document.querySelector(keyWrapper)
  let imageClass = document.querySelector(keyTagImg)
  let cancleIdTag = document.querySelector(btnCancleKey)
  let filenameClass = document.querySelector(keyFileName)
  let defaultClass = document.querySelector(keyDefaultHidden)
  let customIdBtn = document.querySelector(keyCustomBtn)
  let setExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

  customIdBtn.onclick = function(){
    defaultClass.click()
  }
  defaultClass.addEventListener("change",function(){
    const file = this.files[0]
     if(file){
       const reader = new FileReader()
       reader.onload = function(){
         const result = reader.result
         imageClass.src = result
         wrapperClass.classList.add("active")
       }
       cancleIdTag.addEventListener("click",function(){
         imageClass.src = ""
         wrapperClass.classList.remove("active")
       })
       reader.readAsDataURL(file)
     }
      if(this.value){
        let valueStone = this.value.match(setExp)
        filenameClass.textContent = valueStone
      }
  })
}

const editDataArticles=(getChangedData)=>{
  let eventInputData = function(inputId,setDataId){
    return document.getElementById(inputId).value = setDataId
  }
  /* _nameImg,_tagImg,_tagImgname,_clsActive,_btnRemove */
  let editImagePriview = function(editWrapper,editTagImage,editFileName,editBtnCancle,editDataImageName){
    let Wrappers = document.querySelector(editWrapper)
    let ImageTag = document.querySelector(editTagImage)
    let FileName = document.querySelector(editFileName)
    let CancleButton = document.querySelector(editBtnCancle)
     if(editDataImageName){
       FileName.textContent = editDataImageName
       ImageTag.src = `http://localhost/WebDoctor-True/Api/environment/image-article/${editDataImageName}`
       Wrappers.classList.add('active')
       CancleButton.classList.add('active')
     }
  }
  return [getChangedData].map(setDataMustChange =>{
    eventInputData('editArticleId', setDataMustChange.articles_id)
    eventInputData('editArticleSubject', setDataMustChange.text_subject)
    eventInputData('editArticleContent', setDataMustChange.text_contents)
    eventInputData('editArticleType', setDataMustChange.content_type)
    eventInputData('editImageArticle', setDataMustChange.image_article)
    console.log(setDataMustChange.content_type);
    document.getElementById("editArticleType").innerHTML = setDataMustChange.content_type
    editImagePriview(".editWrapper", ".editImageArticleTrue", ".editFilename","#editBtnCancle",setDataMustChange.image_article)
  })
}

/* get Function Operation Image Priview */
operationImagePrivew(".editWrapper",".editImageArticleTrue","#editBtnCancle",".editFilename",".editDefaultBtn","#editCustomBtn")

const InputTextAll = (_inputId)=>{
    return document.getElementById(_inputId).value
}

export {CardDetailArticle,SweetAlertTrash,editDataArticles,InputTextAll}