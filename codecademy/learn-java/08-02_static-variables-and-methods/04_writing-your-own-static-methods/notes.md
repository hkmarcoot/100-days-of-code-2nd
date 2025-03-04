## Writing Your Own Static Methods

Nice work! Now that we’ve seen how static variables work, let’s look into how to write our own static methods.

Let’s get the syntax out of the way first — just like with variables, to create a static method, use the static keyword in the method’s definition. Just like with variables, this keyword usually comes after public or private.

```
public static void myFirstStaticMethod(){
  // Some code here
}

```

Often times, you’ll see static methods that are accessors or mutators for static variables.

```
public static int getMyStaticVariable(){
  return myStaticVariable;
}

public static void setMyStaticVariable(int newValue){
  myStaticVariable = newValue;
}

```

One important rule to note is that static methods can’t interact with non-static instance variables.

To wrap your mind around this, consider why we use this when working with non-static instance variables. Let’s say we have a Dog class with a non-static instance variable named age. If we have a line of code like this.age = 5;, that means we’re setting the age of a specific Dog equal to 5. However, if age were static, that would mean that the variable belongs to the entire class, not a specific object.

The this keyword can’t be used by a static method since static methods are associated with an entire class, not a specific object of that class. If you try to mix this with a static method, you’ll see the error message non-static variable this cannot be referenced from a static context.
