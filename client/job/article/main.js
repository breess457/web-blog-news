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

class ModalCreateArticle extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.renderArticle();
  }
  renderArticle() {
    this.innerHTML = `
            <div class="modal fade" id="modalArticleCreate" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl" role="document" style="width:1250px;">
                    <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabelx">Modal Create Article <i class="fas fa-newspaper"></i></h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                            <form id="CreateArticleForm" class="row col-md-12">
                              <input type="hidden" class="form-control" id="doctorId" />
                              <div class="col-md-4 mr-auto">
                                <main-priview-image></main-priview-image>
                              </div>
                              <div class="col-md-8">
                                <div class="row">
                                  <div class="input-group col-md-8">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                    </div>
                                    <input type="text" class="form-control" id="subject" placeholder="หัวข้อบทความ" required/>
                                  </div>
                                  <div class="input-group col-md-4">
                                      <div class="input-group-prepend">
                                          <div class="input-group-text"><i class="fas fa-bookmark text-info"></i></div>
                                      </div>
                                      <select class="form-control" id="typeContent" required>
                                          <option disabel hidden>--ประเภท--</option>
                                          <option value="food">อาหารการกิน(Diet)</option>
                                          <option value="health">การดูแลด้านสุขภาพ</option>
                                          <option value="exercise">การออกกำลังเพื่อสุขภาพ</option>
                                      </select>
                                  </div>
                                </div>
                                <label class="ml-1 mt-1 mb-1 font-weight-bold text-success">เนื้อหาบทความ</label>
                                <div class="form-group">
                                   <textarea class="form-control" rows="6" id="contentArticle"></textarea>
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
customElements.define("main-create-article", ModalCreateArticle);

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
/* domElement Page Content */
const GetEventArticles = DataArticle =>{
  let createDomEl = function(params){
    return document.createElement(params)
  }
  let addAppend = function(cover, el){
    return cover.appendChild(el)
  }
   return DataArticle.map(autherMap =>{
      let img = createDomEl("img"),
          h5 = createDomEl("h5"),
          a = createDomEl("a"),
          divCol4 = createDomEl("div"),
          divCard = createDomEl("div"),
          divCardbody = createDomEl("div");
      let GetArticle = document.getElementById("GetArticle");
      
      img.className = "card-img-top";
      h5.className = "card-title border-bottom pb-3 set-data";
      a.className = "btnviewarticle";
      divCol4.className = "col-md-3 mb-2 classDataList"; 
      divCard.className = "card";
      divCardbody.className = "card-body";

      img.src = `http://localhost/WebDoctor-True/Api/environment/image-article/${autherMap.image_article}`;
      h5.innerHTML = `${autherMap.text_subject}`;
      a.innerHTML = `views <i class="fas fa-link"></i>`
       a.setAttribute('href',`../detail-article/index.html?contentID=${autherMap.articles_id}&&reqImg=${autherMap.image_article}`)

      addAppend(divCardbody, h5);
      addAppend(divCardbody, a);
      addAppend(divCard, img);

      addAppend(divCard, divCardbody);
      addAppend(divCol4, divCard);
      addAppend(GetArticle, divCol4);
   })
}
/* กำหนด session */
const sessionModify = (_sessionmember,_apicallback,_callbackDom)=>{
  let xi,getmemberid="";
   for(xi=0; xi<_sessionmember.length;xi++){
     getmemberid += _sessionmember[xi].sessionID
   }
   _apicallback(getmemberid,_callbackDom)
}

export{ InputTextAll, SweetUpdateAlert,sessionModify,GetEventArticles};