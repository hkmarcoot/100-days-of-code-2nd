/* *****************functions.test.js********************* */
const assignPersonToJob = require("./w45d2_functions");

names1 = ["Annie", "Steven", "Lisa", "Osman"];

names2 = ["Victor", "Paul", "Eddie"];

names3 = ["Dennis", "Vera", "Mabel", "Annette", "Sussan"];

jobs1 = ["Teacher", "Engineer", "Doctor", "Cashier"];

jobs2 = ["Vet", "Nurse", "Web Developer"];

jobs3 = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"];

test("test 1", () => {
  expect(assignPersonToJob(names1, jobs1)).toEqual({
    Annie: "Teacher",
    Steven: "Engineer",
    Lisa: "Doctor",
    Osman: "Cashier",
  });
});

test("test 2", () => {
  expect(assignPersonToJob(names2, jobs2)).toEqual({
    Victor: "Vet",
    Paul: "Nurse",
    Eddie: "Web Developer",
  });
});

test("test 3", () => {
  expect(assignPersonToJob(names3, jobs3)).toEqual({
    Dennis: "Butcher",
    Vera: "Programmer",
    Mabel: "Doctor",
    Annette: "Teacher",
    Sussan: "Lecturer",
  });
});
