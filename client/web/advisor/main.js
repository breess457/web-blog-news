
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
              linkSub = createElement('a'),teamBio = createElement('div'),txtName = createElement('h4')
              ,textPosition = createElement('h5'),viewBtn = createElement('a')

    /* Add Style */
        col3_sm6.className = "col-lg-3 col-sm-6";
        divTeam.className = "team-single wow zoomIn";
        teamThumb.className = "team-thumb";
        imageTeam.className = "image-article";
        iconsMedia.className = "social-icons style-2";
        linkUsr.className = "fas fa-search";
        linkSub.className = "fas fa-bell";
        teamBio.className = "team-bio";
        viewBtn.className = "btn btn-sm btn-outline-primary"
    /* appendChaild */
        AppendChild(document.getElementById("getByOutTeam"),col3_sm6)
         AppendChild(col3_sm6,divTeam)
          AppendChild(divTeam,teamThumb)
           AppendChild(teamThumb,imageTeam)
           AppendChild(teamThumb,iconsMedia)
           // AppendChild(iconsMedia,linkSub)
            //AppendChild(iconsMedia,linkUsr)
          AppendChild(divTeam,teamBio)
           AppendChild(teamBio,txtName)
           AppendChild(teamBio,textPosition)
           AppendChild(viewBtn,linkUsr)
           AppendChild(teamBio,viewBtn)

    /* set get data article */
        txtName.innerHTML = autherDatamapping.fullname;
        textPosition.innerHTML = autherDatamapping.position;
        checkImgStatus(autherDatamapping,imageTeam);
        viewBtn.innerHTML = "views"
        viewBtn.setAttribute('href',`../detail-advisor/index.html?id_advisor=${autherDatamapping.doctor_id}`)

    })
}

export {getElementByOurteam}