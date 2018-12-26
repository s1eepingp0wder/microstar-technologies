let usernameCorrect= false;
let passwordCorrect= false;
window.document.onload= function (e) {
  var IDLE_TIMEOUT = 300; //5 minutes
   var _idleSecondsCounter = 0;
   document.onclick = function() {
   _idleSecondsCounter = 0;
   };
   document.onmousemove = function() {
   _idleSecondsCounter = 0;
   };
   document.onkeypress = function() {
   _idleSecondsCounter = 0;
   };
   window.setInterval(CheckIdleTime, 1000);

   function CheckIdleTime() {
   _idleSecondsCounter++;
   var oPanel = document.getElementById("SecondsUntilExpire");
   if (oPanel)
   oPanel.innerHTML = (IDLE_TIMEOUT - _idleSecondsCounter) + "";
   if (_idleSecondsCounter >= IDLE_TIMEOUT) {
   //alert("Time expired!");
   document.location.href = "https://microstartech.us/admin/login.html";
   }
   }
}
const checkPass= ()=>{
  let confirmPassword= "maliss";
  let password= document.getElementById("pswd").value;
  let passwordForm= document.getElementById("pswd");
  if (password == confirmPassword) {
             //window.location="loggedin.html";
            return passwordCorrect = true;
        } else {
          //console.log("Wrong password");
          location.reload(true);
        };
};
const checkUser= ()=>{
  let confirmUsername= "caeser";
  let username= document.getElementById("user").value;
  let userForm= document.getElementById("user");
  if (username == confirmUsername) {
           //window.location="loggedin.html";
           return usernameCorrect = true;
        } else {
          //console.log("Wrong password");
          location.reload(true);
        };
};
const checkCreds= ()=>{
  checkPass();
  checkUser();
    if (usernameCorrect == true && passwordCorrect == true){
      window.location="loggedin.html";
    } else {
      location.reload(true);
    }
}
