const checkPass= ()=>{
  let confirmPassword= "admin";
  let password= document.getElementById("pswd").value;
  let passwordForm= document.getElementById("pswd");
  if (password == confirmPassword) {
             window.location="loggedin.html";
        } else {
          //console.log("Wrong password");
          location.reload(true);
        };
};
