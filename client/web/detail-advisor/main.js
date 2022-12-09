

const CardDetailAdvisor =(getbydata)=>{
    let checkImgStatus = (_resData, _imageTag) => {
      if (!_resData.doctor_profile) {
        let funny;
        switch (_resData.sex) {
          case "woman":
            funny = _imageTag.src =
              "../../../Assets/image/Svg/woman-doctor.jpg";
            break;
          case "man":
            funny = _imageTag.src = "../../../Assets/image/Svg/man-doctor.jpg";
            break;
          default:
            funny = _imageTag.src = "../../../Assets/image/Svg/man-doctor.jpg";
        }
      } else {
        _imageTag.src = `http://localhost/WebDoctor-True/Api/environment/image-job/${_resData.doctor_profile}`;
      }
    };
    let createEventTag = function(htmlTag){
        return document.createElement(htmlTag)
    }
    let parendObject = function(cover,bind){
        return cover.appendChild(bind)
    }
    return getbydata.map(autherdataMapping =>{
        let infoDiv = createEventTag('div'),Divrow = createEventTag('div'),colDiv = createEventTag('div'),
            _rowDiv = createEventTag('div'),_col12 = createEventTag('div'),imgDiv = createEventTag('div'),
            img = createEventTag('img'),_col6 = createEventTag('div'),bioContent = createEventTag('div'),
            textname = createEventTag('h2'),textemail = createEventTag('p'),alertDiv = createEventTag('div'),
            textposition = createEventTag('h5'),ageTxt = createEventTag('h5'),addressTxt = createEventTag('h6'),
            workPlaceTxt = createEventTag('h6'),cardSocial = createEventTag("div");
        let MaterialDetail = document.getElementById("MaterialDetail")

        infoDiv.className = "bio-info";
        Divrow.className = "row";
        colDiv.className = "col-md-6";
        _rowDiv.className = "row";
        _col12.className = "col-md-12";
        imgDiv.className = "bio-image";
        img.className = "img-prifile";
        _col6.className = "col-md-6";
        bioContent.className = "bio-content";
        alertDiv.className = "alert alert-warning d-flex"; //add class alert not profile
        // Dflex.className = "d-flex";
        ageTxt.className = "text-teal";
        textposition.className = "text-info";
        addressTxt.className = "text-purple";
        workPlaceTxt.className = "text-secondary";
        cardSocial.className = `row w-100 mt-4`;

        parendObject(imgDiv,img)
        parendObject(_col12, imgDiv)
        parendObject(_rowDiv,_col12)
        parendObject(colDiv,_rowDiv)
        parendObject(Divrow,colDiv)
        parendObject(infoDiv,Divrow)
        parendObject(bioContent,textname)
        parendObject(bioContent,textemail)
        parendObject(bioContent,textposition)
        parendObject(bioContent,addressTxt)
        parendObject(bioContent,workPlaceTxt)
        parendObject(bioContent,ageTxt)
        parendObject(_col6,bioContent)
        parendObject(Divrow, _col6)
        parendObject(MaterialDetail,infoDiv)

        textname.innerHTML = autherdataMapping.fullname
        textemail.innerHTML = autherdataMapping.user_name
        textposition.innerHTML = `ตำแหน่ง: ${autherdataMapping.position}`
        addressTxt.innerHTML = `location: ${autherdataMapping.address}`
        workPlaceTxt.innerHTML = `สถานที่ทำงาน: ${autherdataMapping.work_place}`
        ageTxt.innerHTML = `อายุ: ${autherdataMapping.age}`
        checkImgStatus(autherdataMapping,img)
    })
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
          dFlex = createDomEl("div"),
          txtpost = createDomEl('small'),
          txtday = createDomEl('small'),
          divCol2 = createDomEl("div"),
          divCard = createDomEl("div"),
          divCardbody = createDomEl("div");
      let GetArticle = document.getElementById("getByArticleMe");
      
      img.className = "card-img-top";
      h5.className = "card-title border-bottom set-font-thai pb-3";
      txtday.className = "mr-auto text-info";
      txtpost.className = "ml-auto text-secondary";
      a.className = "btnviewarticle";
      divCol2.className = "col-md-3 mb-2"; 
      divCard.className = "card";
      divCardbody.className = "card-body";
      dFlex.className = "d-flex mb-2"

      img.src = `http://localhost/WebDoctor-True/Api/environment/image-article/${autherMap.image_article}`;
      h5.innerHTML = `${autherMap.text_subject}`;
      a.innerHTML = `views <i class="fas fa-link"></i>`
       a.setAttribute('href',`../detail-article/index.html?contentID=${autherMap.articles_id}&&reqImg=${autherMap.image_article}`)
      txtday.innerHTML = autherMap.dete_time; //not get data
      txtpost.innerHTML = autherMap.content_type;

      addAppend(divCardbody, h5);
      addAppend(divCardbody,dFlex);
      addAppend(dFlex,txtday);
      addAppend(dFlex,txtpost);
      addAppend(divCardbody, a);
      addAppend(divCard, img);

      addAppend(divCard, divCardbody);
      addAppend(divCol2, divCard);
      addAppend(GetArticle, divCol2);
   })
}


export {CardDetailAdvisor,GetEventArticles}