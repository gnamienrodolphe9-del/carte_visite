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
// const apropo = document.querySelectorAll(".apropo")

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

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.2
});

reveals.forEach(el => observer.observe(el));

const texts = [
    "Développeur Full Stack",
    "Infographiste",
    "Monteur Vidéo",
    "UI/UX Designer",
];

let index = 0;   // Index du texte actuel mmot actuel dans le tableau
let charIndex = 0;   // Index du caractère actuel position actuel dans le texte
let isDeleting = false;
 
const typingEL = document.querySelector(".typing");

function typeEffect() {
    let currentText = texts[index];

    if (!isDeleting) {
        charIndex++;
        typingEL.textContent = currentText.substring(0, charIndex);
    }else {
        charIndex--;
        typingEL.textContent = currentText.substring(0, charIndex);
    }

    let speed = isDeleting ? 50 : 100;

    // Si le texte est complètement écrit, on attend un moment avant de commencer à supprimer
    if (!isDeleting && charIndex === currentText.length) {
        speed = 1500; // Pause avant de supprimer
        isDeleting = true;
    }

    // Si le texte est complètement supprimé, on passe au texte suivant
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length; // Passe au texte suivant, revient au début si on atteint la fin
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
