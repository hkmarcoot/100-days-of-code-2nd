## Object References

Classes are reference types. That means that when we create a new instance of a class and store it in a variable, the variable is a reference to the object.

Let’s see what’s happening behind the scenes. When this code is run:

```
Encyclopedia enc1 = new Encyclopedia();

```

A new Encyclopedia instance is constructed and stored in the computer’s memory. We can imagine a slot in our computer holding the instance’s type, property values, etc. enc1 refers to that location in memory.

enc1 is NOT the actual object — it is a reference to the object. An object can have multiple references:

```
Encyclopedia enc1 = new Encyclopedia();
Encyclopedia enc2 = enc1;

```

enc1 and enc2 are 2 references to the same location in memory: we can say that enc1 and enc2 refer to the same object. If changes are made to that object, then they will be reflected in both references to it:

```
Encyclopedia enc1 = new Encyclopedia();
Encyclopedia enc2 = enc1;
enc1.CurrentPage = 0;
enc2.CurrentPage = 16;
Console.WriteLine(enc1.CurrentPage);
Console.WriteLine(enc2.CurrentPage);

```

- The middle two lines of this code are setting the CurrentPage property of the same object (first setting it to 0, then 16).
- The last two lines will print the same value, 16.

References tell us where to find a value but are not the value themselves. Value types like int or bool are what store values.
