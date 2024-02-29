/* *******************functions.test.js******************* */
const getHashTags = require("./functions");

test("test 1", () => {
  expect(
    getHashTags("How the Avocado Became the Fruit of the Global Trade")
  ).toEqual(["#avocado", "#became", "#global"]);
});

test("test 2", () => {
  expect(
    getHashTags(
      "Why You Will Probably Pay More for Your Christmas Tree This Year"
    )
  ).toEqual(["#christmas", "#probably", "#will"]);
});

test("test 3", () => {
  expect(
    getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
  ).toEqual(["#surprise", "#parents", "#fruit"]);
});

test("test 4", () => {
  expect(getHashTags("Visualizing Science")).toEqual([
    "#visualizing",
    "#science",
  ]);
});

test("test 5", () => {
  expect(
    getHashTags("Minecraft Stars on Youtube Share Secrets to Their Fame")
  ).toEqual(["#minecraft", "#youtube", "#secrets"]);
});

test("test 6", () => {
  expect(getHashTags("Are You an Elite Entrepreneur?")).toEqual([
    "#entrepreneur",
    "#elite",
    "#are",
  ]);
});
