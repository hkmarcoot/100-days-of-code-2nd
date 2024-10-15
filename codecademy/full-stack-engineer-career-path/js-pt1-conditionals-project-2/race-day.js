let raceNumber = Math.floor(Math.random() * 1000);
let isEarly = true;
let age = 10;
if (age > 18 && isEarly === true) {
  raceNumber += 1000;
}
if (age > 18 && isEarly === true) {
  console.log("Runner " + raceNumber + " please race at 9:30am.");
} else if (age > 18 && isEarly === false) {
  console.log("Runner " + raceNumber + " please race at 11:00am.");
} else if (age < 18) {
  console.log("Runner " + raceNumber + " please race at 12:30pm.");
} else {
  console.log("Runner " + raceNumber + " please see the registration desk.");
}
