const getSleepHours = (day) => {
  switch (day.toLowerCase()) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 9;
      break;
    case "wednesday":
      return 7;
      break;
    case "thursday":
      return 6;
      break;
    case "friday":
      return 5;
      break;
    case "saturday":
      return 4;
      break;
    case "sunday":
      return 4;
      break;
  }
};

const getActualSleepHours = () => {
  let total = 0;
  total += getSleepHours("Monday");
  total += getSleepHours("Tuesday");
  total += getSleepHours("Wednesday");
  total += getSleepHours("Thursday");
  total += getSleepHours("Friday");
  total += getSleepHours("Saturday");
  total += getSleepHours("Sunday");

  return total;
};

const getIdealSleepHours = () => {
  const idealHours = 9;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got more sleep than needed. The hours you are over is: " +
        (actualSleepHours - idealSleepHours)
    );
  } else {
    console.log(
      "You should get some rest. The hours you are under is: " +
        (idealSleepHours - actualSleepHours)
    );
  }
};
console.log(calculateSleepDebt());
