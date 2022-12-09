class CarouselsTrue extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
            <div>
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                      <img src="../../../Assets/image/q11.jpeg" class="d-image d-block" />
                      <div class="carousel-caption d-md-block hero">
                          <h2 class="display-4">Advisor</h2>
                          <p class="lead">Advisor lernMore Where You peplo</p>
                      </div>
                    </div>
                    <div class="carousel-item ">
                      <img src="../../../Assets/image/122ge.jpg" class="d-image d-block" />
                      <div class="carousel-caption d-md-block hero">
                          <h2 class="display-4">Advisor</h2>
                          <p class="lead">Advisor lernMore Where You peplo</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src="../../../Assets/image/see.jpg" class="d-image d-block" />
                      <div class="carousel-caption d-md-block hero">
                        <hgroup>
                          <h2 class="display-4">Advisor</h2>
                          <p class="lead">Advisor lernMore Where You peplo</p>
                        </hgroup>
                      </div>
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
            </div>
        `;
  }
}
customElements.define("carousel-apps-true", CarouselsTrue);


const getElementByOurteam = OurTeamDatas =>{
    let checkImgStatus =(_resData,_imageTag)=>{
      if(!_resData.doctor_profile){
        let funny;
         switch(_resData.sex)
         {
           case "woman":
             funny = _imageTag.src = "../../../Assets/image/Svg/woman-doctor.jpg"
            break
           case "man":
             funny = _imageTag.src = "../../../Assets/image/Svg/man-doctor.jpg"
            break
           default:
             funny = _imageTag.src = "../../../Assets/image/Svg/man-doctor.jpg"
         }
      }else{
        _imageTag.src = `http://localhost/WebDoctor-True/Api/environment/image-job/${_resData.doctor_profile}`;
      }
    }
    let createElement = ElementBy =>{
        return document.createElement(ElementBy)
    }
    let AppendChild = (controller,byelement)=>{
        return controller.appendChild(byelement)
    }

    return OurTeamDatas.map(autherDatamapping =>{
    /* createElement */
        let col3_sm6 = createElement('div'),divTeam = createElement('div'),teamThumb = createElement('div'),
             imageTeam = createElement('img'),iconsMedia = createElement('div'),linkUsr=createElement('a'),
              teamBio = createElement('div'),txtName = createElement('h4'),textPosition = createElement('h5')
    /* Add Style */
        col3_sm6.className = "col-lg-3 col-sm-6";
        divTeam.className = "team-single wow zoomIn";
        teamThumb.className = "team-thumb";
        imageTeam.className = "image-article";
        iconsMedia.className = "social-icons style-2";
        linkUsr.className = "fas fa-search";
        teamBio.className = "team-bio";
    /* appendChaild */
        AppendChild(document.getElementById("getOutTeam"),col3_sm6)
         AppendChild(col3_sm6,divTeam)
          AppendChild(divTeam,teamThumb)
           AppendChild(teamThumb,imageTeam)
           AppendChild(teamThumb,iconsMedia)
            AppendChild(iconsMedia,linkUsr)
          AppendChild(divTeam,teamBio)
           AppendChild(teamBio,txtName)
           AppendChild(teamBio,textPosition)

    /* set get data article */
        txtName.innerHTML = autherDatamapping.fullname;
        textPosition.innerHTML = autherDatamapping.position;
        checkImgStatus(autherDatamapping,imageTeam);
        if (window.location.pathname === "/WebDoctor-True/index.html") {
          linkUsr.setAttribute(
            "href",
            `client/web/detail-advisor/index.html?id_advisor=${autherDatamapping.doctor_id}`
          );
        }else if (window.location.pathname === "/WebDoctor-True/"){
          linkUsr.setAttribute(
            "href",
            `client/web/detail-advisor/index.html?id_advisor=${autherDatamapping.doctor_id}`
          );
        } else {
          linkUsr.setAttribute(
            "href",
            `../detail-advisor/index.html?id_advisor=${autherDatamapping.doctor_id}`
          );
        }

    })
}

/* create element cart article */
const getAuther = (getData) => {
  let createNode = (elemant) => {
    return document.createElement(elemant)
  }
  let append = function (parent, el) {
    return parent.appendChild(el)
  }
    return getData.map((auther) => {
      let img = createNode("img");
      let h5 = createNode("h5");
      let datesmall = createNode("small");
      let teamsmall = createNode("small")
      let divCol4 = createNode("div");
      let divCard = createNode("div");
      let divCardbody = createNode("div");
      let divRow = createNode("div");
      let buttonlink = createNode("a")
  
      let divId = document.getElementById("byIdproduct");
  
      img.className = "card-img-top";
      h5.className = "card-title border-bottom pb-3";
      divRow.className = "d-flex";
      datesmall.className = "card-text mr-auto";
      teamsmall.className = "card-text ml-auto";
      divCol4.className = "col-md-3";
      divCard.className = "card";
      divCardbody.className = "card-body";
      buttonlink.className = "btnLink";

      //buttonlink.setAttribute('href',)
  
      img.src = `http://localhost/WebDoctor-True/Api/environment/image-article/${auther.image_article}`;
      h5.innerHTML = auther.text_subject;
      datesmall.innerHTML = `post :23-12-2021`;
      teamsmall.innerHTML = `base :xxx xx`;
      buttonlink.innerHTML = `view <i class="fas fa-link"></i>`
  
      append(divCardbody, h5);
      append(divCardbody,divRow)
      append(divRow, datesmall);
      append(divRow,teamsmall)
      append(divCardbody,buttonlink)
      append(divCard, img);
  
      append(divCard, divCardbody);
      append(divCol4, divCard);
      append(divId, divCol4);
      if(window.location.pathname === "/WebDoctor-True/index.html" || window.location.pathname === "/WebDoctor-True/"){
        buttonlink.setAttribute(
          "href",
          `client/web/detail-article/index.html?contentID=${auther.articles_id}&&reqImg=${auther.image_article}`
        );
      }else{
        buttonlink.setAttribute(
          "href",
          `../detail-article/index.html?contentID=${auther.articles_id}&&reqImg=${auther.image_article}`
        );
      }
    });
};
console.log(window.location.pathname)
export {getElementByOurteam,getAuther}