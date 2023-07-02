function avgSpeed(upTime, upSpd, downSpd) {
  upDistance = (upSpd * upTime) / 60;
  downTime = (upDistance / downSpd) * 60;
  totalDistance = 2 * upDistance;
  totalTime = upTime + downTime;
  return totalDistance / (totalTime / 60);
}

console.log(avgSpeed(18, 20, 60));
console.log(avgSpeed(30, 10, 30));
console.log(avgSpeed(30, 8, 24));

/* Given Helpful Links
 Calculate Average Speed
   - https://www.wikihow.com/Calculate-Average-Speed
*/
