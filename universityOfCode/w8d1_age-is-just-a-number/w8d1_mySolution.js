class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    // My code solution
    if (this.age === other.age) {
      return other.name + " is the same age as me.";
    } else if (this.age > other.age) {
      return other.name + " is younger than me.";
    } else if (this.age < other.age) {
      return other.name + " is older than me.";
    }
  }
}

p1 = new Person("Samuel", 24);
p2 = new Person("Joel", 36);
p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));

/* Given Helpful Links
 Class Basic Syntax
   - https://javascript.info/class
 Math.sign()
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
 Template Literals
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/
