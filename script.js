// Scroll Animation
const items = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {
    items.forEach(item => {
        const position = item.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            item.classList.add("show");
        }
    });
});


// Mouse Sparkle
document.addEventListener("mousemove", e => {

    let sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";

    document.body.appendChild(sparkle);

    setTimeout(()=>{
        sparkle.remove();
    },800);

});


// Back To Top
let btn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){
        btn.style.display="block";
    }else{
        btn.style.display="none";
    }

};

function topPage(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}
