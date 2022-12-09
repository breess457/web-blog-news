
const LoginForm = document.getElementById("myLoginForm");
const InputLogin = (inputID) => {
  return document.getElementById(inputID).value;
};
const ModalCheckEventLogin = (DataMessage) => {
  if (DataMessage.status === 401) {
    Swal.fire({
      title: DataMessage.msg,
      icon: "error",
      showConfirmButton: true,
    });
  } else if (DataMessage.status === 201) {
    Swal.fire({
      icon: "success",
      title: DataMessage.msg,
      text: `Get session id user ${DataMessage.session}`,
      type: "success",
      confirmButtonText: `ตกลง`,
    }).then((result) => {
        const getSession = [
          {
            sessionID: DataMessage.session,
            sessionFullname: DataMessage.sessionfullname,
          },
        ];
        sessionStorage.setItem("userSession", JSON.stringify(getSession));
        location.reload()
    });
  } else if (DataMessage.status === 200) {
    Swal.fire({
      icon: "success",
      title: DataMessage.msg,
      text: `Get session id advisor ${DataMessage.session}`,
      type: "success",
      confirmButtonText: `ตกลง`,
    }).then((show) => {
      
        const getSessionAdvisor = [
          {
            sessionID: DataMessage.session,
            sessionFullname: DataMessage.sessionfullname,
          },
        ];
        sessionStorage.setItem(
          "advisorSession",
          JSON.stringify(getSessionAdvisor)
        );
          if(window.location.pathname === '/WebDoctor-True/'){
              window.location = "client/job/article/";
          }else if(window.location.pathname === '/WebDoctor-True/index.html'){
              window.location = "client/job/article/";
          }else{
              window.location = "../../job/article/";
          }
    });
  }
};

LoginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("http://localhost/WebDoctor-True/Api/components/user/data.login.php", {
    method: "POST",
    body: JSON.stringify({
      Iemail: InputLogin("Iemail"),
      Ipassword: InputLogin("Ipassword"),
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((request) => request.json())
    .then((DataStatus) => ModalCheckEventLogin(DataStatus))
    .catch((error) => console.log(`error fetch api in : ${error}`));
});
