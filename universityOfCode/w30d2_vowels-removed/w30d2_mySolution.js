function removeVowels(str) {
  return str.replace(/[AEIOUaeiou]/g, "");
}

console.log(
  removeVowels("I have never seen a thin person drinking Diet Coke.")
);
console.log(
  removeVowels(
    "Everybody wants me to talk about Robert Pattinson and not Brian Williams—I guess people just don’t care about Brian!"
  )
);
console.log(
  removeVowels(
    "Katy, what the hell were you thinking when you married loser Russell Brand. There is a guy who has got nothing going, a waste!"
  )
);
console.log(
  removeVowels(
    "Windmills are the greatest threat in the US to both bald and golden eagles. Media claims fictional ‘global warming’ is worse."
  )
);
console.log(
  removeVowels(
    "Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don’t feel so stupid or insecure,it’s not your fault"
  )
);
console.log(
  removeVowels("Happy Thanksgiving to all--even the haters and losers!")
);
console.log(
  removeVowels(
    "Watch Kasich squirm --- if he is not truthful in his negative ads I will sue him just for fun!"
  )
);

/* Given Helpful Links
 String.prototype.replace()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 RegExp Constructor
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 Array.prototype.filter()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/
