// COUNTER PROGRAM  
const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countlabble = document.getElementById("countlabble");
let count = 0 ;

decreasebtn.onclick = function(){
    count -- ;
    countlabble.textContent = count ;
}
resetbtn.onclick = function(){
    count = 0  ;
    countlabble.textContent = count ;
}
increasebtn.onclick = function(){
    count ++ ;
    countlabble.textContent = count ;
}
