const DataSession = JSON.parse(sessionStorage.getItem("userSession"));
import { EventSession, renderEvent } from "../function/render.js";

class Navbars extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <nav class="navbar navbar-expand-md mb-4 top-bar navbar-static-top sps sps--abv">
              <div class="container i-menu">
                <a class="navbar-brand" style="color: rebeccapurple" href="#">บทความ สูขภาพ</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="fas fa-list text-primary" size="2x"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a class="nav-item nav-link" href="client/web/index/"> <i class="fad fa-home"></i> Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-item nav-link" href="client/web/advisor/"><i class="fas fa-user-md"></i> advisor</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-item nav-link" href="client/web/article/"><i class="fas fa-newspaper"></i> Healthy Article</a>
                    </li>
                    <li class="nav-item dropdown" id="locks"></li>
                  </ul>
                </div>
              </div>
            </nav>
        `;
  }
}
customElements.define("navbar-apps", Navbars);

class NavbarsTrue extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <nav class="navbar navbar-expand-md mb-4 top-bar navbar-static-top sps sps--abv">
              <div class="container i-menu">
                <a class="navbar-brand" style="color: rebeccapurple" href="#">บทความ สูขภาพ</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="fas fa-list text-primary" size="2x"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a class="nav-item nav-link" href="../index/"> <i class="fad fa-home"></i> Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-item nav-link" href="../advisor/"><i class="fas fa-user-md"></i> advisor</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-item nav-link" href="../article/"><i class="fas fa-newspaper"></i> Healthy Article</a>
                    </li>
                    <li class="nav-item dropdown" id="locksTrue"></li>
                  </ul>
                </div>
              </div>
            </nav>
        `;
  }
}
customElements.define("navbar-apps-true", NavbarsTrue);


EventSession(DataSession, renderEvent);

class Carousels extends HTMLElement {
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
                      <img src="Assets/image/q11.jpeg" class="d-image d-block" />
                      <div class="carousel-caption d-md-block hero">
                          <h2 class="display-4">Advisor</h2>
                          <p class="lead">Advisor lernMore Where You peplo</p>
                      </div>
                    </div>
                    <div class="carousel-item ">
                      <img src="Assets/image/122ge.jpg" class="d-image d-block" />
                      <div class="carousel-caption d-md-block hero">
                          <h2 class="display-4">Advisor</h2>
                          <p class="lead">Advisor lernMore Where You peplo</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src="Assets/image/see.jpg" class="d-image d-block" />
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
customElements.define("carousel-apps", Carousels);


class LoginModal extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
            <div class="modal fade" id="modalLogin"
              tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hiddle="true"
            >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header border-bottom-0">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="form-title text-center">
                        <h4>Login</h4>
                      </div>
                      <div class="d-flex flex-column text-center">
                        <form id="myLoginForm">
                          <div class="form-group">
                            <input type="text" class="form-control" id="Iemail"placeholder="Your email address...">
                          </div>
                          <div class="form-group">
                            <input type="password" class="form-control" id="Ipassword" placeholder="Your password...">
                          </div>
                          <button type="submit" class="btn btn-info btn-block btn-round">Login</button>
                        </form>
                      </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                      <div class="signup-section">Not a member yet? <a id="linkAttr" class="text-info"> Sign Up</a>.</div>
                    </div>
                  </div>
                </div>
            </div>
        `;
  }
}
customElements.define("modal-login-apps", LoginModal);

function checkPath(locationPage){
  let linkAttr = document.getElementById("linkAttr");

  if(locationPage === '/WebDoctor-True/'){
      linkAttr.setAttribute("href", "client/web/signup/");
  }else if (locationPage === "/WebDoctor-True/index.html") {
      linkAttr.setAttribute("href", "client/web/signup/");
  } else {
    linkAttr.setAttribute("href", "../signup/");
  }
}
checkPath(window.location.pathname)