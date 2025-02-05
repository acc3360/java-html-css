/*let username ;
username = window.prompt("what is you user name")
console.log(username);*/
let  username ;
document.getElementById("myuser").onclick = function(){
 username = document.getElementById("user").value;
 document.getElementById("y1").textContent = `Hello ${username}`

}