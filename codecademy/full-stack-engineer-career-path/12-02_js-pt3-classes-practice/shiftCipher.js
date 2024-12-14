// Write class below
class ShiftCipher {
  constructor(num) {
    this._num = num;
  }

  encrypt(str) {
    let arr = str.toUpperCase().split("");
    let newArr = arr.map((item) => {
      let charNum = item.charCodeAt(0);
      if (charNum >= 65 && charNum <= 90) {
        charNum += this._num;
        if (charNum > 90) {
          charNum -= 26;
        }
        return String.fromCharCode(charNum);
      } else if (charNum >= 97 && charNum <= 122) {
        charNum += this._num;
        if (charNum > 122) {
          charNum -= 26;
        }
        return String.fromCharCode(charNum);
      } else {
        return item;
      }
    });
    return newArr.join("");
  }

  decrypt(str) {
    let arr = str.toLowerCase().split("");
    let newArr = arr.map((item) => {
      let charNum = item.charCodeAt(0);
      if (charNum >= 65 && charNum <= 90) {
        charNum -= this._num;
        if (charNum < 65) {
          charNum += 26;
        }
        return String.fromCharCode(charNum);
      } else if (charNum >= 97 && charNum <= 122) {
        charNum -= this._num;
        if (charNum < 97) {
          charNum += 26;
        }
        return String.fromCharCode(charNum);
      } else {
        return item;
      }
    });
    return newArr.join("");
  }
}
