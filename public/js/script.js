

const texts = [
    "Vous êtes ici pour une raison.",
    "Prenez un instant… observez… ressentez.",
    "Tout ce que vous allez découvrir ",
    "a été pensé pour marquer."
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