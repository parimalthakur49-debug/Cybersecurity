function login(){

let user = document.getElementById("username").value;

let pass = document.getElementById("password").value;


// Demo username password

if(user=="admin" && pass=="12345"){

alert("Login Successful ✅");


document.querySelector(".login-box").style.display="none";

document.getElementById("website").style.display="block";


}

else{

alert("Wrong Username or Password ❌");

}

}