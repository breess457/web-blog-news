/* checkEventUser */
const renderEvent = (getEvt) => {
  const checkID = document.getElementById("locks");
  const checkTrue = document.getElementById("locksTrue");
  if (getEvt === null) {
    if (
      window.location.pathname === "/WebDoctor-True/" ||
      window.location.pathname === "/WebDoctor-True/index.html"
    ){
        checkID.innerHTML = `
        <button type="button"
          class="btn btn-outline-success btn-sm mt-1 ml-2"
          data-toggle="modal" data-target="#modalLogin"
        >
          <i class="fas fa-sign-in-alt"></i> Login
        </button>
      `;
    }else{
        checkTrue.innerHTML = `
        <button type="button"
          class="btn btn-outline-success btn-sm mt-1 ml-2"
          data-toggle="modal" data-target="#modalLogin"
        >
          <i class="fas fa-sign-in-alt"></i> Login
        </button>
      `;
    }
  } else {
    if (window.location.pathname === "/WebDoctor-True/" || window.location.pathname === "/WebDoctor-True/index.html") {
      checkID.innerHTML = `
        <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-user"></i>&nbsp;${getEvt}
        </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="client/web/profile/">profile</a>
            <button class="dropdown-item" type="submit" id="myLogout">Logout</button>
          </div>
      `;
      document.getElementById("myLogout").onclick = function () {
        refechPage();
      };
    }else{
      checkTrue.innerHTML = `
        <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-user"></i>&nbsp;${getEvt}
        </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="../profile/">profile</a>
            <button class="dropdown-item" type="submit" id="myLogoutTrue">Logout</button>
          </div>
      `;
      document.getElementById("myLogoutTrue").onclick = function () {
        refechPageTrue();
      };
    }

    const refechPage = () => {
      location.reload();
      sessionStorage.removeItem("userSession");
      sessionStorage.clear();
    };
    const refechPageTrue = () => {
      window.location = '../../../index.html'
      sessionStorage.removeItem("userSession");
      sessionStorage.clear();
    };
  }
};

/* result session */
const EventSession = (getDataSession, userEventCallback) => {
  let listEvent = "";
  let i;
  if (getDataSession === null) {
    userEventCallback(null);
    console.log(getDataSession);
  } else {
    for (i = 0; i < getDataSession.length; i++) {
      listEvent += getDataSession[i].sessionFullname;
    }
    userEventCallback(listEvent);
    console.log(listEvent);
  }
};

export {renderEvent, EventSession}
