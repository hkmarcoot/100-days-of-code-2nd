import products from "./data.js";

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(data) {
  let shoppingCart = data
    .filter((x) => x.type === "sweet")
    .map((x) => {
      return { item: x.item, price: x.price };
    });
  return shoppingCart;
}

console.log(getSaleItems(products));

// Link
// https://scrimba.com/scrim/co5a54c77aff89de100d2d511
