function timeToEat(str) {
  var tempStr = str.split(" ");
  var tempStrTime = tempStr[0].split(":");
  var tempHour = parseInt(tempStrTime[0]);
  var tempMinute = parseInt(tempStrTime[1]);
  var breakfastTime = 7 * 60 * 60;
  var lunchTime = 12 * 60 * 60;
  var dinnerTime = (12 + 7) * 60 * 60;
  var diff = 0;
  if (tempStr[1] === "a.m.") {
    if (tempHour === 12) {
      var tempTotalSecond = 0;
    } else {
      var tempTotalSecond = tempHour * 60 * 60 + tempMinute * 60;
    }
  }
  if (tempStr[1] === "p.m.") {
    if (tempHour === 12) {
      var tempTotalSecond = 12 * 60 * 60 + tempMinute * 60;
    } else {
      var tempTotalSecond = (12 + tempHour) * 60 * 60 + tempMinute * 60;
    }
  }

  //Counting seconds difference
  if (tempTotalSecond <= breakfastTime) {
    // breakfast
    diff = breakfastTime - tempTotalSecond;
  } else if (tempTotalSecond > breakfastTime && tempTotalSecond <= lunchTime) {
    //lunch
    diff = lunchTime - tempTotalSecond;
  } else if (tempTotalSecond > lunchTime && tempTotalSecond <= dinnerTime) {
    //dinner
    diff = dinnerTime - tempTotalSecond;
  } else if (tempTotalSecond > dinnerTime) {
    // breakfast
    diff = 24 * 60 * 60 - tempTotalSecond + 7 * 60 * 60;
  }

  return toHoursAndMinutes(diff);
}

function toHoursAndMinutes(totalSeconds) {
  const totalMinutes = Math.floor(totalSeconds / 60);
  // const seconds = totalSeconds % 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return [hours, minutes];
}

console.log(timeToEat("2:00 p.m."));
console.log(timeToEat("5:50 a.m."));
console.log(timeToEat("6:37 p.m."));
console.log(timeToEat("12:00 a.m."));
console.log(timeToEat("11:58 p.m."));

// Reference:
// https://codingbeautydev.com/blog/javascript-convert-seconds-to-hours-and-minutes/
