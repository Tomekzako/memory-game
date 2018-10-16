const cards = Array.from(document.querySelectorAll('.card'));
let name = "";
let turnCounter = 0;

function wrongMatch(name) {
    const cards = document.querySelectorAll(`[data-name='${name}']`);
    cards.forEach(card => card.style.background = ('url(img/karta.png)'));
}