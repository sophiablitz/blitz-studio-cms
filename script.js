let outlet;

window.addEventListener("load", onload);

function onload(){
  outlet = document.getElementById("outlet");
  goToLogin();
}

function goToLogin(){
  outlet.innerHTML = LOGIN_TEMPLATE;
  const users = document.getElementsByClassName("user-profile");
  for (let user of users){
    user.addEventListener("click",goToProfile);
  }
  history.pushState({ page: 1 }, "Login", "?page=1");
}

function goToProfile(){
  let name = this.dataset.name;
  let student = eval(this.dataset.student);
  let balance = this.dataset.balance;
  outlet.innerHTML = PROFILE_TEMPLATE;

  //display user data
  document.getElementById("profile-name").innerHTML = name;
  document.getElementById("profile-student").innerHTML =  (student) ? "Student" : "";
  document.getElementById("profile-balance").innerHTML = "Balance: $" + parseInt(balance).toFixed(2);


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
function recalculateTotal(){
  let selected = document.getElementsByClassName("selected class");

  document.getElementById("due").innerHTML = `$${selected.length * 5} - $${selected.length * 10}`;
}
function selectPaymentMethod(el){
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