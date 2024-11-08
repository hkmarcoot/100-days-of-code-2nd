console.log = function () {};
const assert = require("chai").assert;
const fs = require("fs");
const Structured = require("structured");

const code = fs.readFileSync("public/main.js", "utf8");

describe("", function () {
  it("", function () {
    let structureOne = function () {
      const shortenUrl = () => {
        fetch(url, {
          headers: {
            body: data,
          },
        });
      };
    };

    let structureTwo = function () {
      const shortenUrl = () => {
        fetch(url, {
          body: data,
        });
      };
    };

    let isMatchOne = Structured.match(code, structureOne);
    let isMatchTwo = Structured.match(code, structureTwo);
    assert.isNotOk(
      isMatchOne,
      "Did you create the `body` property in the correct object?"
    );
    assert.isOk(
      isMatchTwo,
      "Did you create the `body` property with a value of `data` in the correct object?"
    );
  });
});
