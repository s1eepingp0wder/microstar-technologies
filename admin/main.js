let usernameCorrect= false;
let passwordCorrect= false;

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
