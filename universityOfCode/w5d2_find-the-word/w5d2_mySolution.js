function findWord(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (/^[a-z]+$/g.test(str[i])) {
      newStr = newStr.concat(str[i]);
    }
  }
  return newStr;
}

// Reference:
// https://code.likeagirl.io/regex-to-test-for-lowercase-characters-a51291f52f14
