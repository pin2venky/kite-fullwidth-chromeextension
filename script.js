
function toggle(){
	
var btn = document.getElementById("toggleBtn");
if(btn.innerHTML == 'Hide'){
	btn.innerHTML = "UnHide";
	document.getElementsByClassName("container-left")[0].style.display="block";
}
else{
	btn.innerHTML = "Hide";
	document.getElementsByClassName("container-left")[0].style.display="none";
}
}


var container_left = document.body.getElementsByClassName("container-left")[0];

var header = document.body.getElementsByClassName("header-right")[0];
var button = document.createElement("button");
button.setAttribute("id","toggleBtn");
button.innerHTML = "Hide";
button.addEventListener("click", toggle);
header.appendChild(button);
