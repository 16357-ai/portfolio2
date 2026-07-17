// Typing Effect

let text = "Dream • Learn • Grow 🌸";

let i = 0;


function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,100);

}

}


typing();



// Dark Mode

const darkBtn =
document.getElementById("darkBtn");


darkBtn.onclick=function(){

document.body.classList.toggle("dark");


}



// Back To Top

let topBtn =
document.getElementById("topBtn");


window.onscroll=function(){

if(document.documentElement.scrollTop > 300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

}



topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}



// หัวใจเมื่อคลิก

document.addEventListener(
"click",
function(e){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💗";

heart.style.left=e.pageX+"px";

heart.style.top=e.pageY+"px";


document.body.appendChild(heart);


setTimeout(()=>{

heart.remove();

},1000);


}

);



// สร้างกลีบดอกไม้เพิ่ม

setInterval(()=>{


let flower=document.createElement("div");

flower.className="sakura";


flower.style.left=Math.random()*100+"%";

flower.style.animationDuration=
(5+Math.random()*5)+"s";


document.body.appendChild(flower);


setTimeout(()=>{

flower.remove();

},10000);


},500);
