$(document).ready(function () {
  $(".login-info-box").fadeOut();
  $(".login-show").addClass("show-log-panel");
});

$('.login-reg-panel input[type="radio"]').on("change", function () {
  if ($("#log-login-show").is(":checked")) {
    $(".register-info-box").fadeOut();
    $(".login-info-box").fadeIn();

    $(".white-panel").addClass("right-log");
    $(".register-show").addClass("show-log-panel");
    $(".login-show").removeClass("show-log-panel");
  } else if ($("#log-reg-show").is(":checked")) {
    $(".register-info-box").fadeIn();
    $(".login-info-box").fadeOut();

    $(".white-panel").removeClass("right-log");

    $(".login-show").addClass("show-log-panel");
    $(".register-show").removeClass("show-log-panel");
  }
});

$(function () {
  $(".c-box").click(function () {
    if ($(this).prop("checked") == true) {
      var indexOBJ = $(this).index(".c-box");
      $(".c-box")
        .not(":eq(" + indexOBJ + ")")
        .prop("checked", false);
    }
  });
});

class FormLogin extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <form id="userForm">
			      <div class="row">
                <input type="text" id="fname" class="form-control f-name ml-3" placeholder="fersName" required>
                <input type="text" id="lname" class="form-control ml-2 l-name" placeholder="lastName" required>
			      </div>
			      <input type="email" id="email" class="form-control mt-3" placeholder="Email" required>
			      <input type="password" id="passwd" class="form-control mt-3" placeholder="Password" required>
			      <label for="sex" class="mt-0 mb-0">เพศ</label>
			      <div class="form-group row">
			        <div class="checkbox ml-3">
			      	  <label for="" class="btn btn-outline-primary">
			      		<input type="checkbox" class="mt-1 c-box" id="man" name="chk-sex" value="man" checked="checked">
			      		&nbsp;เพศชาย
			      	  </label>
			        </div>
			        <div class="checkbox ml-3">
			      	  <label for="" class="btn btn-outline-danger">
			      		<input type="checkbox" class="mt-1 c-box" id="woman" name="chk-sex" value="woman">
			      		&nbsp;เพศหญิง
			      	  </label>
			        </div>
			      </div>
			      <button type="submit" id="btnAlluser"><i class="fas fa-sign-in-alt"></i> LogIn</button>
			    </form>
			      
        `;
  }
}
customElements.define("main-login", FormLogin);

class FormRegister extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <form action="" id="advisorForm">
				<div class="row">
          <input type="text" id="fnameA" class="form-control f-name ml-3" placeholder="fersName" required>
          <input type="text" id="lnameA" class="form-control ml-2 l-name" placeholder="lastName" required>
				</div>
				<input type="email" id="emailA" class="form-control mt-3" placeholder="Email" required>
				<input type="password" id="passwdA" class="form-control mt-3" placeholder="Password" required>
				<label for="sex" class="mt-0 mb-0">เพศ</label>
				<div class="form-group row">
				  <div class="checkbox ml-3">
					  <label for="" class="btn btn-outline-primary">
						<input type="checkbox" class="mt-1 c-box" name="sex" value="man" checked="checked">
						&nbsp;เพศชาย
					  </label>
				  </div>
				  <div class="checkbox ml-3">
					  <label for="" class="btn btn-outline-danger">
						<input type="checkbox" class="mt-1 c-box" name="sex" value="woman">
						&nbsp;เพศหญิง
					  </label>
				  </div>
				</div>
				<input type="submit" value="Register">
			</form>
        `;
  }
}
customElements.define("main-signup", FormRegister);

//Loop BertDays swit off
function xLoop(Numm, getID, text, numDefault) {
  var txt = "";
  var x;
  for (x = numDefault; x <= Numm; x++) {
    if (x === numDefault) {
      txt += `<option value =${text}>${text}</option>`;
    } else {
      txt += `<option value=${x}>${x}</option>`;
    }
  }
  document.getElementById(getID).innerHTML = txt;
}
/* End  Loop BertDays*/
