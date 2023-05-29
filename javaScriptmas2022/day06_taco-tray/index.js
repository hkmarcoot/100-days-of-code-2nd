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
  //Reference:
  //https://medium.com/@wisecobbler/4-ways-to-populate-an-array-in-javascript-836952aea79f
  //https://javascript.info/array
  //https://www.w3schools.com/jsref/jsref_fill.asp
  //https://www.w3schools.com/js/js_random.asp
  let num = Math.floor(Math.random() * 10) + 1;
  let arr = new Array(num).fill("🌮", 0, num);
  //console.log(arr);
  return arr;
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
// https://scrimba.com/scrim/co4e3427fb478f3f35b88a619
