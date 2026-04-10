const btn = document.getElementById("theme-btn");

/* vérifier si un thème est déjà enregistré */
if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark-mode");
btn.textContent = "☀️";
}

btn.onclick = function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
btn.textContent = "☀️";
localStorage.setItem("theme","dark");
}else{
btn.textContent = "🌙";
localStorage.setItem("theme","light");
}
};


// On récupère les éléments HTML
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

// Quand on clique sur le burger
burger.addEventListener("click", function() {

  // Ajoute ou enlève la classe "active"
nav.classList.toggle("active");

});

/* ANIMATION SCROLL */
const containers = document.querySelectorAll(".container");
const line = document.getElementById("line");

window.addEventListener("scroll",()=>{

let maxHeight = 0;

containers.forEach(el=>{
const top = el.getBoundingClientRect().top;
const screen = window.innerHeight;

if(top < screen - 100){
el.style.opacity="1";
el.style.transform="translateY(0)";
maxHeight = el.offsetTop;
}
});

line.style.height = maxHeight + "px";

 });


// const img = document.querySelector('.img');

// window.addEventListener('')

const images = document.querySelectorAll(".hero img, .carte img");

window.addEventListener("scroll", () => {
    images.forEach(img => {
        const top = img.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (top < screen - 100) {
            img.style.opacity = "1";
            img.style.transform = "translate(0)";
        }
    });
});

