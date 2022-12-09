const getsessionData = JSON.parse(sessionStorage.getItem("advisorSession"));
import {Elsession,FetchDataEvent,chkProfileID} from '../function/job.render.js';

class DashboardNavigationBar extends HTMLElement {
  connectedCallback() {
    this.xenDer();
  }
  xenDer() {
    this.innerHTML = `
        
            <div class="container-fluid">
                <button class="navbar-toggler" type="button"
                 data-toggle="collapse" data-target="#navbarSupperDashboard"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand pt-0 text-info" target="_blank">
                    Page Advisor
                </a>

                <div class="collapse navbar-collapse" id="navbarSupperDashboard">
                    <div class="avartar">
                      <div id="profileGet"></div>
                        <h3 class="text text-center mt-2" id="fullname">user name</h3>
                    </div>
                    <ul class="navbar-nav mt-2">
                        <li class="nav-item">
                            <a class="nav-link text-center" href="../article/">
                                <i class="fab fa-microsoft text-info"></i> DasgBoard(index)
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-center" href="../profile/">
                               <i class="fas fa-user-circle text-white"></i> ProFile
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        
      `;
  }
}
customElements.define("apps-dashboard", DashboardNavigationBar);

Elsession(getsessionData, FetchDataEvent, chkProfileID);

class NavbarStaff extends HTMLElement {
  constructor() {
    super();
  }
  get count() {
    return this.getAttribute("count");
  }

  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
            <nav class="navbar navbar-expand-md mb-4 top-bar navbar-static-top bg-purple sps sps--abv" id="navbar-main">
                <div class="container i-menu">
                  <a class="h3 mb-0 text-white text-uppercase d-none d-lg-inline-block" id="txt-head">
                   <i class="${this.count}"></i> ${this.id}
                  </a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <button class="btn btn-outline-info" id="logout">Logout <i class="fas mt-1 fa-power-off"></i></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
  }
}
customElements.define("apps-navbar", NavbarStaff);

document.getElementById('logout').onclick = ()=>{
    Swal.fire({
      icon: "success",
      title: "Logout Success",
      confirmButtonText: `Ok`,
    }).then((res) => {
      sessionStorage.removeItem("advisorSession");
      sessionStorage.clear();
      window.location = '../../../index.html'
    });
}