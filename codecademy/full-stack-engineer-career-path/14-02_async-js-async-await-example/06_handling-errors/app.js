const cookBeanSouffle = require("./library.js");

// Write your code below:
async function hostDinnerParty() {
  try {
    const resolved = await cookBeanSouffle();
    console.log(resolved + " is served!");
  } catch (error) {
    console.log(error);
    console.log("Ordering a pizza!");
  }
}

hostDinnerParty();
