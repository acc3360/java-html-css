// const = a varible that can't be changed 
const pi = 3.14159 ;
let radius ;
let circumference ;

document.getElementById("mysubmit").onclick = function()
{
    radius = document.getElementById("mytext").value ;
    radius = Number(radius);
    circumference = 2 * pi * radius ;
    document.getElementById("h3").textContent = circumference ;
    
}



