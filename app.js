const cards = Array.from(document.querySelectorAll(".card"));
let name = "";
let turnCounter = 0;

cards.forEach(card => {
  card.addEventListener("click", () => {
    let compStyles = window.getComputedStyle(card);
    let opacity = compStyles.getPropertyValue("opacity");
    if (opacity != 0) {
      if (name == "") {
        name = card.dataset.name;
        card.style.background = `url(img/${name}.png)`;
        card.classList.add("active");
      } else if (name != "" && name == card.dataset.name) {
        card.style.background = `url(img/${name}.png)`;
        correctMatch(name);
        turnCounter++;
        name = "";
      } else if (name != "" && name != card.dataset.name) {
        card.style.background = `url(img/${card.dataset.name}.png)`;
        card.classList.add("active");
        wrongMatch(name);
        wrongMatch(card.dataset.name);
        turnCounter++;
        name = "";
      }
    }

    document.querySelector(".score").innerHTML = "Turn counter: " + turnCounter;
  });
});

function correctMatch(name) {
  const cards = document.querySelectorAll(`[data-name='${name}']`);
  cards.forEach(card => {
    card.classList.add("correct");
    setTimeout(() => {
      card.style.opacity = "0";
    }, 1000);
  });
}

function wrongMatch(name) {
  const cards = document.querySelectorAll(`[data-name='${name}']`);
  cards.forEach(card => {
    setTimeout(() => {
      card.classList.remove("active");
      card.style.background = "url(img/karta.png)";
    }, 1000);
  });
}
