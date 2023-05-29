// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos!

function getRandomNumberOfTacos() {
  /*
    Make this function return an array that contains 
    between one and ten taco emojis 🌮
    Use the following JavaScript concepts:
        - Math.random()
        - Math.floor()
        - new Array()
        - Array.fill()
    */

  return ["Empty Tray"]; // replace this empty tray array
}

function putTacosOnTray() {
  return getRandomNumberOfTacos()
    .map(function (taco) {
      return `<div class="taco">${taco}</div>`;
    })
    .join("");
}

document.getElementById("tray").innerHTML = putTacosOnTray();

// Link
// https://scrimba.com/learn/javascriptmas/🌮-Taco-Tray-cDzaG7hW?utm_source=convertkit&utm_medium=email&utm_campaign=🎄+JavaScriptmas%3A+Your+Day+6+Challenge+-9571960
