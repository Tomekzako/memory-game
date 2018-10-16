const cards = Array.from(document.querySelectorAll('.card'));
let name = "";
let turnCounter = 0;

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (name == '') {
            name = card.dataset.name;
            card.style.background = (`url(img/${name}.png)`);
            card.classList.add('active');
        } else if (name != '' && name == card.dataset.name) {
            card.style.background = (`url(img/${name}.png)`);
            correctMatch(name);
            turnCounter++;
            name = '';
        } else if (name != '' && name != card.dataset.name) {
            wrongMatch(name);
            turnCounter++;
            name = '';
        }

        document.querySelector('.score').innerHTML = "Turn counter: " + turnCounter;
    });
})



function correctMatch(name) {
    const cards = document.querySelectorAll(`[data-name='${name}']`);
    cards.forEach(card => {
        card.classList.add('correct');
        setTimeout(() => {
            card.style.visibility = 'hidden'
        }, 1500);
    });
}

function wrongMatch(name) {
    const cards = document.querySelectorAll(`[data-name='${name}']`);
    cards.forEach(card => card.style.background = ('url(img/karta.png)'));
}