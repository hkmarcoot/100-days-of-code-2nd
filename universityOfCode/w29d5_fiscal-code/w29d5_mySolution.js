const monthNumToLetter = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "H",
  7: "L",
  8: "M",
  9: "P",
  10: "R",
  11: "S",
  12: "T",
};

const vowels = ["A", "E", "I", "O", "U"];

function fiscalCode(obj) {
  var returnStr = "";
  var surname = obj.surname.toUpperCase();
  var surnamevowelsArr = [];
  var surnameconsonantsArr = [];
  var name = obj.name.toUpperCase();
  var namevowelsArr = [];
  var nameconsonantsArr = [];
  var dobArr = obj.dob.split("/");
  var dobDate = dobArr[0];
  var dobMonth = dobArr[1];
  var dobYear = dobArr[2];
  var gender = obj.gender;
  // Put surname into vowels array and consonants array
  for (let i = 0; i < surname.length; i++) {
    if (vowels.some((x) => surname[i] === x)) {
      surnamevowelsArr.push(surname[i]);
    } else {
      surnameconsonantsArr.push(surname[i]);
    }
  }
  // Surname to id logic
  if (surnameconsonantsArr.length >= 3) {
    for (let i = 0; i < 3; i++) {
      returnStr = returnStr.concat(surnameconsonantsArr[i]);
    }
  } else {
    if (surnameconsonantsArr.length === 2 && surnamevowelsArr.length >= 1) {
      for (let i = 0; i < 2; i++) {
        returnStr = returnStr.concat(surnameconsonantsArr[i]);
      }
      returnStr = returnStr.concat(surnamevowelsArr[0]);
    } else if (
      surnameconsonantsArr.length === 1 &&
      surnamevowelsArr.length === 1
    ) {
      returnStr = returnStr.concat(surnameconsonantsArr[0]);
      returnStr = returnStr.concat(surnamevowelsArr[0]);
      returnStr = returnStr.concat("X");
    }
  }
  // Put name into vowels array and consonants array
  for (let i = 0; i < name.length; i++) {
    if (vowels.some((x) => name[i] === x)) {
      namevowelsArr.push(name[i]);
    } else {
      nameconsonantsArr.push(name[i]);
    }
  }
  // Name to id logic
  if (nameconsonantsArr.length === 3) {
    for (let i = 0; i < 3; i++) {
      returnStr = returnStr.concat(nameconsonantsArr[i]);
    }
  } else if (nameconsonantsArr.length > 3) {
    returnStr = returnStr.concat(nameconsonantsArr[0]);
    returnStr = returnStr.concat(nameconsonantsArr[2]);
    returnStr = returnStr.concat(nameconsonantsArr[3]);
  } else {
    if (nameconsonantsArr.length === 2 && namevowelsArr.length >= 1) {
      for (let i = 0; i < 2; i++) {
        returnStr = returnStr.concat(nameconsonantsArr[i]);
      }
      returnStr = returnStr.concat(namevowelsArr[0]);
    } else if (nameconsonantsArr.length === 1 && namevowelsArr.length === 1) {
      returnStr = returnStr.concat(nameconsonantsArr[0]);
      returnStr = returnStr.concat(namevowelsArr[0]);
      returnStr = returnStr.concat("X");
    }
  }
  // dob year to id logic
  returnStr = returnStr.concat(dobYear.slice(-2));

  // dob month to id logic
  returnStr = returnStr.concat(monthNumToLetter[dobMonth]);

  // dob date to id logic
  if (gender === "M") {
    if (parseInt(dobDate) < 10) {
      returnStr = returnStr.concat("0" + dobDate);
    } else {
      returnStr = returnStr.concat(dobDate);
    }
  } else if (gender === "F") {
    returnStr = returnStr.concat((parseInt(dobDate) + 40).toString());
  }

  return returnStr;
}

console.log(
  fiscalCode({
    name: "Matt",
    surname: "Edabit",
    gender: "M",
    dob: "1/1/1900",
  })
);
console.log(
  fiscalCode({
    name: "Helen",
    surname: "Yu",
    gender: "F",
    dob: "1/12/1950",
  })
);
console.log(
  fiscalCode({
    name: "Mickey",
    surname: "Mouse",
    gender: "M",
    dob: "16/1/1928",
  })
);

// Reference
// https://stackoverflow.com/questions/10741899/how-to-select-last-two-characters-of-a-string
// https://www.w3schools.com/jsref/jsref_some.asp

/* Given Helpful Links
 Italian Fiscal Code Card
   - https://en.wikipedia.org/wiki/Italian_fiscal_code
 String.prototype.match()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
*/
