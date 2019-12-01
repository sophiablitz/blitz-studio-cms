let outlet;
let currentProfile;

window.addEventListener("load", onload);

function onload(){
  outlet = document.getElementById("outlet");
  goToLogin();
}

/*******************
 * Page Navigation *
 *******************/
function goToLogin(){
  currentProfile = null;
  outlet.innerHTML = LOGIN_TEMPLATE;
  const userSection = document.getElementById("user-profiles");
  for (let user of userData){
    let div = document.createElement("div");
    div.className = "user-profile";
    let h1 = document.createElement("h1");
    h1.innerText = user.name;
    div.appendChild(h1);
    div.addEventListener("click",()=>{currentProfile = user; goToProfile()});
    userSection.appendChild(div);
  }
  history.pushState({ page: 1 }, "Login", "?page=1");
}

function goToProfile(){
  outlet.innerHTML = PROFILE_TEMPLATE;
  //display user data
  document.getElementById("profile-name").innerHTML = currentProfile.name;
  document.getElementById("profile-student").innerHTML = (currentProfile.student) ? "Student" : "";
  document.getElementById("profile-balance").innerHTML = "Balance: $" + parseInt(currentProfile.balance).toFixed(2);
  document.getElementById("profile-email").innerHTML = currentProfile.email;
  displaySelectedPaymentMethod(document.getElementById(currentProfile.prefPayment));

  //display classes offered tonight
  document.getElementById("class-list").innerHTML = CLASS_OPTIONS_TEMPLATE;
  let today = new Date().getDay();
  today = convertToDayOfWeek(today);

  let classes = document.getElementsByClassName(today);
  for (let el of classes) {
    el.classList.remove("hidden");
    el.addEventListener("click",function() {this.classList.toggle("selected"); recalculateTotal();});
  }

  document.getElementById("due").innerHTML = "$0";

  history.pushState({ page: 2 }, "Profile", "?page=2");
}

function goToUpdateInfo(){
  outlet.innerHTML = UPDATE_PROFILE_TEMPLATE;

  document.getElementById("name").value = currentProfile.name;
  document.getElementById("email").value = currentProfile.email;
  document.getElementById("student").value = currentProfile.student;
  document.getElementById("pref-payment").value = currentProfile.prefPayment;
}
function goToCreateUser(){
  outlet.innerHTML = NEW_PROFILE_TEMPLATE;

  document.getElementById("name").value = currentProfile.name;
  document.getElementById("email").value = currentProfile.email;
  document.getElementById("student").value = currentProfile.student;
  document.getElementById("pref-payment").value = currentProfile.prefPayment;
}

/******************
 * Event Handlers *
 ******************/

function onClickSubmitSignIn(){
  //TODO save data
  goToLogin();
}
function onClickSaveProfileChanges(){
  // validate data or show errors  
  if(validateProfileData()){

    // save data
    currentProfile.name = document.getElementById("name").value;
    currentProfile.email = document.getElementById("email").value;
    currentProfile.student = (document.getElementById("student").value =='true');
    currentProfile.prefPayment = document.getElementById("pref-payment").value;
    
    // TODO send post request


    // TODO determine previous page and return
    goToProfile();
  }
}
function onClickPaymentMethod(el){
  displaySelectedPaymentMethod(el);
}
function onClickCreateNewUser(){
  const nextID = userData[(userData.length-1)].id;
  currentProfile = {id: nextID, name: "", student: false, email: "", prefPayment: "Cash", balance: 0};
  goToCreateUser();
}
function onClickCancelCreateProfile(){
  goToLogin();
}
function onClickAddNewProfile(){

  if (validateProfileData()) {

    // save data
    currentProfile.name = document.getElementById("name").value;
    currentProfile.email = document.getElementById("email").value;
    currentProfile.student = (document.getElementById("student").value == 'true');
    currentProfile.prefPayment = document.getElementById("pref-payment").value;
    userData.push(currentProfile);
    console.log("current users in data: " + userData.length);
    // TODO send post request

    // TODO determine previous page and return
    goToProfile();
  }

}

/********************
 * Helper Functions *
 ********************/
function validateProfileData(){
  let errorMessage = "";
  let valid = true;
  let name = document.getElementById("name").value;
  if(name != currentProfile.name){
    if(0 < userData.reduce( (out,user)=>{if(user.name == name){out++;} return out},0)){
      errorMessage += "Invalid Name: cannot be duplicate name. <br>";
      valid = false;
    }
  }
  if (document.getElementById("email").value.length == 0){
    errorMessage += "Invalid Email: email address is requried. <br>";
    valid = false;
  }
  if (document.getElementById("student").value.length == 0) {
    errorMessage += "Invalid Current MUM Student Status: MUM student status is requried. <br>";
    valid = false;
  }
  if(!valid){
    let errorDiv = document.getElementById("profileUpdateErrorDiv")
    errorDiv.innerHTML = errorMessage;
    errorDiv.classList.remove("hidden");
  }
  return valid;
}

function recalculateTotal(){
  if(currentProfile.student){
    document.getElementById("due").innerHTML = `$0`;
  }
  else {
    let selectedClasses = document.getElementsByClassName("selected class");

    document.getElementById("due").innerHTML = `$${selectedClasses.length * 5} - $${selectedClasses.length * 10}`;

  }
}
function displaySelectedPaymentMethod(el){
  let buttons = document.getElementsByClassName("payment-btn");
  for (let btn of buttons){
      btn.classList.remove("selected");
  }
  el.classList.add("selected");
}
function convertToDayOfWeek(num){
  const week = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  return week[num];
}