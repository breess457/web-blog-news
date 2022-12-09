
const examplesContentBlock = dataObjectArticle =>{
    let createEventTag = function(tagHtml){
        return document.createElement(tagHtml)
    }
    let parendObject = function(cover,bind){
        return cover.appendChild(bind)
    }
    return dataObjectArticle.map(resultDataMap =>{
        let tadIdMaterial = document.getElementById("MaterialId");
        let divTree = createEventTag('div'),htitle = createEventTag('h3'),image = createEventTag('img'),
            divRow = createEventTag('div'),divFooter = createEventTag('div'),mainPost = createEventTag('small'),
            classImg = createEventTag('div'),disContent = createEventTag('div'),textContent = createEventTag('p'),
            mainType = createEventTag('small'),mainFooterTrue = createEventTag('div'),btnView = createEventTag('a'),
            doctorName = createEventTag('small'),docotrPosition = createEventTag('small'),age = createEventTag('small'),sex = createEventTag('small')

        divRow.className = "row col-md-12"
        htitle.className = "title text-grean font-th col-12";
        divTree.className = "col-md-4"
        classImg.className = "main-img"
        disContent.className = "col-md-8 row"
        textContent.className = "mt-4 col-md-12"
        divFooter.className = "col-md-12 row mb-0"
        mainPost.className = "ml-auto mr-4"
        mainFooterTrue.className = "col-md-12 mt-0 row"
        doctorName.className = "text-grean mt-2"
        docotrPosition.className = "text-bulder mt-2"
        age.className = "text-info mt-2"
        sex.className = "text-danger mt-2"
        btnView.className = "btn-small"
    
        image.src = `http://localhost/WebDoctor-True/Api/environment/image-article/${resultDataMap.image_article}`;
        htitle.innerHTML = resultDataMap.text_subject
        textContent.innerHTML = resultDataMap.text_contents
        mainPost.innerHTML = `เผยแพร่เมื่อ: ${resultDataMap.dete_time}`
        mainType.innerHTML = `ประเภท: ${resultDataMap.content_type}`
        doctorName.innerHTML = `เขียนโดย: ${resultDataMap.fullname}`
        docotrPosition.innerHTML = `&nbsp;&nbsp;เป็น: ${resultDataMap.position}`;
        age.innerHTML = `&nbsp;&nbsp;อายุ: ${resultDataMap.age}`
        sex.innerHTML = `&nbsp;&nbsp;เพศ: ${resultDataMap.sex}`
        btnView.innerHTML = 'view'

        parendObject(classImg,image)
        parendObject(divTree,classImg)
        parendObject(disContent,htitle)
        parendObject(disContent,textContent)
        parendObject(divFooter,mainPost)
        parendObject(divFooter, mainType)
        parendObject(disContent,divFooter)
        parendObject(mainFooterTrue,doctorName)
        parendObject(mainFooterTrue,docotrPosition)
        parendObject(mainFooterTrue,age)
        parendObject(mainFooterTrue,sex)
        parendObject(mainFooterTrue,btnView)
        parendObject(disContent,mainFooterTrue)
        parendObject(divRow,divTree)
        parendObject(divRow,disContent)
        parendObject(tadIdMaterial,divRow)
        btnView.setAttribute("href", `../detail-advisor/index.html?id_advisor=${resultDataMap.id_member_doctor}`);
    })
}

export{examplesContentBlock}