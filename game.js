function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const button = document.querySelector("#myButton");
const diceImage = document.querySelector("#diceImage");
button.addEventListener("click", () => { 
    let x = getRandomInRange(1, 6);
    diceImage.src = `img/dice${x}.png`;
});