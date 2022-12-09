
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
      let GetArticle = document.getElementById("getByArticle");
      
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

export {GetEventArticles}