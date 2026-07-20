window.addEventListener("load",function(){

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1800);

});
const toggle=document.getElementById("themeToggle");

toggle.onclick=function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
toggle.innerHTML="☀";
}else{
toggle.innerHTML="🌙";
}

}
