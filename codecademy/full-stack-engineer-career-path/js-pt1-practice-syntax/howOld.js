function howOld(age, year) {
  const currentYear = 2024;
  const bornYear = currentYear - age;
  const calculatedAge = Math.abs(year - bornYear);
  if (year > currentYear) {
    return `You will be ${calculatedAge} in the year ${year}`;
  } else if (year < bornYear) {
    return `The year ${year} was ${calculatedAge} years before you were born`;
  } else if (year < currentYear && year > bornYear) {
    return `You were ${calculatedAge} in the year ${year}`;
  }
}
